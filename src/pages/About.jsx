import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  function GoBack() {
    navigate('/');
  }

  return (
    <div className="space-y-6 rounded-lg bg-gray-800 p-6 shadow-md">
      <h2 className="text-3xl font-semibold text-white">This is About Page</h2>
      <p className="text-lg text-gray-300">
        Learn more about us here. We are building something amazing!
      </p>
      <button
        onClick={GoBack}
        className="rounded-lg bg-blue-500 px-6 py-2 font-medium text-white shadow-md transition hover:bg-blue-600 active:scale-95"
      >
        Back to Home
      </button>
    </div>
  );
}

export default About;
