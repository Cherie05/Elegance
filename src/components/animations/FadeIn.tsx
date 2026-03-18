
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
  once?: boolean;
}

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  threshold = 0.2,
  once = true,
  className,
  ...props
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Define starting transform based on direction
    let transform = 'translateY(20px)';
    if (direction === 'down') transform = 'translateY(-20px)';
    if (direction === 'left') transform = 'translateX(20px)';
    if (direction === 'right') transform = 'translateX(-20px)';
    if (direction === 'none') transform = 'none';

    // Initial styles
    element.style.opacity = '0';
    element.style.transform = transform;
    element.style.transition = `opacity ${duration}s ease, transform ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1)`;
    element.style.transitionDelay = `${delay}s`;
    element.style.willChange = 'opacity, transform';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
            
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            element.style.opacity = '0';
            element.style.transform = transform;
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, direction, duration, once, threshold]);

  return (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  );
};

export default FadeIn;
