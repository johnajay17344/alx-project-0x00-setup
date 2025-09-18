import React from "react";

interface ButtonProps {
  title: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
}) => {
  // handle sizes
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-600 transition`}
    >
      {title}
    </button>
  );
};

export default Button;
