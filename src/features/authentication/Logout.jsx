import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from '../authentication/useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

export default function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <div className="group relative">
      <button
        disabled={isLoading}
        onClick={logout}
        className="rounded-sm border-0 bg-none transition-all duration-200 first:h-9 first:w-9 first:text-indigo-600 hover:bg-gray-100"
      >
        {!isLoading ? (
          <HiArrowRightOnRectangle className="flex h-8 w-8 justify-center" />
        ) : (
          <SpinnerMini />
        )}
      </button>
      <span className="absolute left-1/2 mt-1 -translate-x-1/2 -translate-y-10 transform rounded bg-white px-2 py-1 font-serif text-base font-semibold text-indigo-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Logout
      </span>
    </div>
  );
}
