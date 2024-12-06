import { useUser } from './useUser';
function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex items-center gap-3.5 text-lg font-medium text-gray-600">
      <img
        className="block aspect-square h-16 w-16 rounded-full object-cover object-center outline outline-2 outline-gray-100"
        src={avatar || 'default-user.jpg'}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </div>
  );
}

export default UserAvatar;
