// Extend Framer Motion motion components to accept standard HTML attributes
import { MotionProps } from 'framer-motion';

declare module 'framer-motion' {
  export interface MotionProps {
    className?: string;
    href?: string;
  }
}
