import supabase from './supabase';
export async function getSettings() {
  let { data: settings, error } = await supabase
    .from('settings')
    .select('*')
    .single();
  if (error) {
    console.log(error);
    throw new Error('Can not load the current settings');
  }
  return settings;
}
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from('settings')
    .update(newSetting)
    .eq('id', 1)
    .select()
    .single();
  if (error) {
    console.log(error);
    throw new Error('Can not apply update on settings');
  }
}
