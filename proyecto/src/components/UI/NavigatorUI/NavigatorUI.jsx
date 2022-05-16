import React from 'react'
import { Link } from 'react-router-dom'

export const NavigatorUI = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/aboutUS">About US</Link>
      <Link to="/contactUS">Contact US</Link>  
    </nav>
  )
}
