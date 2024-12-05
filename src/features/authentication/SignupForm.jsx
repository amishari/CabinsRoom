import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

export default function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Full name" error={errors?.fullName?.message}>
          <input
            className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
            type="text"
            id="fullName"
            // disabled={isLoading}
            {...register('fullName', {
              required: 'This field is required',
              pattern: { value: /^[A-Za-z]+$/i, message: 'Only letters!' },
            })}
          />
        </FormRow>
        <FormRow label="Email Address" error={errors?.email?.message}>
          <input
            className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
            type="email"
            id="email"
            // disabled={isLoading}
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please provide a valid email address',
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Password (min 8 characters)"
          error={errors?.password?.message}
        >
          <input
            className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
            type="password"
            id="password"
            {...register('password', {
              // required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password needs a minimum of 8 characters',
              },
            })}
          />
        </FormRow>
        <FormRow
          label="Repeat password"
          error={errors?.passwordConfirm?.message}
        >
          <input
            className="rounded-lg border-2 border-gray-300 bg-white px-5 py-3 shadow-lg"
            type="password"
            id="passwordConfirm"
            {...register('passwordConfirm', {
              required: 'This field is required',
              validate: (value) =>
                value === getValues().password || 'Passwords need to match',
            })}
          />
        </FormRow>
        <FormRow>
          <Button variation="secondary" onClick={reset}>
            Cancel
          </Button>
          <Button type="submit">Create new user</Button>
        </FormRow>
      </form>
    </div>
  );
}
