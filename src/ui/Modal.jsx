import { createPortal } from 'react-dom';
import { HiXMark } from 'react-icons/hi2';

export default function Modal({ children, onClose }) {
  return createPortal(
    <div className="z-1000 fixed left-0 top-0 h-screen w-full bg-white bg-opacity-10 backdrop-blur-sm transition duration-500">
      <div className="fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white px-16 py-12 shadow-lg transition duration-500">
        <button
          onClick={onClose}
          className="absolute right-8 top-5 translate-x-3 rounded-sm border-0 bg-transparent transition duration-200 hover:bg-gray-100"
        >
          <HiXMark />
        </button>
        <div> {children}</div>
      </div>
    </div>,
    document.body,
  );
}
