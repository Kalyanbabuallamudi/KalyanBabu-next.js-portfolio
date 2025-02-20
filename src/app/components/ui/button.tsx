// src/app/components/ui/button.tsx

import React from 'react';

interface ButtonProps {
  onClick: () => void;
  variant: 'primary' | 'secondary' | 'destructive';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, variant, children }) => {
  const variantClass = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
    destructive: 'bg-red-500 hover:bg-red-700 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${variantClass[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
