import { useState } from 'react';
import { UserContext } from './UserContext.js';

import Cm1 from './cm1';
import Cm2 from './cm2';
import Cm3 from './cm3';

export default function Cm0() {
  const [user, setUser] = useState('Sabir Kazi');

  return (
    <UserContext.Provider value={user}>
      <div className="min-h-screen bg-[#0f0f1a] p-6 text-white">
        <Cm1 />
        <Cm2 />
        <Cm3 />
      </div>
    </UserContext.Provider>
  );
}
