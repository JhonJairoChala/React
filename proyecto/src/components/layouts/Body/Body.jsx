import {useState} from 'react'
import { ButtonList } from '../../UI/ButtonList/ButtonList';
import { ColorButton } from '../../UI/ColorButton/ColorButton';

export const Body = () => { 
  
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSubstract = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(0)
  }

  const changeColor = () => {
    let color_Input = document.getElementById("color_input");
    let body = document.getElementById("App");
    body.style.background = color_Input.value;  
  }
  return (
    <div>
        <h2 id="numberBody" className='numberBody'>{counter}</h2>
        <ColorButton/>
        <section className='buttons'>
            <ButtonList 
            style="btnSum"
            event={handleAdd}
            textButton="(+)"
            />
            <ButtonList 
            style="btnSum"
            event={handleReset}
            textButton="Reset"
            />
            <ButtonList 
            style="btnRest"
            event={handleSubstract}
            textButton="(-)"
            />
            <ButtonList 
            style="btnSum"
            event={changeColor}
            textButton="Color"
            />                        
        </section>
    </div>
  )
}
