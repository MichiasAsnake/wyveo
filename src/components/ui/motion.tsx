'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { type WithClassName } from '@/types/motion';

// Create a generic motion component factory
function createMotionComponent<T extends keyof HTMLElementTagNameMap>(element: T) {
  return motion[element] as React.FC<WithClassName<HTMLMotionProps<T>>>;
}

// Export motion components for different HTML elements
export const MotionDiv = createMotionComponent('div');
export const MotionH1 = createMotionComponent('h1');
export const MotionH2 = createMotionComponent('h2');
export const MotionH3 = createMotionComponent('h3');
export const MotionP = createMotionComponent('p');
export const MotionSpan = createMotionComponent('span');
export const MotionA = createMotionComponent('a'); 