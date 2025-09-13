// src/App.jsx
import NameDisplay from './components/NameDisplay';
import NameChanger from './components/NameChanger';
import ThemeToggle from './components/ThemeToggle';
import CounterWatcher from './components/CounterWatcher';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 bg-gray-900 p-6 text-white">
      {/* Display current name */}
      <NameDisplay />

      {/* Change the name */}
      <NameChanger />

      {/* Toggle theme */}
      <ThemeToggle />

      {/* Counter watcher with conditional logic */}
      <CounterWatcher />
    </div>
  );
}

export default App;
