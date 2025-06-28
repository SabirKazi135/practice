// src/App.jsx
import { createContext, useEffect, useState } from 'react';

export default function App() {
  const [user, setUser] = useState('Sabir Kazi');
  const UserContext = createContext();

  return (
    <div className="min-h-screen bg-[#0f0f1a] p-6 text-white">
      <UserContext value={user}>
        <h1>Hello {user} from stage 1</h1>
      </UserContext>
    </div>
  );
}
