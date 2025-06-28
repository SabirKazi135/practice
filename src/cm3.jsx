import { useContext } from 'react';
import { UserContext } from '/UserContext';
function Cm3() {
  const user3 = useContext(UserContext);
  return (
    <div>
      <h1>Hello {user3} from stage 3</h1>
    </div>
  );
}

export default Cm3;
