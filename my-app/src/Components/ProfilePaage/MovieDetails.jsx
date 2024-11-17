import React from 'react';
import { useParams } from 'react-router-dom';

const movieData = {
  '1': { title: 'Finding Nemo', genre: 'Animation', actors: ['Albert Brooks', 'Ellen DeGeneres'] },
  '2': { title: 'Frozen', genre: 'Animation', actors: ['Idina Menzel', 'Kristen Bell'] },
  '3': { title: 'The Little Mermaid', genre: 'Fantasy', actors: ['Jodi Benson', 'Samuel Wright'] },
  '4': { title: 'Mulan', genre: 'Action', actors: ['Ming-Na Wen', 'Eddie Murphy'] },
  '5': { title: 'The Godfather', genre: 'Crime', actors: ['Marlon Brando', 'Al Pacino'] },
  '6': { title: 'Die Hard', genre: 'Action', actors: ['Bruce Willis', 'Alan Rickman'] },
  '7': { title: 'Eat Pray Love', genre: 'Drama', actors: ['Julia Roberts', 'James Franco'] },
  '8': { title: 'The Notebook', genre: 'Romance', actors: ['Ryan Gosling', 'Rachel McAdams'] },
  '9': { title: 'Gran Torino', genre: 'Drama', actors: ['Clint Eastwood', 'Bee Vang'] },
  '10': { title: 'The Bucket List', genre: 'Comedy', actors: ['Jack Nicholson', 'Morgan Freeman'] },
  '11': { title: 'Julie & Julia', genre: 'Biography', actors: ['Meryl Streep', 'Amy Adams'] },
  '12': { title: 'The Sound of Music', genre: 'Musical', actors: ['Julie Andrews', 'Christopher Plummer'] },
};

function MovieDetails() {
  const { movieId } = useParams();
  const movie = movieData[movieId];

  if (!movie) return <p>Movie not found!</p>;

  return (
    <div style={styles.container}>
      <h1>{movie.title}</h1>
      <p>Genre: {movie.genre}</p>
      <p>Actors: {movie.actors.join(', ')}</p>
      <div>
        <button style={styles.button}>Like</button>
        <button style={styles.button}>Dislike</button>
        <button style={styles.button}>Neutral</button>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px', textAlign: 'center' },
  button: { margin: '10px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#4285F4', color: '#fff' },
};

export default MovieDetails;

