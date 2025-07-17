import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const { username } = useParams(); // get value from URL

  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
}
