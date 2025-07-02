import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { NavBar } from './Components/NavBar';
import OrderSummary from './Components/OrderSummary';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </>
  );
}

export default App;
