import UpdateSettingForm from '../features/setting/UpdateSettingForm';

function Settings() {
  return (
    <div className="mt-12 flex flex-col gap-12">
      <h1 className="text-5xl font-semibold">Update Your Account</h1>
      <UpdateSettingForm />
    </div>
  );
}

export default Settings;
