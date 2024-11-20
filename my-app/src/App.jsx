import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount';
import CreateAccountForm from './Components/CreateAccountForm';
import FamilyMemberProfile from './Components/FamilyMemberProfile';
import Login from './Components/Login';
import Navbar from "./Components/Navbar/Navbar"; // Importing Navbar Component
import NotFound from "./Components/NotFound";



function App() {
  return (
    <>
      {/* Navbar will appear on all pages */}
      <Navbar />

      {/* Define routes for the app */}
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Create Account Pages */}
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/create-account/form" element={<CreateAccountForm />} />

        {/* Profile and Movie Pages */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:member" element={<FamilyMemberProfile />} />
        <Route path="/profile/:profileId" element={<ProfileMovies />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;






