import { type HTMLMotionProps } from 'framer-motion';

export type WithClassName<T = unknown> = T & {
  className?: string;
};

export type MotionDivProps = WithClassName<HTMLMotionProps<'div'>>;
export type MotionHeadingProps = WithClassName<HTMLMotionProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>>;
export type MotionParagraphProps = WithClassName<HTMLMotionProps<'p'>>;
export type MotionSpanProps = WithClassName<HTMLMotionProps<'span'>>; 