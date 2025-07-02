import { Routes, Route } from 'react-router-dom';
import BottomNav from './components/navigation/BottomNav';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="aspect-[383/768] h-[768px] w-[383px] overflow-hidden bg-gray-50 pb-20">
      <Routes>
        <Route path="/daily-tracker" element={<Home />} />
        <Route path="/meals" element={<div>Meals</div>} />
        <Route path="/add" element={<div>Add</div>} />
        <Route path="/ingredients" element={<div>Ingredients</div>} />
        <Route path="/dashboard" element={<div>Dashboard</div>} />
      </Routes>
      <BottomNav />
    </div>
  );
}
