import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return <div className="cursor-default text-lg">{children}</div>;
}
