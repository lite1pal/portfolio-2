import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto max-w-[1280px] px-[20px] py-16 sm:max-w-[700px] xl:max-w-[1450px] xl:px-10 xl:py-28">
      {children}
    </div>
  );
}

export default Container;
