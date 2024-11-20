import React from 'react';
import './MovieRow.css';

function ProfileMovies({ title, movies }) {
  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="movie-poster"
            src={movie.poster}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileMovies;

