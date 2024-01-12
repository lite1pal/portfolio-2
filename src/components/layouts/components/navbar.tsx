"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IProps {
  toggleDarkMode: () => void;
}

const navItems = {
  "/#aboutme": { name: "About" },
  "/#services": { name: "Services" },
  "/#portfolio": { name: "Portfolio" },
  "/blog": { name: "Blog" },
  "/#collaboration": { name: "Collaboration" },
};

export default function Navbar({ toggleDarkMode }: IProps) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    setPrevScrollPos(window.scrollY);
    window.addEventListener("scroll", function () {
      // current scroll position
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        // user has scrolled up
        setShowNav(true);
      } else {
        // user has scrolled down
        setShowNav(false);
      }

      // update previous scroll position
      setPrevScrollPos(currentScrollPos);
      return () => window.removeEventListener("scroll", () => {});
    });
  }, [prevScrollPos]);

  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none sticky top-0 z-10"
        initial={{ opacity: 0, y: "-30%" }}
        animate={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className={`${
            showNav && "pointer-events-auto opacity-100"
          } cursor-fancy pointer-events-none border-b border-slate-900 border-opacity-5 bg-slate-50 bg-gradient-to-r p-5 opacity-0 transition duration-300 dark:border-opacity-0 dark:bg-slate-900 dark:from-slate-950 dark:to-slate-900`}
        >
          <ul className="flex flex-wrap items-center justify-center gap-6 text-lg font-medium text-primary sm:gap-10 md:gap-16 dark:text-primary-dark">
            <li className="flex h-10 w-10 items-center justify-center">
              <Link href="/">
                <Image width={1920} height={1080} src="/logo.svg" alt="logo" />
              </Link>
            </li>
            <li className="hidden h-8 border-r-2 border-primary  lg:flex dark:border-primary-dark"></li>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <li
                  key={path}
                  className="cursor-pointer hover:text-black dark:hover:text-slate-50"
                >
                  <Link href={path}>{name}</Link>
                </li>
              );
            })}

            {/* <li className="hidden lg:flex" onClick={toggleDarkMode}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="duration-50 group h-8 w-8 rounded-full p-1 transition"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  className="fill-sky-400/20"
                ></path>
                <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  className="fill-emerald-500 group-hover:fill-slate-900 dark:group-hover:fill-white"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  className="fill-emerald-500 group-hover:fill-slate-900 dark:group-hover:fill-white"
                ></path>
              </svg>
            </li> */}
          </ul>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
}
