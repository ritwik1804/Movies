import React from 'react';
import { useParams } from 'react-router-dom';

function FamilyMemberProfile() {
  const { member } = useParams();

  return (
    <div style={styles.container}>
      <h2>{member.charAt(0).toUpperCase() + member.slice(1)}'s Profile</h2>
      <p>This is the content for {member}'s profile.</p>
    </div>
  );
}

const styles = {
  container: { padding: '20px', textAlign: 'center' },
};

export default FamilyMemberProfile;
