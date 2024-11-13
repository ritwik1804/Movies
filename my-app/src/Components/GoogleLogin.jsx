import React, { useState } from 'react';

function GoogleLogin() {
  const [googleAccount, setGoogleAccount] = useState(null);

  const handleGoogleLogin = () => {
    // Simulated Google login
    setGoogleAccount("User's Google Account Name"); // Replace with actual Google account name from OAuth
  };

  return (
    <div style={styles.container}>
      <h2>Google Login</h2>
      <button onClick={handleGoogleLogin} style={styles.button}>Login with Google</button>
      {googleAccount && <p style={styles.accountText}>Logged in as: {googleAccount}</p>}
    </div>
  );
}

const styles = {
  container: { padding: '20px', textAlign: 'center' },
  button: {
    backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  accountText: { color: '#333', marginTop: '20px' },
};

export default GoogleLogin;
