import { useNavigate, useRouteError, Link } from 'react-router-dom';
export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>
        {error.status} : {error.statusText} - {error.message}
      </p>
      <button
        className="text-sm text-blue-500 hover:font-semibold hover:italic hover:text-blue-700"
        onClick={() => navigate(-1)}
      >
        &larr;Go Back
      </button>
    </div>
  );
}
