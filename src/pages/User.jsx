import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return (
    <div>
      <h1>This is {id}'s profile</h1>
    </div>
  );
}

export default User;
