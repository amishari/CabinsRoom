import UserAvatar from '../features/authentication/UserAvatar';
import HeaderMenu from './HeaderMenu';
function Header() {
  return (
    <header className="flex items-center justify-end gap-6 border-b-2 border-gray-200 bg-white p-5 shadow-sm md:p-12">
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}
export default Header;
