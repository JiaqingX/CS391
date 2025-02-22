import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayData from '../components/DisplayData';

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
}

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<{ results: Character[] }>('https://rickandmortyapi.com/api/character')
      .then((response: { data: { results: Character[] } }) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <DisplayData characters={data} />;
};

export default DataFetcher;