import { useState } from 'react';
import { DashboardContext } from './context';
import Dashboard from './Dashboard';

export default function Demo() {
  const [user] = useState({
    isSubscribed: true,
    name: 'You',
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
