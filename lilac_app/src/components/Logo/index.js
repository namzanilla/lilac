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
  background: #e5d8f0;
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
      font-size: 12px;
      margin-left: 16px;
      position: relative;
      color: #000;
      font-weight: bold;
      font-family: "RobotoCondensed-Regular";
      :first-child {
        margin-left: 0;
      }
    }
  }
  div:last-child {
    font-size: 10px;
    justify-content: space-between;
    font-family: "Roboto-Bold";
    span {
      color: #204468;
    }
  }
`
