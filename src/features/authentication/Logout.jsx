import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from '../authentication/useLogout';
import SpinnerMini from '../../ui/SpinnerMini';

export default function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <div>
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
    </div>
  );
}
