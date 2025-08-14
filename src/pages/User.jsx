import { useParams } from 'react-router-dom';

function User() {
  const { userName } = useParams();
  return (
    <>
      <h1>User Page</h1>
      <h2>Users Name: {userName} </h2>
    </>
  );
}

export default User;
