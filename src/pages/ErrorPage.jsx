// src/pages/ErrorPage.jsx
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="mt-4 text-lg text-gray-300">
        {error.statusText || error.message || 'Unknown error'}
      </p>
      <a href="/" className="mt-6 rounded bg-blue-500 px-4 py-2">
        Go Home sabir
      </a>
    </div>
  );
}

export default ErrorPage;
