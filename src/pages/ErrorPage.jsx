// src/pages/ErrorPage.jsx
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Oops! Something went wrong 😢 sabir</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}
