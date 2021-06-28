import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  
  return (
    <div className='nav-container'>
      <Link to="/products">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  )
}

export default Nav