import { ReactNode } from "react";

export default function Button({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      className={`${className} duration-50 w-fit rounded border-2 border-emerald-400 bg-emerald-400 px-4 py-2 text-lg text-slate-50 transition hover:bg-transparent hover:text-emerald-400 dark:text-slate-900 dark:hover:bg-slate-900`}
    >
      {children}
    </button>
  );
}
