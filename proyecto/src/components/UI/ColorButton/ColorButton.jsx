import React from 'react'

export const ColorButton = () => {
  const changeColor = (event) => {
    let color_Input = document.getElementById("color_input");
    let body = document.getElementById("App");
    body.style.background = color_Input.value;
    body.style.color = event.target.value;   
  }
  return (
        <div>
            <input type="color" id="color_input" className="colorInput" onChange={(e) => changeColor(e)}/>
        </div>
  )
}
