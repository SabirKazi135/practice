export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-gray-400 p-10 text-white">
      {/* ✅ WITH container */}
      <div className="container mx-auto bg-blue-200 p-4 text-black">
        <p>
          This box is centered and width is responsive (using{' '}
          <code>container</code>).
        </p>
      </div>

      {/* ❌ WITHOUT container */}
      <div className="w-full bg-red-200 p-4 text-black">
        <p>
          This box stretches full width of the screen (no <code>container</code>
          ).
        </p>
      </div>

      <div className="container mx-auto bg-green-200 p-4 text-black">
        <h1 className="text-xl font-bold">Welcome to My Blog</h1>
        <p>
          This text is easy to read because it’s not stretched across the whole
          screen.
        </p>
      </div>

      <div className="w-full bg-red-200 p-4 text-black">
        <h1 className="text-xl font-bold">Welcome to My Blog</h1>
        <p>This is hard to read. It goes all the way across the screen.</p>
      </div>
    </div>
  );
}
