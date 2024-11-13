import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount';
import CreateAccountForm from './Components/CreateAccountForm';
import FamilyMemberProfile from './Components/FamilyMemberProfile';
import GoogleLogin from './Components/GoogleLogin';
import Login from './Components/Login';
import ProfilePage from './Components/ProfilePage';

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/:member" element={<FamilyMemberProfile />} />
      <Route path="/google-login" element={<GoogleLogin />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
    </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;





