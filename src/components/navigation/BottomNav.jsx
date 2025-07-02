import { NavLink } from 'react-router-dom';
import {
  FaListUl,
  FaUtensils,
  FaPlusCircle,
  FaCarrot,
  FaChartBar,
} from 'react-icons/fa';

const navItems = [
  { label: 'Tracker', icon: FaListUl, to: '/daily-tracker' },
  { label: 'Meals', icon: FaUtensils, to: '/meals' },
  { label: 'Add', icon: FaPlusCircle, to: '/add' },
  { label: 'Ingredients', icon: FaCarrot, to: '/ingredients' },
  { label: 'Stats', icon: FaChartBar, to: '/dashboard' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex w-[95%] max-w-md -translate-x-1/2 items-center justify-between rounded-full bg-white px-4 py-2 shadow-md">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isCenter = index === 2; // center FAB
        return (
          <NavLink
            to={item.to}
            key={item.label}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-xs ${
                isActive ? 'text-black' : 'text-gray-400'
              } ${isCenter ? 'text-xl' : ''}`
            }
          >
            <div
              className={`flex items-center justify-center ${
                isCenter
                  ? 'h-12 w-12 bg-black text-2xl text-white'
                  : 'h-10 w-10'
              } rounded-full`}
            >
              <Icon />
            </div>
            {!isCenter && <span className="mt-1">{item.label}</span>}
          </NavLink>
        );
      })}
    </nav>
  );
}
