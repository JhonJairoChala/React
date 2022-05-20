import React from 'react'
const numberBody = document.getElementById("numberBody");
let finalRes = 0; 

function adittion(){
  let sum = numberBody + 1;
  finalRes += sum; 
  document.getElementById("numberBody").textContent = finalRes;
}

function subtraction(){
  let res =  finalRes - 1;
  finalRes = res;
  document.getElementById("numberBody").textContent = finalRes;
}

function reset(){
  finalRes = 0;
  document.getElementById("numberBody").textContent = finalRes;
}
export const Body = () => { 
  
  return (
    <div>
        <h2 id="numberBody" className='numberBody'>0</h2>
        <section className='buttons'>
            <button onClick={subtraction}>(-)</button>
            <button onClick={reset}>(Reset)</button>
            <button onClick={adittion}>(+)</button>
        </section>
    </div>
  )
}
