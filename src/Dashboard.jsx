import { Profile, Sidebar } from './Components';

export default function Dashboard() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <Profile />
    </div>
  );
}
