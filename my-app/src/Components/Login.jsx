import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Simulate successful login
    alert('Google Login clicked');
    navigate('/profile'); // Redirect to Profile page
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    // Simulate successful email login
    alert('Login with Email & Password');
    navigate('/profile'); // Redirect to Profile page
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h2>Login</h2>
        <button onClick={handleGoogleLogin} style={styles.googleButton}>
          Login with Google
        </button>
        <p>or</p>
        <form onSubmit={handleEmailLogin} style={styles.form}>
          <input type="email" placeholder="Email ID" style={styles.input} required />
          <input type="password" placeholder="Password" style={styles.input} required />
          <button type="submit" style={styles.loginButton}>Login</button>
        </form>
        <p>
          Don’t have an account?{' '}
          <Link to="/create-account" style={styles.createAccountButton}>
            Create Account
          </Link>
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
    backgroundImage: 'url(./background-image.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust overlay color and opacity as needed
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
  heading: {
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  },
  googleButton: {
    backgroundColor: '#4285F4',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginBottom: '20px',
  },
  orText: {
    margin: '15px 0',
    color: '#666',
    fontSize: '14px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    margin: '10px 0',
    fontSize: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    color: '#333',
    outline: 'none',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '15px',
    transition: 'background-color 0.3s ease',
  },
  createAccountButton: {
    backgroundColor: 'transparent',
    color: '#4285F4',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    textDecoration: 'underline',
  },
  footerText: {
    marginTop: '20px',
    color: '#666',
  }
};

export default Login;

