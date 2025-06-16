export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[] bg-slate-900 p-10">
      <form className="space-x-4 space-y-4">
        <input
          type="email"
          name=""
          id=""
          className="px-4 py-2 required:border-[2px] required:border-red-500"
          required
        />
        <input type="number" name="" id="" className="px-4 py-2" />
      </form>
    </div>
  );
}
