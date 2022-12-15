import React from 'react'
import styled from 'styled-components'
import { GrLanguage } from 'react-icons/gr';

export default function LanguageSwitcher() {
  return (
    <Wrap>
      <GrLanguage />
      {/* eslint-disable-next-line */}
      <a href="#">RU</a>
      {/* eslint-disable-next-line */}
      <a href="#">UK</a>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 8px;
  }
`
