import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
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
      }}
      className={cn(className)}
      {...props}
    >
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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: staggerDelay,
          }
        }
      }}
      className={cn(className)}
      {...props}
    >
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
  return (
    <motion.div
      variants={fadeInStagger}
      className={cn(className)}
      {...props}
    >
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
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={cn("inline-block", className)}
    >
      {words.map((word, i) => (
        <motion.span
          key={`word-${i}`}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: delay + i * 0.1,
              }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
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
  return (
    <motion.span
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ count: 0 }}
        whileInView={{ count: end }}
        viewport={{ once: true }}
        transition={{
          duration: duration,
          ease: "easeOut",
        }}
        // @ts-ignore - count is a custom prop
        animate={{ count: end }}
      >
        {({ count }) => Math.floor(count) + suffix}
      </motion.span>
    </motion.span>
  );
}

export default AnimatedSection;