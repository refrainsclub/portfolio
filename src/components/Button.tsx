import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import React from "react";

const buttonVariants = cva(
  [
    "leading-0",
    "block",
    "rounded-lg",
    "border",
    "px-6",
    "py-3",
    "text-base",
    "tracking-tight",
    "text-white",
    "duration-300",
    "ease-in-out",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-pink-800",
          "border-pink-900",
          "hover:border-pink-800",
          "hover:bg-pink-700",
          "shadow-md",
          "disabled:opacity-50",
        ],
        secondary: ["border-gray-700", "hover:bg-gray-700"],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={twMerge(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
