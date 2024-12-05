const Button = ({ variation = 'primary', size = 'medium', children }) => {
  const sizeClasses = {
    small: 'text-lg py-1 px-2.5 uppercase font-semibold text-center',
    medium: 'text-xl py-3 px-4 font-medium',
    large: 'text-2xl py-3 px-6 font-medium',
  };

  const variationClasses = {
    primary: 'text-indigo-50 bg-indigo-500 hover:bg-indigo-700',
    secondary:
      'text-gray-600 bg-gray-200 border-2 border-gray-300 hover:bg-gray-400',
    danger: 'text-red-100 bg-red-700 hover:bg-red-800',
  };

  return (
    <button
      className={`rounded-md border-none shadow-sm ${sizeClasses[size]} ${variationClasses[variation]}`}
    >
      {children}
    </button>
  );
};

export default Button;
