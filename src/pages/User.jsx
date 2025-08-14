import { useParams } from 'react-router-dom';

export default function User() {
  const { username } = useParams();
  return (
    <div>
      <h2>User Profile</h2>
      <p>Profile: {username}</p>
    </div>
  );
}
