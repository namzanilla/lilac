import React from 'react'
import styled from 'styled-components'

export default function Logo() {
  return (
    <Wrap>
      <span>L</span>
      <span>I</span>
      <span>L</span>
      <span>A</span>
      <span>C</span>
    </Wrap>
  )
}

const Wrap = styled.div`
  background: #ddd;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  span {
    font-size: 10px;
    margin-left: 8px;
    position: relative;
    :first-child {
      margin-left: 0;
    }
  }
`
