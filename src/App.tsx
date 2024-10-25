import React, { useState } from 'react';
import { Movie } from './types';
import MovieList from './components/MovieList/MovieList.tsx';


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

  const deleteMovie = (id: number) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const updateMovie = (id: number, title: string) => {
    setMovies(movies.map(movie => (movie.id === id ? { ...movie, title } : movie)));
  };

  return (
    <div>
      <h1>Movie Tracker</h1>
      <form onSubmit={addMovie}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите название фильма"
        />
        <button type="submit">Add</button>
      </form>
      <MovieList movies={movies} deleteMovie={deleteMovie} updateMovie={updateMovie} />
    </div>
  );
};

export default App;