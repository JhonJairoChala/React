import React from 'react'

export const Ancla = (style,reference,textAncla) => {
  return (
    <nav>
      <ul>
        <li>
          <a className={style} href={reference}>{textAncla}</a>
        </li>
        <li>
          <a className={style} href={reference}>{textAncla}</a>
        </li>
        <li>
          <a className={style} href={reference}>{textAncla}</a>
        </li>
      </ul>
    </nav>
  )
}
