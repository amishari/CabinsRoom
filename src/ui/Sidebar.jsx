import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { Uploader } from '../data/Uploader';
function Sidebar() {
  const style =
    'flex items-center gap-5 px-4 py-9 text-2xl font-semibold text-gray-600 transition-all duration-200 visited:bg-gray-50 hover:text-gray-800 active:bg-gray-200 ';
  return (
    <div className="row-start-1 row-end-3 border-r-2 border-solid border-gray-400 bg-gray-50 p-8 pr-6">
      <Logo />
      <ul className="flex flex-col justify-center gap-3 border border-none">
        <Link className={style} to="/">
          <HiOutlineHome />
          <span>Home</span>
        </Link>
        <Link className={style} to="/bookings">
          <HiOutlineCalendarDays />
          <span>Booking</span>
        </Link>
        <Link className={style} to="/cabins">
          <HiOutlineHomeModern />
          <span>Cabins</span>
        </Link>
        <Link className={style} to="/users">
          <HiOutlineUsers />
          <span>Users</span>
        </Link>
        <Link className={style} to="/settings">
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </Link>
        <Uploader />
      </ul>
    </div>
  );
}
export default Sidebar;
