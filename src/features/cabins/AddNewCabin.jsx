import Modal from '../../ui/Modal';
import CreateCabinForm from './CreateCabinForm';

export default function AddNewCabin() {
  return (
    <div>
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
    </div>
  );
}
