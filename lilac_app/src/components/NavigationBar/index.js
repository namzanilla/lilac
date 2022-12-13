import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  return (
    <Wrap>
      <nav>
        <Link to="/c">Металошукачі</Link>
        <Link to="/c">
          Котушки до
          <br />
          металошукачів
        </Link>
        <Link to="/c">Аксесуари</Link>
        <Link to="/c">
          Інструменти
          <br />
          та спорядження
        </Link>
        <Link to="/c">
          Книги та
          <br />
          журнали
        </Link>
      </nav>
    </Wrap>
  )
}

const Wrap = styled.div`
  padding: 24px 0;
  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    align-content: stretch;
    max-width: 1920px;
    margin: 0 auto;
  }
  a {
    color: #000;
    font-size: 12px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    :hover {
      text-decoration: underline;
    }
  }
`
