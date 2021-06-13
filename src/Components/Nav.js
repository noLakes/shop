import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav-container'>
      <Link to="/">Products</Link>
      <Link to="/">Cart</Link>
    </div>
  )
}

export default Nav