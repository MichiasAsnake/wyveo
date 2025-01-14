'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';

interface MotionContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export function MotionContainer({ children, className, ...props }: MotionContainerProps) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
} 