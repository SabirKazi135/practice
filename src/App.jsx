export default function App() {
  return (
    <div className="dark flex min-h-screen flex-col items-center justify-center gap-[var(--space-lg)] bg-white p-[var(--space-md)] font-mono dark:bg-black">
      <h1 className="text-[rgb(var(--color-primary)/1)] text-[var(--font-title)]">
        Design Tokens 🧩
      </h1>
      <p className="text-[var(--font-body)]">
        Built with spacing, font size, and radius tokens
      </p>
      <button className="rounded-[var(--radius-lg)] bg-[rgb(var(--color-primary)/0.2)] px-[var(--space-md)] py-[var(--space-sm)]">
        Button
      </button>
    </div>
  );
}
