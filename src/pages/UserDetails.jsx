import { useParams, useNavigate } from 'react-router-dom';
function UserDetails() {
  const { userName } = useParams();
  const navigate = useNavigate();
  function GoBack() {
    navigate(-1);
  }
  return (
    <>
      <h2>Extra Details for {userName}</h2>
      <p>This section contains additional information about the {userName}.</p>
      <button onClick={() => GoBack()}>Go Back</button>
    </>
  );
}

export default UserDetails;
