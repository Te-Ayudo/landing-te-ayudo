import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const glassCardVariants = cva(
  "relative backdrop-blur-sm border shadow-glass overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-glass-gradient bg-opacity-50 border-white/20",
        dark: "bg-glass-gradient-dark bg-opacity-50 border-black/20",
        orange: "bg-white/80 border-teayudo-orange/30 shadow-neon-orange",
        blue: "bg-white/80 border-teayudo-blue/30 shadow-neon-blue",
      },
      size: {
        sm: "p-3 rounded-lg",
        md: "p-5 rounded-xl",
        lg: "p-6 rounded-2xl",
      },
      animation: {
        none: "",
        hover: "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
        float: "animate-float",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      animation: "hover",
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  children: React.ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  asChild?: boolean;
}

export function GlassCard({
  className,
  variant,
  size,
  animation,
  children,
  initial,
  animate,
  transition,
  whileHover,
  whileTap,
  ...props
}: GlassCardProps) {
  // Using type assertion to handle prop type incompatibilities with motion.div
  const motionProps = {
    className: cn(glassCardVariants({ variant, size, animation, className })),
    initial,
    animate,
    transition,
    whileHover: whileHover || (animation === "hover" ? { scale: 1.02 } : undefined),
    whileTap: whileTap || (animation === "hover" ? { scale: 0.98 } : undefined),
    ...props
  } as React.ComponentProps<typeof motion.div>;
  
  return (
    <motion.div {...motionProps}>
      {children}
    </motion.div>
  );
}

// Optional decorator element to add a futuristic feel to cards
export function GlassCardDecoration({ className }: { className?: string }) {
  return (
    <div className={cn("absolute -z-10 opacity-10", className)}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-teayudo-orange/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-teayudo-blue/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-teayudo-orange/20 rounded-full"></div>
    </div>
  );
}

// Circle embellishment that can be added to the corners or sides of cards
export function GlowingCircle({ 
  className,
  color = "teayudo-orange"
}: { 
  className?: string,
  color?: "teayudo-orange" | "teayudo-blue"
}) {
  return (
    <div
      className={cn(
        "absolute w-6 h-6 rounded-full opacity-80",
        color === "teayudo-orange" ? "bg-teayudo-orange shadow-neon-orange" : "bg-teayudo-blue shadow-neon-blue",
        className
      )}
    />
  );
}

// Grid background that creates a techy feel
export function TechGridBackground({ 
  className,
  animate = true
}: { 
  className?: string,
  animate?: boolean
}) {
  return (
    <div 
      className={cn(
        "absolute inset-0 bg-futuristic-grid bg-[length:50px_50px] -z-10 opacity-20",
        animate && "animate-pulse-slow",
        className
      )}
    />
  );
}

export default GlassCard;