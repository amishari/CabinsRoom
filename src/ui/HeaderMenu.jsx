import { HiOutlineUser } from 'react-icons/hi2';
import ButtonIcon from './ButtonIcon';
import { useNavigate } from 'react-router-dom';
import Logout from '../features/authentication/Logout';

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ul className="flex gap-2">
      <li>
        <div className="group relative">
          <ButtonIcon onClick={() => navigate('/account')}>
            <HiOutlineUser className="h-8 w-8" />
          </ButtonIcon>

          <span className="absolute left-1/2 mt-1 -translate-x-1/2 -translate-y-10 transform rounded bg-white px-2 py-1 font-serif text-base font-semibold text-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Profile
          </span>
        </div>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
