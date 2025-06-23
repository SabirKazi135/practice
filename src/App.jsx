export default function App() {
  return (
    <div>
      // WITHOUT plugin utility
      <p className="text-lg font-bold">Normal Text</p>
      // WITH `.text-shadow-sm`
      <p className="text-lg font-bold text-shadow-sm">Soft Shadow</p>
      // WITH `.text-shadow-lg`
      <p className="text-lg font-bold text-shadow-lg">Big Shadow</p>
      // WITH `.glow`
      <div className="glow bg-black p-4 text-white">Glowing Box</div>
    </div>
  );
}
