import {useState} from 'react'
import { ButtonDark } from '../../UI/ButtonDark/ButtonDark';
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
  const darkMode = () => {
    const btnNocturno = document.querySelector("#nocturno");
    document.body.classList.toggle("dark");
    btnNocturno.classList.toggle("active");
  }
  return (
    <div>
        <h2 id="numberBody" className='numberBody'>{counter}</h2>
        <br /><br /><br /><br />
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
            <ColorButton/>
            <ButtonList 
            style="btnSum"
            event={changeColor}
            textButton="Color"
            />                        
        </section>
        <div>
          <ButtonDark
          event={darkMode}/>
        </div>
    </div>
  )
}
