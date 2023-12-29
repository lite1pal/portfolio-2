"use client";

import { ReactNode, useEffect, useState } from "react";
import Navbar from "./components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // toggles global theme
  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  // trackes current mouse position
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // handles global theme
  useEffect(() => {
    document.documentElement.classList.add("dark");
    setIsDark(true);
    // if (localStorage.theme === "dark") {
    // } else {
    //   document.documentElement.classList.remove("dark");
    //   setIsDark(false);
    // }
  }, []);

  return (
    <body
      className={`${inter.className} ${
        isDark && "dark"
      } max-w-screen min-h-screen cursor-default overflow-x-hidden bg-slate-50 bg-gradient-to-r text-emerald-500 transition duration-300 dark:bg-slate-900 dark:from-slate-950 dark:to-slate-900 dark:text-emerald-400`}
    >
      <main className={`mx-auto md:container`}>
        <div
          style={{
            top: mousePos.y - 430,
            left: mousePos.x - 430,
            background: `radial-gradient(2000px, rgba(16, 185, 129, 0.15),  transparent 20%)`,
          }}
          className={`pointer-events-none fixed inset-0 top-0 z-20 h-[50rem] w-[50rem] rounded-full opacity-0 lg:opacity-75`}
        ></div>
        <Navbar {...{ toggleDarkMode }} />
        {children}
        <div className="mx-auto mb-7 mt-36 w-fit font-extralight text-emerald-400">
          Designed & Built by Denis Tarasenko
        </div>
      </main>
    </body>
  );
}
