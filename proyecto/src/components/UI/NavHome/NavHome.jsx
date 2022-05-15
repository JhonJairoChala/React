import React from 'react'
import { Ancla } from '../Ancla/Ancla'

export const NavHome = () => {
  return (
    <nav className="navHome">
      <ul>
        <li>
          <Ancla 
          style="ancla" 
          reference="https://google.com" 
          textAncla="Home"
          />
          <Ancla 
          style="ancla" 
          reference="https://google.com" 
          textAncla="AboutUs"
          />
          <Ancla 
          style="ancla" 
          reference="https://google.com" 
          textAncla="ContactUs"
          />
        </li>
      </ul>
    </nav>
  )
}
 