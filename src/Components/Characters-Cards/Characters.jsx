import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Characters.css"


function Characters() {
  {/* Creo el estado un array vacio para actualizarlo despues*/}
  const [data, setData] = useState([]);

{/* Con Axios hago la solicitus a la API de Rick And Morty*/}
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='Cards'>
       {/* Por cada tarjeta me imprime el nombre y la imagen del personaje en la tarjeta de Bootstrap*/}
      {data.map((character, index) => {
        return (
          // El index es el identificador del div, para los elementos que se estan renderizando
          //  Con Link to me dirijo a la ruta dinamica de los detalles de cada personaje*/
          <Link to={`/details/${character.id}`} key={index} className='CardLink'>
            <Card
              style={{
                width: '250px',
                backgroundColor: 'green',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <Card.Img variant='top' src={character.image} alt={character.name} />
              <Card.Body>
                <h3 style={{ textDecoration: 'none' }}>{character.name}</h3>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default Characters;