import { ReactNode } from "react";

export default function Span({ children }: { children: ReactNode }) {
  return <span className="text-slate-900 dark:text-slate-100">{children}</span>;
}
