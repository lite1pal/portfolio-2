import { ReactNode } from "react";

function MaxWidthWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto px-5 xl:container md:px-20 xl:px-28">
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
