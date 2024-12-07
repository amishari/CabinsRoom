import { useState } from 'react';
import { useUser } from '../authentication/useUser';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';
import { useUpdateUser } from './useUpdateUser';

export default function UpdateUserDataForm() {
  // We don't need the loading state
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  const { mutate: updateUser, isLoading: isUpdating } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;

    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          // Resetting form using .reset() that's available on all HTML form elements, otherwise the old filename will stay displayed in the UI
          e.target.reset();
        },
      },
    );
  }

  function handleCancel(e) {
    // We don't even need preventDefault because this button was designed to reset the form (remember, it has the HTML attribute 'reset')
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <input
          id="email"
          value={email}
          disabled
          className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
        />
      </FormRow>
      <FormRow label="Full name">
        <input
          className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
          id="fullName"
        />
      </FormRow>
      <FormRow label="Avatar image">
        <input
          className="px-4 py-2 text-xl file:rounded-xl file:border-2 file:bg-blue-500 file:px-4 file:py-2 file:text-xl file:font-semibold file:text-white hover:file:bg-blue-200 hover:file:text-blue-700"
          name="picture"
          type="file"
          id="avatar"
          disabled={isUpdating}
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button onClick={handleCancel} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </form>
  );
}
