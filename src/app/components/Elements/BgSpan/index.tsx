import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface BgSpanProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
}

function BgSpan({ children, className, ...props }: BgSpanProps) {
  const baseStyles =
    "absolute -z-10 transition-all duration-300 w-full bg-background";
  const combinedStyles = cn(baseStyles, className);

  return (
    <span className="group relative xl:hover:cursor-pointer">
      <span className={combinedStyles} {...props}></span>
      {children}
    </span>
  );
}

export default BgSpan;
