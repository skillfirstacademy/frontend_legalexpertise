import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const getButtonStyles = (variant = "default", size = "default") => {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    whiteSpace: "nowrap",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    border: "none",
    fontFamily: "Inter, sans-serif",
  };

  const variantStyles = {
    default: {
      backgroundColor: "hsl(42 65% 52%)",
      color: "hsl(0 0% 4%)",
    },
    destructive: {
      backgroundColor: "hsl(0 84% 60%)",
      color: "hsl(210 40% 98%)",
    },
    outline: {
      backgroundColor: "hsl(0 0% 4%)",
      color: "hsl(40 30% 94%)",
      border: "1px solid hsl(42 30% 20%)",
    },
    secondary: {
      backgroundColor: "hsl(0 0% 11%)",
      color: "hsl(40 30% 94%)",
    },
    ghost: {
      backgroundColor: "transparent",
      color: "hsl(40 30% 94%)",
    },
    link: {
      backgroundColor: "transparent",
      color: "hsl(42 65% 52%)",
      textDecoration: "underline",
    },
  };

  const sizeStyles = {
    default: {
      height: "2.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },
    sm: {
      height: "2.25rem",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      borderRadius: "0.375rem",
    },
    lg: {
      height: "2.75rem",
      paddingLeft: "2rem",
      paddingRight: "2rem",
      borderRadius: "0.375rem",
    },
    icon: {
      height: "2.5rem",
      width: "2.5rem",
      padding: "0",
    },
  };

  return {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };
};

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const buttonStyles = getButtonStyles(variant, size);

    // Hover effect handler
    const handleMouseEnter = (e) => {
      switch (variant) {
        case "default":
          e.currentTarget.style.backgroundColor = "hsl(38 60% 38%)";
          break;
        case "destructive":
          e.currentTarget.style.backgroundColor = "hsl(0 80% 50%)";
          break;
        case "outline":
          e.currentTarget.style.backgroundColor = "hsl(0 0% 12%)";
          break;
        case "secondary":
          e.currentTarget.style.backgroundColor = "hsl(0 0% 16%)";
          break;
        case "ghost":
          e.currentTarget.style.backgroundColor = "hsl(0 0% 12%)";
          break;
        case "link":
          e.currentTarget.style.opacity = "0.8";
          break;
        default:
          break;
      }
    };

    const handleMouseLeave = (e) => {
      switch (variant) {
        case "default":
          e.currentTarget.style.backgroundColor = "hsl(42 65% 52%)";
          break;
        case "destructive":
          e.currentTarget.style.backgroundColor = "hsl(0 84% 60%)";
          break;
        case "outline":
          e.currentTarget.style.backgroundColor = "hsl(0 0% 4%)";
          break;
        case "secondary":
          e.currentTarget.style.backgroundColor = "hsl(0 0% 11%)";
          break;
        case "ghost":
          e.currentTarget.style.backgroundColor = "transparent";
          break;
        case "link":
          e.currentTarget.style.opacity = "1";
          break;
        default:
          break;
      }
    };

    return (
      <Comp
        ref={ref}
        style={{
          ...buttonStyles,
          ...style,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn("disabled:opacity-50 disabled:cursor-not-allowed", className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, getButtonStyles };