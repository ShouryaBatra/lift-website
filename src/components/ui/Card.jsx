'use client';

import { motion } from 'framer-motion';

const Card = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  animate = true,
  ...props
}) => {
  const baseStyles = 'rounded-lg transition-all duration-200';
  
  const variants = {
    default: 'bg-white shadow-sm hover:shadow-md',
    elevated: 'bg-white shadow-md hover:shadow-lg',
    outline: 'bg-white border border-gray-200 hover:border-lift-blue',
    ghost: 'bg-transparent hover:bg-lift-accent',
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const MotionComponent = animate ? motion.div : 'div';

  return (
    <MotionComponent
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={animate ? { y: -5 } : undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Card; 