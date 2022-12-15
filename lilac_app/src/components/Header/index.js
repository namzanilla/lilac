import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import LanguageSwitcher from 'components/LanguageSwitcher'
import Logo from 'components/Logo'
import { BsFillCartFill } from 'react-icons/bs'

export default function Header() {
  return (
    <Wrap>
      <Inner>
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/c">Металошукачі</Link>
        <Link to="/c">
          Котушки до
          <br />
          металошукачів
        </Link>
        <Link to="/c">Аксесуари</Link>
        <Link to="/c">
          Інструменти
          <br />
          та спорядження
        </Link>
        <Link to="/c">
          Книги та
          <br />
          журнали
        </Link>
        <div>
          <LanguageSwitcher />
          <Link to="/cart">
            <BsFillCartFill size={20} />
          </Link>
        </div>
      </Inner>
   </Wrap>
  )
}

const Wrap = styled.header`
  background: #eee;
`

const Inner = styled.div`
  padding: 32px 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  max-width: 1920px;
  margin: 0 auto;
  > div {
    display: flex;
    > a {
      margin-left: 8px;
    }
  }
  a {
    color: #000;
    font-size: 12px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    :hover {
      text-decoration: underline;
    }
  }
`
