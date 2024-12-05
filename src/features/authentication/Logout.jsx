import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from '../bookings/useLogout';
import ButtonIcon from '../../ui/ButtonIcon';

export default function Logout() {
  const { logout, isLoading } = useLogout;
  return (
    <div>
      <ButtonIcon disabled={isLoading} onClick={logout}>
        {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
      </ButtonIcon>
    </div>
  );
}
