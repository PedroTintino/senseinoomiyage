import React from "react";
import { useState } from "react";
import './Random.css'

function Random(){
    const [randomText, setRandomText ] = useState('')

    const handleClick = () => {
        fetch('public/json/content.json') 
          .then(response => response.json())
          .then(data => {
            if (data && data.content && Array.isArray(data.content) && data.content.length > 0) {
              const randomIndex = Math.floor(Math.random() * data.content.length);
              const randomText = data.content[randomIndex];
              setRandomText(randomText);
            } else {
              console.error('JSON inválido ou vazio.');
            }
          })
          .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
          });
      };
    

    return(
        <div>
            {randomText && <p className="randomText">{ randomText }</p>}
            <button className='regenBtn' onClick={ handleClick }>新しい</button>
        </div>
    )
}

export default Random