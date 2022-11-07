import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import Loader from './components/Loader'

const HomePage = lazy(() => import('./components/HomePage'))
const AboutPage = lazy(() => import('./components/AboutPage'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
