import React,{useState} from 'react';
import {useEffect} from 'react';
import imagen from '../../../Images/rick-and-morty.webp';
export const ButtonRickAndMorty = () => {
  const URL = "https://rickandmortyapi.com/api/character/?name=";
  const [character, searchCharacter] = useState(false);
  const Card = document.getElementById("Card");
  
  const activeName = () => {
    searchCharacter(!character);
  }

  useEffect(() => {
    if(character){
        getCharactersByKeys(document.getElementById("input_Character").value);
    }else{
      
    }
  },[character])


  function getCharactersByKeys(searchCharacter){
    document.getElementById("Card").innerHTML = "";
    fetch(URL+searchCharacter)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            createElements(element.image , element.name)
        });
    })
  }

  function createElements(url,nameT){
    while(true){
        let container = document.createElement('div')
        let imgSpot = document.createElement('img')
        container.setAttribute('class',"character_Container")
        imgSpot.setAttribute('src',url);
        imgSpot.setAttribute('class',"imgCharacters")
        container.appendChild(imgSpot);
        let nameText = document.createElement('h1');
        nameText.textContent = nameT;
        nameText.setAttribute('class',"nameCharacters")
        container.appendChild(nameText)
        Card.appendChild(container)
        break;
    }  
  }
  
  return (
    <div>
      <br />
      <h1 className='textCharacter'>Que personaje quieres buscar</h1>
      <br />
      <input type="text" id="input_Character"  className="form-control" onKeyDown={activeName}></input>
      <div id='Card' className='character_Card'>
          <img src={imagen} alt="" className="imgRickAndMorty"/>
      </div>
    </div>
  )
}
