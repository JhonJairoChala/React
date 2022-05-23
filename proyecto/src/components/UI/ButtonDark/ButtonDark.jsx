import React,{useEffect} from 'react'
import {useState} from 'react';

export const ButtonDark = ({event}) => {
  const [modeDark, setDarkMode] = useState(false); 

  const handleOn = () =>{
    setDarkMode(!modeDark);
  }
  useEffect(() => {
    if(modeDark){
      document.getElementById("App").classList.add("dark");
      document.getElementById("App").classList.remove("light");
    }else{
      document.getElementById("App").classList.remove("dark");
      document.getElementById("App").classList.add("light");
    }
  }, [modeDark])
  return (
    <div>
      <button onClick={event} className="nocturno" id="nocturno" >
          <span><i class="fa-solid fa-sun"></i></span>
          <span><i class="fa-solid fa-moon"></i></span>
      </button>
      <br />       
      <button onClick={handleOn} className="button2">DarkMode</button>
    </div>
  )
}
