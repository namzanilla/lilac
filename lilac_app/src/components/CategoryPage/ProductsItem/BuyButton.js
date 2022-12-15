import React from 'react'
import styled from 'styled-components'
import { BsFillCartFill } from 'react-icons/bs'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

export default function BuyButton(props) {
  const { inCart } = props
  const { t } = useTranslation()

  return (
    <Wrap>
      <div>
        {inCart ? (
          <BsFillCartCheckFill size={20} color="green" />
        ) : (
          <BsFillCartFill size={20} />
        )}
      </div>
      <span>{t('Buy')}</span>
    </Wrap>
  )
}

const Wrap = styled.button`
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
    font-size: 12px;
    text-transform: uppercase;
    padding-left: 56px;
    font-weight: bold;
  }
`
