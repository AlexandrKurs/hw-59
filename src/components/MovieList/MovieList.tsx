import React from 'react';
import { Movie } from '../../types';
import MovieItem from '../MovieItem/MovieItem.tsx';


interface MovieListProps {
  movies: Movie[];
  deleteMovie: (id: number) => void;
  updateMovie: (id: number, title: string) => void;
}

const MovieList: React.FC<MovieListProps> = React.memo(({ movies, deleteMovie, updateMovie }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          deleteMovie={deleteMovie}
          updateMovie={updateMovie}
        />
      ))}
    </ul>
  );
});

export default MovieList;