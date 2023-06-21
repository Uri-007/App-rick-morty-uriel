import React, { useState } from 'react'
import Character from '../components/Character';

export const Inicio = () => {

  const [character, setCharacter] = useState(null);

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacter(characterApi.results);
    console.log(characterApi)
  };

  console.log(character)


  return (
    <div className="container mt-5 text-center">
    <header className="App-header">
      <h1 className="title">Rick & Morty</h1>
      {character ? (
        <Character character={character} setCharacter={setCharacter}/>
      ) : (
        <>
          <button onClick={reqApi} className="btn btn-primary">
            Buscar personajes
          </button>
        </>
      )}
    </header>
  </div>
    
  )
}
