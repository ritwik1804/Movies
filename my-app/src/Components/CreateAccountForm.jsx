import React, { useState } from 'react';

function CreateAccount() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError('');
      alert("Account created successfully!");
      // Handle account creation logic here
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={styles.input}
          required
        />
        {error && <p style={styles.errorText}>{error}</p>}
        <button type="submit" style={styles.submitButton}>Create Account</button>
      </form>
    </div>
  );
}

const styles = {
  container: { padding: '20px', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  input: {
    padding: '10px',
    margin: '10px 0',
    fontSize: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '250px',
    backgroundColor: '#f9f9f9',
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
    borderRadius: '5px',
    marginTop: '15px',
  },
  errorText: { color: 'red', fontSize: '14px' },
};

export default CreateAccount;
