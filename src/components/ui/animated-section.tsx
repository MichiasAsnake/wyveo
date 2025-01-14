'use client';

import { type AnimatedElementProps } from '@/types';
import { MotionDiv } from '@/components/ui/motion';

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
}: AnimatedElementProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
} 