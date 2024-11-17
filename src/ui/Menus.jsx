import { createContext, useContext, useState } from 'react';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { createPortal } from 'react-dom';

const MenusContext = createContext();
function Menus({ children }) {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState(null);

  const close = () => setOpenId('');
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      <div>{children}</div>
    </MenusContext.Provider>
  );
}
function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>;
}
function Toggle({ id }) {
  const { open, close, openId, setPosition } = useContext(MenusContext);
  function handleClick(e) {
    openId === '' || openId !== id ? open(id) : close();
    const rect = e.target.closest('button').getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });
  }
  return (
    <button
      onClick={handleClick}
      className="translate-x-4 rounded-sm border-none bg-none p-1 transition-all duration-200 hover:bg-gray-200"
    >
      <HiEllipsisVertical className="h-10 w-10 text-gray-700" />
    </button>
  );
}
function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);
  if (openId !== id) return null;
  return (
    <ul
      className="fixed rounded-md bg-white shadow-md"
      position={position}
      ref={ref}
    >
      {children}
    </ul>
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        icon={icon}
        className="z-40 flex w-full items-center gap-4 border-none p-5 text-left text-lg text-gray-900 transition-all duration-200 hover:bg-gray-100"
      >
        <span>{children}</span>
      </button>
    </li>
  );
}
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
export default Menus;
