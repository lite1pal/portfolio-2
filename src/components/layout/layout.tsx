"use client";

import { ReactNode, useEffect, useState } from "react";
import Navbar from "./navbar";
import { Recursive as FontSans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import MaxWidthWrapper from "./maxWidthWrapper";
import Footer from "./footer";

const fontSans = FontSans({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  // toggles global theme
  const toggleTheme = () => {
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

  // handles global theme
  useEffect(() => {
    document.documentElement.classList.add("dark");
    setIsDark(true);
    if (localStorage.theme === "dark") {
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  return (
    <body
      className={`${fontSans.className} max-w-screen min-h-screen bg-base-100 font-sans antialiased`}
    >
      <Toaster />

      <main>
        <MaxWidthWrapper>
          <Navbar />
          {children}
        </MaxWidthWrapper>
      </main>
    </body>
  );
}
