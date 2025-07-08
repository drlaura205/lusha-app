export const Button = ({ children, className = '', ...props }) => (
  <button
    className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl transition-all ${className}`}
    {...props}
  >
    {children}
  </button>
);