import React from 'react'
import { Link } from 'react-router-dom'

export const NavigatorUI = () => {
  return (
    <nav className='Nav'>
        <Link to="/" className='link'><span>Home</span></Link>
        <Link to="/mailer" className='link'>Mailer</Link>
        <Link to="/useState" className='link'>API TENOR</Link>
        <Link to="/useCustom" className='link'>UseCustom</Link>
        <Link to="/buttonRickAndMorty" className='link'>RickAndMorty</Link>
    </nav>
  )
}
