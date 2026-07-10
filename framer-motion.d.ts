// Extend Framer Motion motion components to accept standard HTML attributes.
declare module 'framer-motion' {
  export interface MotionProps {
    className?: string;
    href?: string;
  }
}
