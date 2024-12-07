import FormRowVertical from '../ui/FormRowVertical';
import UpdateUserDataForm from '../features/authentication/UpdateUserDataForm';
import UpdatePasswordForm from '../features/authentication/UpdatePasswordForm';

function Account() {
  return (
    <div>
      <h1 className="mb-6 border-b-2 border-gray-100 py-6 text-4xl font-semibold">
        Update hotel settings
      </h1>
      <FormRowVertical>
        <h3 className="text-3xl font-semibold">Update user data</h3>
        <UpdateUserDataForm />
      </FormRowVertical>
      <FormRowVertical>
        <h3 className="text-3xl font-semibold">Update password</h3>
        <UpdatePasswordForm />
      </FormRowVertical>
    </div>
  );
}

export default Account;
