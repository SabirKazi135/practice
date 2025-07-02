import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { NavBar } from './Components/NavBar';
import OrderSummary from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import Featured from './Components/Featured';
import NewProducts from './Components/NewProducts';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="feature" element={<Featured />} />
          <Route path="new-products" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
