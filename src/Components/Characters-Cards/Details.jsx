import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom'; 
import "./Details.css"
import toHome from "./img/homeimg.png"


function CharacterDetails() {
  // Creo un estado null para actualizarlo después
  const [character, setCharacter] = useState(null);
  // Usa useParams para obtener el valor de _id
  const { _id } = useParams(); 
//Obtengo cada personaje y sus detalels por su id
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${_id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error('Error fetching character details:', error);
      });
  }, [_id]);

  if (!character) {
    return <div>No encontrado</div>;
  }
//Muestro los detalles de cada personaje
  return (
    <div className='cardDetail'>
      <div className='onlyCards'>
      <Card
        style={{
          width: '250px',
          backgroundColor: 'green',
          color: 'white',
        
        }}
      >
        <Card.Img variant='top' src={character.image} alt={character.name} />
        <Card.Body>
          <h3>{character.name}</h3>
          <ListGroup variant='flush' >
            <ListGroup.Item style={{          
          backgroundColor: 'green',
          color:"white"
         
        }}>Status: {character.status}</ListGroup.Item>
            <ListGroup.Item style={{
          
          backgroundColor: 'green',
          color:"white"
         
        }}>Species: {character.species}</ListGroup.Item>
            <ListGroup.Item style={{
          
          backgroundColor: 'green',
          color:"white"
         
        }}>Gender: {character.gender}</ListGroup.Item>
            <ListGroup.Item style={{
          
          backgroundColor: 'green',
          color:"white"
         
        }}>Origin: {character.origin.name}</ListGroup.Item>
            <ListGroup.Item style={{
          
          backgroundColor: 'green',
          color:"white"
         
        }}>Location: {character.location.name}</ListGroup.Item>
            <ListGroup.Item style={{
          
          backgroundColor: 'green',
          color:"white"
         
        }}>Episodes: {character.episode.length}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      </div>
      {/* Link de regreso al Home */}
      <div className="toHomeimg">
      <Link to="/">
          <img src={toHome} alt="To Home" />
        </Link>
      </div>
    </div>
  );
}

export default CharacterDetails;