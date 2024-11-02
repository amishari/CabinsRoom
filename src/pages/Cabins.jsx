import { useEffect } from 'react';
import { getCabins } from '../services/apiCabins';

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-5xl font-semibold">All Cabins</h1>
      <p>test</p>
      <img
        src="https://lcrwrkpnlcepptcaqrml.supabase.co/storage/v1/object/public/cabins/cabin-001.jpg?t=2024-11-02T16%3A36%3A00.189Z"
        alt="cabin01"
        srcset=""
      />
    </div>
  );
}
export default Cabins;
