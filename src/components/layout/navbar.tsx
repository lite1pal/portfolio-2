"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/products": { name: "Products" },
  // "/blog": { name: "Articles" },
};

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className="navbar gap-5 py-5 sm:px-10">
      <div className="navbar-start hidden sm:flex">
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
            <a target="_blank" href="https://x.com/lite_pal">
              {/* <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                // fill={color}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.579-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.062c0 2.386 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.314 0-.622-.03-.92-.086.631 1.953 2.445 3.376 4.6 3.416-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.79-.023-1.175-.067 2.179 1.397 4.768 2.21 7.557 2.21 9.054 0 14-7.498 14-13.986 0-.21 0-.423-.015-.633.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg> */}
              <Twitter className="h-5 w-5 " />
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              <Linkedin className="h-5 w-5 " />
            </a>
          </li>
          <li>
            <a target="_blank" href="">
              <Github className="h-5 w-5 " />
            </a>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// function ToggleTheme({ toggleTheme }: IProps) {
//   return (
//     <li className="hidden lg:flex" onClick={toggleTheme}>
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         className="duration-50 group h-8 w-8 rounded-full p-1 transition"
//       >
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
//           className="fill-sky-400/20"
//         ></path>
//         <path
//           d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
//           className="fill-emerald-500 group-hover:fill-slate-900 dark:group-hover:fill-white"
//         ></path>
//         <path
//           fillRule="evenodd"
//           clipRule="evenodd"
//           d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
//           className="fill-emerald-500 group-hover:fill-slate-900 dark:group-hover:fill-white"
//         ></path>
//       </svg>
//     </li>
//   );
// }
