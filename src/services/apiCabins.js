import supabase, { SUPABASE_URL } from './supabase';
export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export default async function createEditCabin(newCabin, id) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    '',
  );
  const hasImagePath = newCabin.image?.startWith?.(SUPABASE_URL);
  const imagePath = hasImagePath
    ? newCabin.image
    : `${SUPABASE_URL}/storage/v1/object/public/cabins/${imageName}`;
  //for create/edit
  let query = supabase.from('cabins');
  //for create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //for edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);

  const [data, error] = await query.select().single();
  if (error) {
    throw new Error('Cabin cannot be created!');
  }
  //upload image
  const { error: storageError } = await supabase.storage
    .from('cabins')
    .upload(imageName, newCabin.image);
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.log(storageError);
    throw new Error(
      'Cabin image could not uploaded and Cabin was not created!!',
    );
  }
  return data;
}
export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);
  if (error) {
    throw new Error('Cabin cannot be deleted!');
  }
  return data;
}
