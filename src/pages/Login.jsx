import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const Navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  function Login() {
    if (userName == "sabir") {
        
    } else {
        
    }
  }
  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
          />
          
          <button onClick={() => Login()}>Login</button>
    </div>
  );
}
