import Counter from './components/Counter';

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-6 text-white">
      <div className="flex flex-col items-center bg-gray-100 p-6">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Redux Counter App
        </h2>
        <Counter />
      </div>
    </div>
  );
}
