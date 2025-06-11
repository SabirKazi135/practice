export default function App() {
  return (
    <div className="h-screen space-y-4 bg-slate-800 p-8">
      <div>
        <div class="flex flex-col gap-4 p-4">
          <input
            type="text"
            placeholder="Your name"
            class="rounded border p-2 focus:border-purple-500 focus:ring-4 focus:ring-purple-300"
          />
          <input
            type="email"
            placeholder="Email"
            class="rounded border p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
