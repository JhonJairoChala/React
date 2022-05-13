import React from 'react'

export const NavHome = ({textNav1 ,textNav2,textNav3, ref1 , ref2, ref3}) => {
  return (
    <nav>
        <a href={ref1}>{textNav1}</a>
        <a href={ref2}>{textNav2}</a>
        <a href={ref3}>{textNav3}</a>
    </nav>
  )
}
 