import {useState} from 'react';
import {useEffect} from 'react';
import { ButtonDark } from '../../UI/ButtonDark/ButtonDark';
import { ButtonList } from '../../UI/ButtonList/ButtonList';
import { ColorButton } from '../../UI/ColorButton/ColorButton';
import { Logo } from '../../UI/Logo/Logo';

export const Body = () => { 
  
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 10)
  }

  const handleSubstract = () => {
    setCounter(counter - 10)
  }

  const handleReset = () => {
    setCounter(0)
  }
  let color_Input = document.getElementById("color_input");
  const changeColor = (event) => {
    let body = document.getElementById("App");
    // body.style.background = color_Input.value;
    body.style.color = event.target.value;   
  }
  
  const darkMode = () => {
    const btnNocturno = document.querySelector("#nocturno");
    document.getElementById("App").classList.toggle("dark");
    // document.bodyApp.classList.toggle("dark");
    btnNocturno.classList.toggle("active");
  }
  useEffect(() => {
    if(counter >= 100) {
      document.getElementById("logo").style.filter = "none";  
    }else{
      document.getElementById("logo").style.filter = "grayscale()";
    }
  } ,[counter])
  return (
    <div>
        <h2 id="numberBody" className='numberBody'>{counter}</h2>
        <ButtonDark
        event={darkMode}/>
        <br /><br /><br /><br /><br /><br />
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
            value={color_Input.value}
            />                        
        </section>
        <section>
          <Logo/>
        </section>
    </div>
  )
}
