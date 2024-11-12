import React from 'react';
import { useParams } from 'react-router-dom';

function FamilyMemberProfile() {
  const { member } = useParams();

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>{member.charAt(0).toUpperCase() + member.slice(1)}'s Profile</h2>
      <p style={styles.text}>This is the content for {member}'s profile.</p>
    </div>
  );
}

const styles = {
  container: { padding: '20px', textAlign: 'center' },
  header: { color: '#FFFFFF' }, // Light color for better contrast
  text: { color: '#CCCCCC' }, // Slightly darker light color for body text
};

export default FamilyMemberProfile;

