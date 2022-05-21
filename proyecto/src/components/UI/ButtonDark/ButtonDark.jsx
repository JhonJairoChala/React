import React from 'react'

export const ButtonDark = ({event}) => {
  return (
    <button onClick={event} className="nocturno" id="nocturno" >
        <span><i class="fa-solid fa-sun"></i></span>
        <span><i class="fa-solid fa-moon"></i></span>
    </button>
  )
}
