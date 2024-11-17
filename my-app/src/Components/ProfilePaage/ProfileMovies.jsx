import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Sample movie data (you can fetch this from an API or database)
const moviesByProfile = {
  kid: [
    { id: '1', title: 'Finding Nemo', genre: 'Animation', actors: ['Albert Brooks', 'Ellen DeGeneres'] },
    { id: '2', title: 'Frozen', genre: 'Animation', actors: ['Idina Menzel', 'Kristen Bell'] },
  ],
  girl: [
    { id: '3', title: 'The Little Mermaid', genre: 'Fantasy', actors: ['Jodi Benson', 'Samuel Wright'] },
    { id: '4', title: 'Mulan', genre: 'Action', actors: ['Ming-Na Wen', 'Eddie Murphy'] },
  ],
  dad: [
    { id: '5', title: 'The Godfather', genre: 'Crime', actors: ['Marlon Brando', 'Al Pacino'] },
    { id: '6', title: 'Die Hard', genre: 'Action', actors: ['Bruce Willis', 'Alan Rickman'] },
  ],
  mom: [
    { id: '7', title: 'Eat Pray Love', genre: 'Drama', actors: ['Julia Roberts', 'James Franco'] },
    { id: '8', title: 'The Notebook', genre: 'Romance', actors: ['Ryan Gosling', 'Rachel McAdams'] },
  ],
  grandpa: [
    { id: '9', title: 'Gran Torino', genre: 'Drama', actors: ['Clint Eastwood', 'Bee Vang'] },
    { id: '10', title: 'The Bucket List', genre: 'Comedy', actors: ['Jack Nicholson', 'Morgan Freeman'] },
  ],
  grandma: [
    { id: '11', title: 'Julie & Julia', genre: 'Biography', actors: ['Meryl Streep', 'Amy Adams'] },
    { id: '12', title: 'The Sound of Music', genre: 'Musical', actors: ['Julie Andrews', 'Christopher Plummer'] },
  ],
};

function ProfileMovies() {
  const { profileId } = useParams();
  const movies = moviesByProfile[profileId] || [];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{profileId.charAt(0).toUpperCase() + profileId.slice(1)}'s Movies</h2>
      <div style={styles.grid}>
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} style={styles.card}>
            <div style={styles.movieBox}>
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '20px', textAlign: 'center' },
  heading: { color: '#f0f0f0' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '20px' },
  card: { textDecoration: 'none', color: 'inherit' },
  movieBox: { padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', textAlign: 'center' },
};

export default ProfileMovies;

