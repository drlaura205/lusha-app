export const Card = ({ children, className }) => (
  <div className={`bg-white border border-gray-200 rounded-lg ${className}`}>{children}</div>
);
export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);