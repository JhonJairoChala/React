import React from 'react'

export const ButtonUseState = () => {
   
  const URL = "https://g.tenor.com/v1/search?";
 
  function createGif(data){
    data.results.map(gif => {
      const mainContainer = document.getElementById('mainContainer');
      const imgCard = document.createElement("img");
      imgCard.classList.add('img-gif');
      imgCard.src = gif.media[0].mediumgif.url;
      mainContainer.appendChild(imgCard);
    });
  }
  
  function trendingGifs(){    
    document.getElementById("mainContainer").innerHTML = "";
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
    trendingGifs();
  }
  
  return (
    <div>
      <input type="text" id='input_Gif' onKeyDown={checkGifs}/>
      <div id='mainContainer'>

      </div>
    </div>
  )
}
