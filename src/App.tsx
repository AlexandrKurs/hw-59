import React, { useState } from 'react';
import MovieList from './components/MovieList/MovieList.tsx';
import { Movie } from './types';
import './App.css';

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
    <div className="app-container">
      <h1>Movie Tracker</h1>
      <form onSubmit={addMovie} className="movie-form">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите название фильма"
        />
        <button type="submit">Add</button>
      </form>
      <h2>Movie List</h2>
      <MovieList movies={movies} deleteMovie={deleteMovie} updateMovie={updateMovie} />
    </div>
  );
};

export default App;