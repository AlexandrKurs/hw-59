import React, { useEffect, useState } from 'react';

interface Joke {
  id: string;
  value: string;
}

const JokeComponent: React.FC = () => {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data: Joke = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{joke?.value}</p>
          <button onClick={fetchJoke}>New Joke</button>
        </>
      )}
    </div>
  );
};

export default JokeComponent;