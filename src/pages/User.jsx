import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return (
    <div>
      <h1>This is user {id}</h1>
    </div>
  );
}

export default User;
