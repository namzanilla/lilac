import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'

export default function Footer() {
  return (
    <Wrap className="bg-linear">
      <Container>Footer</Container>
    </Wrap>
  )
}

const Wrap = styled.footer`
  flex-grow: 0;
  flex-shrink: 0;
  border-top: 1px solid #204468;
  margin-top: 16px;
`
