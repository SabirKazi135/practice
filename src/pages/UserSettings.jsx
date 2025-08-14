import { useParams } from 'react-router-dom';

function UserSettings() {
  const { userName } = useParams();
  return <h1>Setting for {userName}</h1>;
}

export default UserSettings;
