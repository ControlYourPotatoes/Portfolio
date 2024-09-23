import { useEffect, useRef, useState } from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';

interface UseScrollAnimationProps {
  threshold?: number;
  initialStates?: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
  };
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLDivElement>;
  controls: AnimationControls;
  inView: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  initialStates = { opacity: 0, y: 50 }
}: UseScrollAnimationProps = {}): UseScrollAnimationReturn => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    controls.set(initialStates);
  }, [controls, initialStates]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          controls.start({ opacity: 1, x: 0, y: 0, scale: 1 });
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, threshold]);

  return { ref, controls, inView };
};