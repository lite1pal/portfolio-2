import { ReactNode } from "react";

export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className="w-5/6 text-2xl font-medium leading-tight text-slate-900 lg:w-4/6 lg:text-4xl dark:text-slate-50">
      {children}
    </div>
  );
}
