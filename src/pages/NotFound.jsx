function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-gray-400">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFound;
