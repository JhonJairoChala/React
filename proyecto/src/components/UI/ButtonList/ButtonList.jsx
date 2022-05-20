import React from 'react'

export const ButtonList = ({style , event , textButton}) => {
  return (
    <button className={style} onClick={event}>{textButton}</button>
  )
}
