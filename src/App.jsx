import { useEffect, useState, useRef } from 'react';

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const containerRef = useRef(null);
  const fullRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [fullWidth, setFullWidth] = useState(0);

  useEffect(() => {
    const updateWidths = () => {
      setScreenWidth(window.innerWidth);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      if (fullRef.current) {
        setFullWidth(fullRef.current.offsetWidth);
      }
    };

    updateWidths(); // on load
    window.addEventListener('resize', updateWidths); // on resize

    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-gray-400 p-10 text-white">
      {/* Show screen size */}
      <div className="text-center font-mono text-white">
        <p>📱 Screen Width: {screenWidth}px</p>
        <p>🔷 Container Width: {containerWidth}px</p>
        <p>🔴 Full Width Box: {fullWidth}px</p>
      </div>

      {/* ✅ With container */}
      <div
        ref={containerRef}
        className="container mx-auto rounded-md bg-blue-200 p-4 text-black"
      >
        <p className="font-semibold">
          This is the <code>container</code> box.
        </p>
        <p>It's centered and its width changes at breakpoints.</p>
      </div>

      {/* ❌ Without container (full width) */}
      <div
        ref={fullRef}
        className="w-full rounded-md bg-red-200 p-4 text-black"
      >
        <p className="font-semibold">This is the full-width box.</p>
        <p>It always stretches the full width of the screen.</p>
      </div>
    </div>
  );
}
