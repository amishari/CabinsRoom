import CreateEditCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './useDeleteCabin';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import { useCreateCabin } from './useCreateCabin';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Menus from '../../ui/Menus';

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
    image,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  }
  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] justify-items-start gap-10 rounded-lg border-2 border-b border-gray-200 px-10 py-6 last:border-b-0">
      <img
        className="aspect-[3/2] w-28 scale-150 object-cover object-center"
        src={image}
        alt="not"
        // srcSet=""
      />
      <div className="text-2xl font-semibold text-gray-600">{name}</div>
      <div className="text-2xl font-semibold">
        Suitable for {maxCapacity} persons
      </div>
      <div className="text-2xl font-semibold">{regularPrice}</div>
      {discount ? (
        <div className="text-2xl font-semibold text-green-800">{discount}</div>
      ) : (
        <span className="font-bold text-green-800">&mdash;</span>
      )}
      <div className="flex justify-between gap-4">
        <button
          onClick={handleDuplicate}
          disabled={isCreating}
          className="rounded-xl text-3xl font-semibold text-green-600 hover:text-gray-500"
        >
          <HiSquare2Stack />
        </button>
        <Modal>
          <Modal.Open opens="edit">
            <button className="rounded-xl text-3xl font-semibold text-orange-500 hover:text-gray-500">
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateEditCabinForm cabinToEdit={cabin} />
          </Modal.Window>

          <Modal.Open>
            <button className="rounded-xl text-3xl font-semibold text-red-800 hover:text-gray-500">
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window>
            <ConfirmDelete
              resourceName="cabins"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
        <Menus.Menu>
          <Menus.Toggle id={cabinId} />
          <Menus.List id={cabinId}>
            <Menus.Button>Duplicate</Menus.Button>
            <Menus.Button>Edit</Menus.Button>
            <Menus.Button>Delete</Menus.Button>
          </Menus.List>
        </Menus.Menu>
      </div>
    </div>
  );
}

export default CabinRow;
