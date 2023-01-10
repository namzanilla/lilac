import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cart } from '@styled-icons/ionicons-outline'
import { ArrowForward } from '@styled-icons/ionicons-outline'

import LanguageSwitcher from 'components/LanguageSwitcher'
import Logo from 'components/Logo'

export default function Header() {
  return (
    <Wrap>
      <ColLeft>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Logo />
        </Link>
        <Catalog>
          <Link to="/catalog">
            <span>Каталог</span>
            &nbsp;
            <ArrowForward size={24} />
          </Link>
        </Catalog>
      </ColLeft>
      <ColRight>
        <ColRightRowTop>
          <div>
            <Link to="/delivery">Доставка</Link>
            <Link to="/payment">Оплата</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/about">Про нас</Link>
          </div>
          <div>
            <LanguageSwitcher />
          </div>
        </ColRightRowTop>
        <ColRightRowBottom>
          <nav>
            <Link to="/metal-detectors">Металодетектори</Link>
            <Link to="/metal-detector-coils">
              Котушки до
              <br />
              металошукачів
            </Link>
            <Link to="/magnets">Магніти</Link>
            <Link to="/accessories">Аксесуари</Link>
          </nav>
          <CartWrap>
            <Link to="/cart">
              <Cart size={24} color="#204468" />
            </Link>
          </CartWrap>
        </ColRightRowBottom>
      </ColRight>
    </Wrap>
  )
}

const Wrap = styled.header`
  display: flex;
  align-items: stretch;
  background: repeating-linear-gradient(
    -45deg,
    #e8ebed,
    #e8ebed 10px,
    transparent 10px,
    transparent 20px
  );
`

const CartWrap = styled.div`
  padding: 0 16px;
  background-color: #fff;
  height: 100%;
  border-left: 1px solid #204468;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
  }
`

const Catalog = styled.div`
  height: 50px;
  right: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #204468;
  a {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    height: inherit;
    width: 100%;
    align-items: center;
    color: #fff;
  }
`

const ColLeft = styled.div`
  width: 200px;
  position: relative;
  background-color: #fff;
  > a {
    display: flex;
    width: 100%;
    height: 70px;
    background-color: #e5d8f0;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #204468;
  }
`

const ColRight = styled.div`
  width: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const ColRightRowTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #204468;
  align-items: center;
  height: 40px;
  > div:first-child a {
    margin-left: 32px;
    font-family: 'Roboto-Regular';
    font-size: 14px;
  }
  >div:last-child {
    height: 100%;
  }
`

const ColRightRowBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #204468;
  height: 80px;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-align: center;
      margin-left: 32px;
      text-transform: uppercase;
      font-family: 'RobotoCondensed-Bold';
    }
  }
`
