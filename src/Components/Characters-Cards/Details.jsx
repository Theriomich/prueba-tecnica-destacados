import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';

function CharacterDetails(props) {
  const [character, setCharacter] = useState(null);
  const characterId = props.match.params.id;

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error('Error fetching character details:', error);
      });
  }, [characterId]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card
        style={{
          width: '250px',
          backgroundColor: 'green',
        }}
      >
        <Card.Img variant='top' src={character.image} alt={character.name} />
        <Card.Body>
          <h3>{character.name}</h3>
          <ListGroup variant='flush'>
            <ListGroup.Item>Status: {character.status}</ListGroup.Item>
            <ListGroup.Item>Species: {character.species}</ListGroup.Item>
            <ListGroup.Item>Gender: {character.gender}</ListGroup.Item>
            <ListGroup.Item>Origin: {character.origin.name}</ListGroup.Item>
            <ListGroup.Item>Location: {character.location.name}</ListGroup.Item>
            <ListGroup.Item>Episodes: {character.episode.length}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CharacterDetails;