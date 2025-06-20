import { useEffect, useState, useRef } from 'react';

export default function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const containerRef = useRef(null);
  const fullRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [fullWidth, setFullWidth] = useState(0);

  // Watch screen + box widths
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

  // Determine current breakpoint label
  const getCurrentBreakpoint = () => {
    if (screenWidth >= 1536) return '2xl (≥1536px)';
    if (screenWidth >= 1280) return 'xl (≥1280px)';
    if (screenWidth >= 1024) return 'lg (≥1024px)';
    if (screenWidth >= 768) return 'md (≥768px)';
    if (screenWidth >= 640) return 'sm (≥640px)';
    return 'base (<640px)';
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-gray-400 p-10 font-mono text-white">
      {/* 📐 Live info panel */}
      <div className="text-center">
        <p className="text-xl">📱 Screen Width: {screenWidth}px</p>
        <p className="text-lg">🔷 Container Width: {containerWidth}px</p>
        <p className="text-lg">🔴 Full Width Box: {fullWidth}px</p>
        <p className="mt-4 inline-block rounded-lg bg-black px-3 py-1 text-sm">
          🧩 Current Breakpoint: <strong>{getCurrentBreakpoint()}</strong>
        </p>
      </div>

      {/* ✅ With container */}
      <div
        ref={containerRef}
        className="container mx-auto rounded-md bg-blue-200 p-4 text-black"
      >
        <p className="font-bold">
          This is the <code>.container</code> box
        </p>
        <p>It has responsive max-width based on breakpoints:</p>
        <ul className="mt-2 list-disc pl-5 text-sm">
          <li>
            <strong>sm</strong>: ≥640px → max-width: 640px
          </li>
          <li>
            <strong>md</strong>: ≥768px → max-width: 768px
          </li>
          <li>
            <strong>lg</strong>: ≥1024px → max-width: 1024px
          </li>
          <li>
            <strong>xl</strong>: ≥1280px → max-width: 1280px
          </li>
          <li>
            <strong>2xl</strong>: ≥1536px → max-width: 1536px
          </li>
        </ul>
      </div>

      {/* ❌ Without container */}
      <div
        ref={fullRef}
        className="w-full rounded-md bg-red-200 p-4 text-black"
      >
        <p className="font-bold">This is the full-width box</p>
        <p>It always stretches the entire width (100% of screen).</p>
      </div>
    </div>
  );
}
