import { ReactNode } from "react";

export default function SectionParagraph({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mt-3 w-full px-3 text-sm text-slate-500 md:w-2/3 lg:text-base dark:text-slate-400">
      {children}
    </div>
  );
}
