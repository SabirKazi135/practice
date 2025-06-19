export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 bg-gray-400 p-10 text-white">
      <div className="container mx-auto bg-blue-200 p-4">
        <p>This box is centered and width is responsive.</p>
      </div>
      <div className="bg-red-200 p-4">
        <p>This box stretches full width of the screen.</p>
      </div>
    </div>
  );
}
