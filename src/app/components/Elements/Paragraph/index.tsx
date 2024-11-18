import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  className?: string;
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  const baseStyles = "font-[500] text-[18px] leading-[35px]";
  const combinedStyles = cn(baseStyles, className);

  return (
    <p className={combinedStyles} {...props}>
      {children}
    </p>
  );
}

export default Paragraph;
