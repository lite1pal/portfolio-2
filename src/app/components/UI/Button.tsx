"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

type Variant = "primary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
}

function Button({
  children,
  onClick = () => {},
  type = "button",
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative text-[22px] w-full xl:max-w-[238px] h-[50px] xl:h-[70px] max-sm:text-[20px] max-sm:h-[52px] max-sm:w-full max-sm:py-0 max-sm:px-0 items-center justify-center focus:outline-none transition-all duration-300";

  const variants: Record<Variant, string> = {
    primary: "bg-foreground text-white hover:translate-y-2 hover:translate-x-2",
  };

  const combinedStyles = cn(baseStyles, variants[variant], className);

  return (
    <div className="relative h-[50px] w-[300px] xl:h-[70px] xl:w-full xl:max-w-[238px]">
      <button
        onClick={onClick}
        type={type}
        className={combinedStyles}
        {...props}
      >
        {children}
      </button>
      <div className="absolute -bottom-[10px] -right-2 -z-10 h-[50px] w-full border-[3px] border-foreground xl:-bottom-2 xl:h-[70px] xl:max-w-[238px]"></div>
    </div>
  );
}

export default Button;
