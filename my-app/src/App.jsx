
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './Components/CreateAccount';
import CreateAccountForm from './Components/CreateAccountForm';
import FamilyMemberProfile from './Components/FamilyMemberProfile';

import Login from './Components/Login';
import ProfilePage from './Components/ProfilePage';

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/:member" element={<FamilyMemberProfile />} />
        <Route path="/create-account" element={<CreateAccountForm />} />
    </Routes>
   
  );
}

export default App;





