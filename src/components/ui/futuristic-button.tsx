import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-teayudo-orange text-white hover:bg-teayudo-orange/90",
        outline: "border border-teayudo-orange text-teayudo-orange bg-transparent hover:bg-teayudo-orange/10",
        blue: "bg-teayudo-blue text-white hover:bg-teayudo-blue/90",
        "blue-outline": "border border-teayudo-blue text-teayudo-blue bg-transparent hover:bg-teayudo-blue/10",
        glass: "bg-white/30 backdrop-blur-sm border border-white/20 text-gray-800 hover:bg-white/40",
        "glass-dark": "bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-black/40",
        neon: "bg-teayudo-orange/90 text-white shadow-neon-orange hover:bg-teayudo-orange hover:shadow-none",
        "neon-blue": "bg-teayudo-blue/90 text-white shadow-neon-blue hover:bg-teayudo-blue hover:shadow-none",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm rounded-md",
        sm: "h-8 px-3 text-xs rounded",
        lg: "h-12 px-6 text-base rounded-lg",
        xl: "h-14 px-8 text-lg rounded-lg",
      },
      animation: {
        none: "",
        pulse: "transition-transform active:scale-95",
        bounce: "transition-transform active:scale-95 hover:scale-105",
        glow: "transition-all hover:shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "pulse",
    },
  }
);

export interface FuturisticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  showArrow?: boolean;
}

const FuturisticButton = React.forwardRef<
  HTMLButtonElement,
  FuturisticButtonProps
>(
  (
    {
      className,
      variant,
      size,
      animation,
      children,
      icon,
      iconPosition = "left",
      showArrow = false,
      ...props
    },
    ref
  ) => {
    // Use type assertion to handle incompatible props between React and Framer Motion
    const motionProps = {
      className: cn(buttonVariants({ variant, size, animation, className })),
      whileHover:
        animation === "bounce"
          ? { scale: 1.05 }
          : animation === "glow"
          ? { boxShadow: "0 0 8px rgba(255, 119, 15, 0.6)" }
          : undefined,
      whileTap: { scale: 0.95 },
      ...props
    } as React.ComponentProps<typeof motion.button>;
    
    return (
      <motion.button
        ref={ref}
        {...motionProps}
      >
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        
        <span className="relative z-10">{children}</span>
        
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
        
        {showArrow && (
          <motion.span 
            className="ml-2"
            initial={{ x: 0 }}
            animate={{ x: [0, 3, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            →
          </motion.span>
        )}

        {/* Add a subtle gradient overlay */}
        {(variant === "default" || variant === "blue" || variant === "neon" || variant === "neon-blue") && (
          <span className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity rounded-md pointer-events-none" />
        )}
        
        {/* Add a subtle shimmer effect for neon variants */}
        {(variant === "neon" || variant === "neon-blue") && (
          <span 
            className={cn(
              "absolute top-0 -inset-x-full h-full w-1/2 block transform -skew-x-12 bg-gradient-to-r",
              variant === "neon" 
                ? "from-transparent via-white/10 to-transparent" 
                : "from-transparent via-white/10 to-transparent",
              "opacity-40 animate-shimmer"
            )}
          />
        )}
      </motion.button>
    );
  }
);

FuturisticButton.displayName = "FuturisticButton";

export { FuturisticButton, buttonVariants };