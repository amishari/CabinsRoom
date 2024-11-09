import supabase, { SUPABASE_URL } from './supabase';
export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export default async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    '',
  );
  const imagePath = `${SUPABASE_URL}/v1/object/public/cabins/${imageName}}`;
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }])
    .select();
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
