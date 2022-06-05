import React,{useState} from 'react'
import {useEffect} from 'react'

export const ButtonUseState = () => {
   
  const [gifs , createGifs] = useState(false);

  function createGif(data){
    data.results.map(gif => {
      const mainContainer = document.getElementById('mainContainer');
      const imgCard = document.createElement("img");
      imgCard.classList.add('img-gif');
      imgCard.src = gif.media[0].mediumgif.url;
      mainContainer.appendChild(imgCard);
    });
  }
  
  function searchGifs(){    
    const inputGif = document.getElementById("input_Gif");
    const URL = "https://g.tenor.com/v1/search?"
    const key = "T4VZ4FO1QCLY";
    const query = `q=${inputGif.value}`
    const limit = "&limit=10";

    document.getElementById("mainContainer").innerHTML = "";
    fetch(`${URL}${query}&key=${key}${limit}`)
    .then(response => response.json())
    .then(data => {createGif(data)})
  }

  useEffect(() => {
    trendingGifs()
  }, [gifs])
  

  function trendingGifs(){    
    const URLTrend = "https://g.tenor.com/v1/trending?";
    const limit = "&limit=10";
    const key = "464IP8LIAI7X"; 
    fetch(`${URLTrend}&key=${key}${limit}`)
    .then(response => response.json())
    .then(data => {createGif(data)})
  }

  function checkGifs(){
    while(document.getElementById('mainContainer').lastChild){
      document.getElementById('mainContainer').removeChild(document.getElementById('mainContainer').lastChild)
    }
    searchGifs();
  }
  
  return (
    <div>
      <h1 className='text-Gif'>Busca un gif</h1>
      <input type="text" id='input_Gif' className='input_Gif' onKeyDown={checkGifs}/>
      <div id='mainContainer'>

      </div>
    </div>
  )
}
