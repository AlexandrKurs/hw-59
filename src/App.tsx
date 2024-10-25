import React, { useState } from 'react';
import { Movie } from './types';


const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      setMovies([...movies, { id: Date.now(), title: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Movie Tracker</h2>
      <form onSubmit={addMovie}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите название фильма"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;