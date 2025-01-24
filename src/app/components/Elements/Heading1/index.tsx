import { cn } from "@/lib/utils";
import { Poppins, Playfair_Display } from "next/font/google";
import { HTMLAttributes, ReactNode } from "react";

// Change a font for Heading components
const poppins = Poppins({
  preload: true,
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  className?: string;
}

function Heading1({ children, className, ...props }: Heading1Props) {
  const baseStyles = "text-3xl font-[700]"; // set default styles
  const combinedStyles = cn(baseStyles, className); // merge default and passed-in styles

  return (
    <h1 className={`${poppins.className} ${combinedStyles}`} {...props}>
      {children}
    </h1>
  );
}

export default Heading1;
