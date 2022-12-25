import React from 'react'
import styled from 'styled-components'

import Picture from './Picture'
import BuyButton from './BuyButton'

export default function CategoryPage(props) {
  const {
    imgSrc,
    inCart,
    productName,
    price,
    currency
  } = props

  return (
    <Wrap>
      <Picture imgSrc={imgSrc} />
      <ProductName>{productName}</ProductName>
      <Price>
        {price}&nbsp;
        <Currency>{currency}</Currency>
      </Price>
      <BuyButton inCart={inCart} />
    </Wrap>
  )
}

const Wrap = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: 56px;
  position: relative;
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
