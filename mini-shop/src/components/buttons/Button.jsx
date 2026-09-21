const Button = ({ children, variant = "primary", className = "", ...rest }) => {
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-black",
    success: "bg-green-500 hover:bg-green-600 text-white",
  };

  return (
    <button
      className={` px-3 py-1 rounded-md transition ${className} ${variants[variant]}`}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
