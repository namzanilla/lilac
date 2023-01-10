import React from 'react'
import styled from 'styled-components'
import { Language } from '@styled-icons/ionicons-outline'

export default function LanguageSwitcher() {
  return (
    <Wrap>
      <Language size={20} />
      {/* eslint-disable-next-line */}
      <a href="#">EN</a>
      {/* eslint-disable-next-line */}
      <a href="#">UK</a>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  padding: 0 16px;
  border-left: 1px solid #204468;
  height: inherit;
  background-color: #fff;
  align-items: center;
  a {
    margin-left: 8px;
    font-size: 12px;
    font-family: "Roboto-Bold";
  }
  svg {
    display: block;
  }
`
