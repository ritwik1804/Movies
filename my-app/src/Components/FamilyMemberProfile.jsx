import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from './ProfilePaage/MovieDetails'; // Correct import path for MovieDetails
import ProfileMovies from './ProfilePaage/ProfileMovies'; // Correct import path for ProfileMovies

function FamilyMemberProfile() {
  const { member } = useParams();

  // Movies data for each profile
  const movieData = {
    kid: [
      { id: 1, title: 'Frozen', genre: 'Animation' },
      { id: 2, title: 'The Lion King', genre: 'Adventure' },
    ],
    mom: [
      { id: 3, title: 'Pride and Prejudice', genre: 'Drama' },
      { id: 4, title: 'Eat Pray Love', genre: 'Romance' },
    ],
    dad: [
      { id: 5, title: 'Inception', genre: 'Sci-Fi' },
      { id: 6, title: 'The Dark Knight', genre: 'Action' },
    ],
    grandma: [
      { id: 7, title: 'The Notebook', genre: 'Romance' },
      { id: 8, title: 'The Sound of Music', genre: 'Musical' },
    ],
    grandpa: [
      { id: 9, title: 'The Godfather', genre: 'Crime' },
      { id: 10, title: 'Forrest Gump', genre: 'Drama' },
    ],
  };

  // Fetch movies for the current profile
  const movies = movieData[member] || []; // Default to an empty array if no movies found

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{member.charAt(0).toUpperCase() + member.slice(1)}'s Profile</h2>
      <p style={styles.text}>This is the content for {member}'s profile.</p>

      {/* Render ProfileMovies component */}
      <ProfileMovies movies={movies} />

      {/* Render MovieDetails component */}
      <MovieDetails movies={movies} />
    </div>
  );
}

const styles = {
  container: { padding: '20px', textAlign: 'center' },
  header: { color: '#FFFFFF' }, // Light color for better contrast
  text: { color: '#CCCCCC' }, // Slightly darker light color for body text
};

export default FamilyMemberProfile;
