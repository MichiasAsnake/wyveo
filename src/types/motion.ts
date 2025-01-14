import { type HTMLMotionProps } from 'framer-motion';

export type WithClassName<T = unknown> = T & {
  className?: string;
};

export type MotionElementProps<T extends keyof HTMLElementTagNameMap> = WithClassName<HTMLMotionProps<T>>;

export type MotionDivProps = MotionElementProps<'div'>;
export type MotionHeadingProps = MotionElementProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
export type MotionParagraphProps = MotionElementProps<'p'>;
export type MotionSpanProps = MotionElementProps<'span'>;
export type MotionAnchorProps = MotionElementProps<'a'>; 