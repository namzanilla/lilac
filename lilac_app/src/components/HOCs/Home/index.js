import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}
