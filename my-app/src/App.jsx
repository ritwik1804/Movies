import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount';
import CreateAccountForm from './Components/CreateAccountForm';
import FamilyMemberProfile from './Components/FamilyMemberProfile';
import Login from './Components/Login';
import MovieDetails from './Components/ProfilePaage/MovieDetails';
import ProfileMovies from './Components/ProfilePaage/ProfileMovies';
import ProfilePage from './Components/ProfilePaage/ProfilePage';

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/:member" element={<FamilyMemberProfile />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
        <Route path="/profile/:profileId" element={<ProfileMovies />} /> 
        <Route path="/movie/:movieId" element={<MovieDetails />} />
    </Routes>
   
  );
}

export default App;





