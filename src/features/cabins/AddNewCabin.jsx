import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';

export default function AddNewCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <div className="my-4 w-2/12 rounded-md border-2 border-blue-900 bg-blue-500 px-4 py-4 text-xl font-semibold text-white hover:bg-blue-400">
          <button>Add New Cabin</button>
        </div>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}
// export default function AddNewCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => setIsOpenModal((show) => !show)}
//         className="my-4 w-2/12 rounded-md border-2 border-blue-900 bg-blue-500 px-4 py-4 text-xl font-semibold text-white hover:bg-blue-400"
//       >
//         Add new Cabin
//       </button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
