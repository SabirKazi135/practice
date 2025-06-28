import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Cm2() {
  const user2 = useContext(UserContext);

  return (
    <div>
      <h1>Hello {user2} from stage 2</h1>
    </div>
  );
}
