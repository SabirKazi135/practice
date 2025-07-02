import { CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="flex items-center justify-between bg-white p-4 text-black shadow">
        <h1 className="text-xl font-bold">My Meals</h1>
        <div className="flex items-center gap-2 text-gray-600">
          <CalendarDaysIcon className="h-6 w-6" />
          <span>Select Date</span>
        </div>
      </header>
    </div>
  );
}
