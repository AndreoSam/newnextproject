import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
      {/* <h2>Hello Next.js!</h2>
      <p>Welcome to Next.js!</p>
      <h2>Features of the website</h2>
      <br /> */}
      <button>
        <Link href="/features/feature1">Feature 1</Link>
      </button>
      <button>
        <Link href="/features/feature2">Fetature 2</Link>
      </button>
    </div>
  )
}

export default index