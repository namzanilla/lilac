import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import reportWebVitals from './reportWebVitals'
import App from './App'
import store from './app/store'
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto-Regular';
    src: local('Roboto-Regular'),
    url('/fonts/roboto/Roboto-Regular.ttf') format('opentype');
    font-display: fallback;
  }
  @font-face {
    font-family: 'Roboto-Thin';
    src: local('Roboto-Thin'),
    url('/fonts/roboto/Roboto-Thin.ttf') format('opentype');
    font-display: fallback;
  }
  @font-face {
    font-family: 'Roboto-Bold';
    src: local('Roboto-Bold'),
    url('/fonts/roboto/Roboto-Bold.ttf') format('opentype');
    font-display: fallback;
  }
  @font-face {
    font-family: 'RobotoCondensed-Light';
    src: local('RobotoCondensed-Light'),
    url('/fonts/roboto_condensed/RobotoCondensed-Light.ttf')
    format('opentype');
    font-display: fallback;
  }
  @font-face {
    font-family: 'RobotoCondensed-Regular';
    src: local('RobotoCondensed-Regular'),
    url('/fonts/roboto_condensed/RobotoCondensed-Regular.ttf')
    format('opentype');
    font-display: fallback;
  }
  @font-face {
    font-family: 'RobotoCondensed-Bold';
    src: local('RobotoCondensed-Bold'),
    url('/fonts/roboto_condensed/RobotoCondensed-Bold.ttf')
    format('opentype');
    font-display: fallback;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: inherit;
  }
  body {
    background-color: #fff;
    font: normal normal normal 16px/1.5 "Roboto-Regular";
  }
  html, body {
    height: 100%;
  }
  #root {
    overflow-x: hidden;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 24px;
    padding: 24px 0;
    line-height: 150%;
  }
  a {
    text-decoration: none;
    color: #204468;
  }
  a:hover {
    text-decoration: underline;
  }
  .bg-linear {
    background: repeating-linear-gradient(
      -45deg,
      #e8ebed,
      #e8ebed 10px,
      transparent 10px,
      transparent 20px
    );
  }
`

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
