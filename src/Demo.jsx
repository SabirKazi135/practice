import { useState } from 'react';
import { DashboardContext } from './context.jsx';
import Dashboard from './Dashboard';

export default function Demo() {
  const [user] = useState({
    isSubscribed: true,
    name: 'Sabir Kazi',
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
