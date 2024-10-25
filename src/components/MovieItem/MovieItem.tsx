import React, { useState, useEffect } from 'react';
import { Movie } from '../../types';

interface MovieItemProps {
  movie: Movie;
  deleteMovie: (id: number) => void;
  updateMovie: (id: number, title: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = React.memo(({ movie, deleteMovie, updateMovie }) => {
  const [title, setTitle] = useState(movie.title);

  // Синхронизация заголовка при изменении фильма
  useEffect(() => {
    setTitle(movie.title);
  }, [movie.title]);

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      updateMovie(movie.id, title);
    }
  };

  return (
    <li>
      <form onSubmit={handleUpdate}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введите название фильма"
        />
        <button type="button" onClick={() => deleteMovie(movie.id)}>Удалить</button>
      </form>
    </li>
  );
});

export default MovieItem;