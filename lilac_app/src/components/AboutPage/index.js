import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import React from 'react'

export default function Index() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}
