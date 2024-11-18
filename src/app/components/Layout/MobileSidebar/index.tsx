"use client";

import { Github, Linkedin, Menu, Twitter } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "my work", href: "#projects" },
  { name: "get in touch", href: "mailto:deniskatarasenko6@gmail.com" },
];

function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const sidebarButtonRef = useRef(null);

  const handleOpenSidebar = () => {
    setOpen((prev) => !prev);
  };

  const handleClickOutside = (event: any) => {
    if (
      sidebarRef.current &&
      sidebarButtonRef.current &&
      !(sidebarButtonRef.current as any).contains(event.target) &&
      !(sidebarRef.current as any).contains(event.target)
    ) {
      setOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-20 xl:hidden">
      <button ref={sidebarButtonRef} onClick={handleOpenSidebar}>
        <Menu />
      </button>

      <div
        ref={sidebarRef}
        className={`${open ? "flex" : "hidden"} absolute left-0 top-0 w-full`}
      >
        <div className="flex w-full justify-end bg-white p-[20px]">
          <div className="text-foreground flex flex-col items-start gap-3 text-lg font-medium">
            <button
              onClick={handleOpenSidebar}
              className="mb-5 flex w-full justify-end"
            >
              <Menu />
            </button>
            {navItems.map((item, i) => (
              <a key={i} href={item.href}>
                {item.name}
              </a>
            ))}
            <div className="mt-10 flex items-center gap-7">
              <a href="https://x.com/lite_pal">
                <Twitter className="hover:fill-foreground transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/denis-tarasenko-39bb44256/">
                <Linkedin className="hover:fill-foreground transition-all duration-300" />
              </a>
              <a className="https://github.com/lite1pal">
                <Github className="hover:fill-foreground cursor-pointer transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
