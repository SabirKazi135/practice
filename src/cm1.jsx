// src/App.jsx
import { useContext } from 'react';
import UserContext from './UserContext.js';

export default function Cm1() {
  const user2 = useContext(UserContext);
  return (
    <div className="min-h-screen bg-[#0f0f1a] p-6 text-white">
      <h1>Hello {user2} from stage 1</h1>
    </div>
  );
}
