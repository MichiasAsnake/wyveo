'use client';

import Spline from '@splinetool/react-spline';
import { cn } from '@/lib/utils';

interface SplineSceneProps {
  scene: string;
  className?: string;
  priority?: boolean;
}

export function SplineScene({ scene, className, priority }: SplineSceneProps) {
  return (
    <div className={cn('relative w-full h-full', className)}>
      <div style={{ 
        transform: 'scale(0.5) translate(-55%, -45%)',
        position: 'absolute',
        top: '0%',
        left: '0%',
        width: '290%',
        height: '290%'
      }}>
        <Spline scene={scene} />
      </div>
    </div>
  );
} 