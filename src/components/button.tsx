import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva("w-fit rounded transition duration-50 ", {
  variants: {
    variant: {
      default:
        "bg-primary dark:bg-primary-dark hover:text-primary dark:hover:text-primary-dark text-slate-50 hover:bg-transparent dark:text-slate-900 dark:hover:bg-slate-900",
      outline:
        "border-2 border-primary dark:border-primary-dark hover:bg-primary hover:text-primary dark:hover:bg-primary-dark dark:hover:text-slate-900",
    },
    size: {
      default: "px-4 py-2 text-lg",
      sm: "px-3 py-2 text-base",
      lg: "px-5 py-3 text-xl",
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, size, variant, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
