import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

export default function Layout(props) {
  const {
    children,
    h1 = '',
    title = ''
  } = props

  return (
    <Wrap>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1>{h1}</h1>
      {children}
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 0 16px 0;
  background: #f6f6f6;
`
