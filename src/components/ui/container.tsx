import { cn } from '@/lib/utils';
import { type SectionProps } from '@/types';

export function Container({ children, className }: SectionProps) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
} 