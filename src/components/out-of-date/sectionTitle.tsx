import { ReactNode } from "react";

export default function SectionTitle({ children }: { children: ReactNode }) {
  return <div className="w-36 cursor-default text-lg">{children}</div>;
}
