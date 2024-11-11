import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
  const familyMembers = [
    { name: 'Kid', emoji: '👦', path: 'kid' },
    { name: 'Girl', emoji: '👧', path: 'girl' },
    { name: 'Dad', emoji: '👨', path: 'dad' },
    { name: 'Mom', emoji: '👩', path: 'mom' },
    { name: 'Grandpa', emoji: '👴', path: 'grandpa' },
    { name: 'Grandma', emoji: '👵', path: 'grandma' },
  ];

  return (
    <div style={styles.container}>
      <h2>Family Profiles</h2>
      <div style={styles.profileContainer}>
        {familyMembers.map((member) => (
          <div key={member.name} style={styles.profile}>
            <span style={styles.emoji}>{member.emoji}</span>
            <p>{member.name}</p>
            <Link to={`/profile/${member.path}`} style={styles.button}>
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: 'center', padding: '20px' }, 
  profileContainer: { display: 'flex', gap: '20px', justifyContent: 'center' },
  profile: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  emoji: { fontSize: '40px' },
  button: {
    marginTop: '10px',
    padding: '5px 10px',
    backgroundColor: '#4285F4',
    color: 'white',
    borderRadius: '4px',
    textDecoration: 'none',
  },
};

export default ProfilePage;
