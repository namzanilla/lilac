import React from 'react'
import styled from 'styled-components'

export default function Picture(props) {
  const { imgSrc } = props

  return (
    <Wrap>
      <div>
        {imgSrc ? (
          <img loading="lazy" src={imgSrc} alt="" />
        ) : null}
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
  position: relative;
  border-bottom: 1px solid #c0c0c0;
  padding-bottom: 56.25%;
  div {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    overflow: hidden;
  }
  img {
    height: 100%;
    display: block;
    margin: 0 auto;
  }
`
