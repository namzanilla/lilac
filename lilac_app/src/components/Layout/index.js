import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import Container from 'components/Container'

export default function Layout(props) {
  const { children, h1 = '', title = '' } = props

  return (
    <Wrap>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Container>
        <h1>{h1}</h1>
      </Container>
      {children}
    </Wrap>
  )
}

const Wrap = styled.div`
  //padding: 0 16px 0;
  //background: #f6f6f6;
  flex-grow: 1;
`
