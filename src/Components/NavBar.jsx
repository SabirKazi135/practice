import { Link } from 'react-router-dom';

function NavbBar() {
  return (
    <nav>
      <Link to="./">Home</Link>
      <Link to="./about">About</Link>
    </nav>
  );
}

export default NavbBar;
