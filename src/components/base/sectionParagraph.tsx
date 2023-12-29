import { ReactNode } from "react";

export default function SectionParagraph({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="mt-3 w-full text-slate-400 lg:w-2/3">{children}</div>;
}
