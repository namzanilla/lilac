import React, { Suspense, lazy } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import Loader from './components/Loader'
import Header from './components/Header'

const HomePage = lazy(() => import('./components/HomePage'))
const AboutPage = lazy(() => import('./components/AboutPage'))
const CategoryPage = lazy(() => import('./components/CategoryPage'))

function App() {
  return (
    <StyledApp>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage langCode="uk" />} />
          <Route path="/ru" element={<HomePage langCode="ru" />} />
          <Route path="/c" element={<CategoryPage langCode="uk" />} />
          <Route path="/ru/c" element={<CategoryPage langCode="ru" />} />
          <Route path="/about" element={<AboutPage langCode="uk" />} />
          <Route path="/ru/about" element={<AboutPage langCode="ru" />} />
        </Routes>
      </Suspense>
    </StyledApp>
  )
}

const StyledApp = styled.div``

export default App
