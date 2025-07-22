import { useState } from 'react';
export default function Login() {
  const [userName, setUserName] = useState(null);
  
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
