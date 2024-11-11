import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {  // Renamed to CreateAccount
  const navigate = useNavigate();

  const handleGoogleSignup = () => {
    alert('Google Signup clicked');
  };

  const handleEmailSignup = (e) => {
    e.preventDefault();
    alert('Signup with Email & Password');
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2>Create Account</h2>
        <button onClick={handleGoogleSignup} style={styles.googleButton}>
          Sign up with Google
        </button>
        <p>or</p>
        <form onSubmit={handleEmailSignup} style={styles.form}>
          <input type="email" placeholder="Email ID" style={styles.input} required />
          <input type="password" placeholder="Password" style={styles.input} required />
          <button type="submit" style={styles.submitButton}>Sign Up</button>
        </form>
        <p>
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} style={styles.loginButton}>
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #333, #555, #777, #999)',
  },
  container: {
    maxWidth: '400px',
    width: '100%',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'white',
    borderRadius: '8px',
  },
  googleButton: {
    backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    margin: '10px 0',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#f1f1f1',
    color: '#333',
    outline: 'none',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '4px',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  loginButton: {
    backgroundColor: 'transparent',
    color: '#4285F4',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    textDecoration: 'underline',
    marginTop: '15px',
  },
};

export default CreateAccount;
