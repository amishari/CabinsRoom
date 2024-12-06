import { HiOutlineUser } from 'react-icons/hi2';
import ButtonIcon from './ButtonIcon';
import { useNavigate } from 'react-router-dom';
import Logout from '../features/authentication/Logout';

function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <ul className="flex gap-2">
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser className="h-8 w-8" />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
