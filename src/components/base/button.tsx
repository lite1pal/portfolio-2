import { MouseEventHandler, ReactNode } from "react";

interface IProps {
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  children: ReactNode;
}

export default function Button({
  className,
  type = "button",
  onClick,
  children,
}: IProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} duration-50 bg-primary border-primary dark:bg-primary-dark dark:border-primary-dark hover:text-primary dark:hover:text-primary-dark w-fit rounded border-2 px-4 py-2 text-lg text-slate-50 transition hover:bg-transparent dark:text-slate-900 dark:hover:bg-slate-900`}
    >
      {children}
    </button>
  );
}
