import { cloneElement, createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState('');
  const close = () => setOpenName('');
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}
function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;
  return createPortal(
    <div className="z-1000 fixed left-0 top-0 h-screen w-full bg-white bg-opacity-10 backdrop-blur-sm transition duration-500">
      <div className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white px-16 py-12 shadow-lg transition duration-500">
        <button
          onClick={close}
          className="absolute right-8 top-5 translate-x-3 rounded-sm border-0 bg-transparent transition duration-200 hover:bg-gray-100"
        >
          <HiXMark />
        </button>
        <div> {cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}
Modal.Open = Open;
Modal.Window = Window;
