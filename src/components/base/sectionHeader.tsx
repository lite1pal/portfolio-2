import { ReactNode } from "react";

export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className=" w-4/6 text-4xl font-medium leading-tight text-slate-900 dark:text-slate-50">
      {children}
    </div>
  );
}
