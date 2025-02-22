import React from 'react';
import styled from 'styled-components';

interface CharacterProps {
  characters: {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
  }[];
}

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 10px;
  margin: 16px;
  text-align: center;
`;

const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const DisplayData: React.FC<CharacterProps> = ({ characters }) => (
  <div>
    {characters.map((char) => (
      <Card key={char.id}>
        <CharacterImage src={char.image} alt={char.name} />
        <h2>{char.name}</h2>
        <p>Species: {char.species}</p>
        <p>Status: {char.status}</p>
        <p>Gender: {char.gender}</p>
        <p>Origin: {char.origin.name}</p>
        <p>Location: {char.location.name}</p>
      </Card>
    ))}
  </div>
);

export default DisplayData;