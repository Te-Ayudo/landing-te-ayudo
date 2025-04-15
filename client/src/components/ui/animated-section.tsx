import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'animate'> {
  children: React.ReactNode;
  delay?: number;
  animate?: any;
  initial?: any;
  transition?: any;
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const staggerChildren = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  },
};

export const fadeInStagger = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
    }
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

// Component for animated section with scroll-triggered animations
export function AnimatedSection({ 
  children, 
  className,
  delay = 0, 
  ...props 
}: AnimatedSectionProps) {
  const motionProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    variants: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: delay,
        }
      }
    },
    className: cn(className),
    ...props
  } as React.ComponentProps<typeof motion.div>;
  
  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
}

// Container that staggers children animations
export function AnimatedStaggerContainer({ 
  children, 
  className,
  delay = 0.1,
  staggerDelay = 0.1,
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  const motionProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    variants: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          delayChildren: delay,
          staggerChildren: staggerDelay,
        }
      }
    },
    className: cn(className),
    ...props
  } as React.ComponentProps<typeof motion.div>;
  
  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
}

// Child element to be used inside AnimatedStaggerContainer
export function AnimatedStaggerItem({ 
  children, 
  className,
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const motionProps = {
    variants: fadeInStagger,
    className: cn(className),
    ...props
  } as React.ComponentProps<typeof motion.div>;
  
  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
}

// Text reveals word by word for dramatic effect
export function AnimatedTextReveal({ 
  text,
  className,
  once = true,
  delay = 0
}: {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}) {
  const words = text.split(" ");
  
  const containerProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once },
    className: cn("inline-block", className)
  } as React.ComponentProps<typeof motion.div>;
  
  return (
    <motion.div {...containerProps}>
      {words.map((word, i) => {
        const wordProps = {
          key: `word-${i}`,
          className: "inline-block mr-1",
          variants: {
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: delay + i * 0.1,
              }
            }
          }
        } as React.ComponentProps<typeof motion.span>;
        
        return (
          <motion.span {...wordProps}>
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

// Animated counter for numbers
export function AnimatedCounter({ 
  end, 
  duration = 2, 
  className,
  suffix = ""
}: { 
  end: number;
  duration?: number;
  className?: string;
  suffix?: string;
}) {
  // Using a simpler approach without custom motion values
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  
  useEffect(() => {
    countRef.current = 0;
    const step = Math.ceil(end / (duration * 20)); // 20 fps animation approx
    
    const interval = setInterval(() => {
      if (countRef.current < end) {
        countRef.current = Math.min(countRef.current + step, end);
        setCount(countRef.current);
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [end, duration]);
  
  const motionProps = {
    className: cn(className),
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true }
  } as React.ComponentProps<typeof motion.span>;
  
  return (
    <motion.span {...motionProps}>
      {Math.floor(count)}{suffix}
    </motion.span>
  );
}

export default AnimatedSection;