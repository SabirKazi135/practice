import { Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  return (
    <div>
      <div>This is Home page</div>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Router>
    </div>
  );
}

export default App;
