import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "left" | "right" | "up" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
  duration?: number;
};

const directionStart: Record<RevealDirection, { x?: number; y?: number; scale?: number }> = {
  left: { x: -150 },
  right: { x: 150 },
  up: { y: 72, scale: 0.98 },
  scale: { scale: 0.92 },
};

function getDelay(className: string) {
  const match = className.match(/reveal-delay-(\d+)/);
  return match ? Number(match[1]) / 1000 : 0;
}

export function Reveal({ children, className = "", direction = "up", duration = 0.62 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const delay = shouldReduceMotion ? 0 : getDelay(className);

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, filter: "blur(1px)", ...directionStart[direction] }
      }
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration, delay, ease: [0.22, 1, 0.36, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
