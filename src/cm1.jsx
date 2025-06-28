// src/App.jsx
import { createContext, useEffect, useState } from 'react';
import Cm2 from '/UserContext';

export const UserContext = createContext();
export default function Cm1() {
  const [user, setUser] = useState('Sabir Kazi');

  return (
    <div className="min-h-screen bg-[#0f0f1a] p-6 text-white">
      <UserContext.Provider value={user}>
        <h1>Hello {user} from stage 1</h1>
        <Cm2 />
      </UserContext.Provider>
    </div>
  );
}
