"use client";

import Link from "next/link";
import BgSpan from "../../Elements/BgSpan";
import { Github, Linkedin, Twitter, X } from "lucide-react";
import MobileSidebar from "../MobileSidebar";

export default function Navbar() {
  return (
    <nav className="relative mx-auto flex max-w-[1280px] items-center justify-between px-[20px] pt-5 sm:max-w-[700px] xl:max-w-[1450px] xl:px-10 xl:pt-10">
      <div className="font-[800] xl:text-[26px]">Denis.</div>
      <MobileSidebar />
      <div className="hidden items-center font-[600] xl:flex xl:gap-[60px] xl:text-[20px]">
        <Link href="#projects">
          {" "}
          <BgSpan className="bottom-1 h-[5px] group-hover:h-[10px]">
            my work
          </BgSpan>
        </Link>
        <BgSpan className="bottom-1 h-[5px] group-hover:h-[10px]">
          <a href="mailto:deniskatarasenko6@gmail.com">get in touch</a>
        </BgSpan>
        <div className="flex items-center gap-7">
          <a href="https://x.com/lite_pal" target="_blank">
            <Twitter className="hover:fill-foreground h-5 w-5 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/denis-tarasenko-39bb44256/"
            target="_blank"
          >
            <Linkedin className="hover:fill-foreground h-5 w-5 transition-all duration-300" />
          </a>
          <a className="https://github.com/lite1pal" target="_blank">
            <Github className="hover:fill-foreground h-5 w-5 cursor-pointer transition-all duration-300" />
          </a>
        </div>
      </div>
      {/* <div className="navbar-start hidden sm:flex">
        {pathName !== "/" && (
          <Link href="/" className="avatar">
            <div className="w-10 rounded-full">
              <img src="/me.jpg" />
            </div>
          </Link>
        )}
      </div>
      <div className="navbar-center hidden sm:flex"></div>
      <div className="navbar-end max-sm:w-full">
        <ul className="menu menu-horizontal flex items-center gap-1 text-base">
          <li>
            <a
              target="_blank"
              aria-label="Twitter"
              href="https://x.com/lite_pal"
            >
              <Twitter className="h-5 w-5 " />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/denis-tarasenko-39bb44256/"
            >
              <Linkedin className="h-5 w-5 " />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              aria-label="Github"
              href="https://github.com/lite1pal"
            >
              <Github className="h-5 w-5 " />
            </a>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}
