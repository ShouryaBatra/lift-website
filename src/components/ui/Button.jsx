'use client';

import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-lift-blue text-white hover:bg-lift-blue-light focus:ring-lift-blue',
    secondary: 'bg-white text-lift-blue border border-lift-blue hover:bg-lift-accent focus:ring-lift-blue',
    outline: 'bg-transparent text-lift-blue border border-lift-blue hover:bg-lift-accent focus:ring-lift-blue',
    ghost: 'bg-transparent text-lift-text-secondary hover:text-lift-blue hover:bg-lift-accent focus:ring-lift-blue',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button; 