import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Characters.css"

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
    <div className='Cards'>
      {data.map((character, index) => {
        return (
          <Card
            key={index}
            style={{
              width: "250px",
              
              backgroundColor: "green",
              
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
        );
      })}
    </div>
  );
}

export default Characters;