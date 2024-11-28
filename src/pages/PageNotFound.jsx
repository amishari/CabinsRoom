import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  // const moveBack = useMoveBack();
  const navigate = useNavigate();

  return (
    <main className="flex h-screen items-center justify-center bg-gray-50 p-20">
      <div className="text-align: center flex-[0_1_96rem] rounded-md border-2 border-gray-100 bg-white p-20">
        <h1 className="text-[3.2rem]">
          The page you are looking for could not be found 😢
        </h1>
        <button onClick={() => navigate(-1)}>&larr; Go back</button>
      </div>
    </main>
  );
}
