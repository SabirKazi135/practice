import { useParams } from 'react-router-dom';
function UserDetails() {
  const { userName } = useParams();
  return (
    <>
      <h2>Extra Details for {userName}</h2>
      <p>This section contains additional information about the {userName}.</p>
    </>
  );
}

export default UserDetails;
