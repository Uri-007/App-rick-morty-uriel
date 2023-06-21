import React from "react";

export default function Character(props) {
  const { character, setCharacter } = props;

  const resetCharacter = () => {
    setCharacter(null);
  };

  return (

    <div className="container">
      <div className="row g-3">
        {character.map((character, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4 box-shadow alert-secondary">
              <img className="card-img-top" src={character.image} alt={character.name}/>
              <div className="card-body">
                <h3>{character.name}</h3>
                <h6>
                  {character.status === "Alive" ? (
                    <>
                      <span className="text-success">Alive</span>
                    </>
                  ) : (
                    <>
                      <span className="text-danger">Dead</span>
                    </>
                  )}
                </h6>
                <p className="text-dark">
                  <span>Episodios: </span>
                  {character.episode.length}
                  <span></span>
                </p>
                <p>
                  <span className="text-info">Especie: </span>
                  <span className="text-info">{character.species}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className="btn btn-warning" onClick={resetCharacter}>
        Volver al inicio
      </span>
    </div>
    
  );
}
