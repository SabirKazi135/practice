import { useParams } from 'react-router-dom';
function UserDetails() {
  const { id } = useParams();
  return (
    <>
      <h2>Extra Details for {id}</h2>
      <p>This section contains additional information about the {id}.</p>
    </>
  );
}

export default UserDetails;
