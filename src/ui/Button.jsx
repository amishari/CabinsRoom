export default function Button({
  children,
  variation = 'primary',
  size = 'medium',
}) {
  const defaultClass = 'border-0 rounded-md shadow-sm';
  const sizes = {
    small: 'text-xl py-1.5 px-3 uppercase font-semibold text-center',
    medium: 'text-xxl font-medium py-5 px-7',
    large: 'py-5 px-10 font-medium text-2xl',
  };
  const variations = {
    primary: 'text-indigo-50 bg-indigo-600 hover:bg-indigo-700',
    secondary:
      'text-gray-600 bg-white border-2 border-gray-200 hover:bg-gray-50',
    danger: 'text-red-100 bg-red-700 hover:bg-red-800',
  };
  const className = `${defaultClass} ${sizes[size]} ${variations[variation]}`;

  return <button className={className}>{children}</button>;
}
