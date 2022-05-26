import React,{useEffect} from 'react'
import {useState} from 'react';

export const ButtonDark = ({event}) => {
  const [modeDark, setDarkMode] = useState(false); 
  const [title, setTitle] = useState("");
  const handleOn = () =>{
    setDarkMode(!modeDark);
  }
  useEffect(() => {
    if(modeDark){
      document.getElementById("App").classList.add("dark");
      document.getElementById("App").classList.remove("light");
      document.getElementById("buttonD").textContent = "ON";
      document.getElementById("buttonD").style.backgroundColor = "White";
      document.getElementById("buttonD").style.color = "Black";
    }else{
      document.getElementById("App").classList.remove("dark");
      document.getElementById("App").classList.add("light");
      document.getElementById("buttonD").textContent = "OFF";
      document.getElementById("buttonD").style.backgroundColor = "Black";
      document.getElementById("buttonD").style.color = "White";
    }
  }, [modeDark])
  return (
    <div>
      <button onClick={event} className="nocturno" id="nocturno" >
          <span><i class="fa-solid fa-sun"></i></span>
          <span><i class="fa-solid fa-moon"></i></span>
      </button>
      <br />       
      <button onClick={handleOn} className="button2" id='buttonD'></button>
    </div>
  )
}
