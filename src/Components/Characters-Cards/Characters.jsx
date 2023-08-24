import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Characters.css"
import CharacterDetails from './Details';

function Characters() {
  const [data, setData] = useState([]);

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
    <div className='Cards' >
      {data.map((character, index) => {
        return (
          <Link to={`/CharacterDetails/${character.id}`} key={index} className='CardLink'>
            <Card
              style={{
                width: '250px',
                backgroundColor: 'green',

            
              }}
            >
              <Card.Img variant='top' src={character.image} alt={character.name} />
              <Card.Body  >
                <h3>{character.name}</h3>
              </Card.Body>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}

export default Characters;