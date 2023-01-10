import React from 'react'
import styled from 'styled-components'

export default function Container({ children }) {
  return <Wrap>{children}</Wrap>
}

const Wrap = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 16px;
`
