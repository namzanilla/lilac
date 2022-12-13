// import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { BsFillCartFill } from 'react-icons/bs'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

export default function CategoryPage(props) {
  const { imgSrc, inCart, productName, price, currency } = props
  const { t } = useTranslation()

  return (
    <Wrap className="item">
      <ImgContainer>
        {imgSrc ? <img loading="lazy" src={imgSrc} alt="" /> : null}
      </ImgContainer>

      <ProductName>{productName}</ProductName>

      <Price>
        {price}&nbsp;
        <Currency>{currency}</Currency>
      </Price>

      <button>
        <div>
          {inCart ? (
            <BsFillCartCheckFill size={26} color="green" />
          ) : (
            <BsFillCartFill size={26} />
          )}
        </div>
        <span>{t('Buy')}</span>
      </button>
    </Wrap>
  )
}

const Wrap = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: 56px;
  position: relative;
  //box-shadow: 0px 0px 50px -25px rgba(0,0,0,0.5);
  button {
    position: absolute;
    height: 56px;
    border: none;
    border-top: 1px solid #c0c0c0;
    cursor: pointer;
    outline: none;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background: aliceblue;
    div {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 56px;
      border-right: 1px solid #c0c0c0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      font-size: 16px;
      text-transform: uppercase;
      padding-left: 56px;
    }
  }
`

const ProductName = styled.div`
  padding: 42px 0 0;
  text-align: center;
`

const Price = styled.div`
  padding: 11px 0 34px;
  text-align: center;
  font-size: 32px;
  color: red;
`

const Currency = styled.span`
  color: #000;
  font-size: 16px;
  font-style: italic;
`

const ImgContainer = styled.div`
  border-bottom: 1px solid #c0c0c0;
  img {
    width: 100%;
    display: block;
  }
`
