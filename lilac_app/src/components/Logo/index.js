import React from 'react'
import styled from 'styled-components'

export default function Logo() {
  return (
    <Wrap>
      <div>
        <span>L</span>
        <span>I</span>
        <span>L</span>
        <span>A</span>
        <span>C</span>
      </div>
      <div>
        <span>M</span>
        <span>A</span>
        <span>R</span>
        <span>K</span>
        <span>E</span>
        <span>T</span>
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
  border-radius: 4px;
  padding: 10px;
  display: inline-flex;
  flex-direction: column;
  div {
    display: flex;
  }
  div:first-child {
    span {
      text-decoration: none;
      font-size: 20px;
      margin-left: 24px;
      position: relative;
      color: #000;
      font-weight: bold;
      font-family: 'RobotoCondensed-Light';
      :first-child {
        margin-left: 0;
      }
    }
  }
  div:last-child {
    font-size: 16px;
    justify-content: space-between;
    font-family: 'Roboto-Bold';
    span {
      color: #204468;
    }
  }
`
