const Button = ({ children, variant = "primary", className = "", ...rest }) => {
  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-black",
    success: "bg-green-500 text-white",
  };

  return (
    <button
      className={`px-4 py-2 rounded ${className} ${variants[variant]}`}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
