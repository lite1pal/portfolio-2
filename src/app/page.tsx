import HeroSection from "./components/Sections/HeroSection";
import ProjectSection from "./components/Sections/ProjectSection";
import WantToWorkSection from "./components/Sections/WantToWorkSection";
import WhatIdoSection from "./components/Sections/WhatIdoSection";

import { Roboto, Inter, Lato, Ubuntu, Outfit } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const projects = [
  {
    label: "latest work",
    name: "Team App Website",
    href: "https://concept-chat-app.vercel.app/",
    description: "Concept design for a team app website.",
    image1: "/projects/project-1/image-1.png",
    image2: "/projects/project-1/image-2.png",
    attributes: ["Design", "Development", "Concept"],
  },
  {
    label: "ongoing project",
    name: "E-Commerce Pet Products Store",
    href: "https://www.leyven.com.ua/",
    description:
      "Fast and beautiful E-Commerce store for pet products. Full design and development, integration of payment gateway.",
    image1: "/projects/project-2/image-1.png",
    image2: "/projects/project-2/image-2.png",
    attributes: ["E-Commerce", "Design", "Development"],
  },
  {
    label: "my own startup",
    name: "Habit Tracker App",
    href: "https://www.lastinghabits.app/",
    description:
      "Design and development, this is a landing page for my own mobile app.",
    image1: "/projects/project-3/image-1.png",
    image2: "/projects/project-3/image-2.png",
    attributes: ["Mobile App", "Design", "Development"],
  },
  {
    label: "freelance work",
    name: "Car Catalog Website",
    href: "https://car-link.tools/",
    description:
      "Conversion of Figma design into code. Integration of the existing back-end.",
    image1: "/projects/project-4/image-1.png",
    image2: "/projects/project-4/image-2.png",
    attributes: ["Front-end development"],
  },
];

export default function HomeScreen() {
  return (
    <div
      className={`mx-auto flex h-screen max-w-xl flex-col gap-16 pt-28 text-2xl font-[300] ${outfit.className}`}
    >
      <div className="flex items-center gap-3">
        Hi, my name is Denis Tarasenko
        <img src="/denis.jpg" className="h-16 w-16 rounded-full object-cover" />
      </div>

      <div className="flex items-center gap-3">
        <div>I build cool apps and developer tools</div>
        <div className="group relative flex items-center">
          <a
            href="https://apps.apple.com/us/app/lasting-habits/id6736766976"
            target="_blank"
            className="tooltip cursor-pointer"
            data-tip="Lasting Habits, iOS app"
          >
            <img
              src="/lasting-habits-logo.png"
              className="z-10 h-16 w-16 transition-transform duration-200"
            />
          </a>
          <a
            href="https://nextnative.dev?ref=portfolio"
            target="_blank"
            className="tooltip mt-6 transition-transform duration-200 group-hover:translate-x-6"
            data-tip="NextNative"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              className="mt-4 scale-[2.2] rounded-md bg-green-100 p-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3711 23.8639L23.6958 11.1566"
                stroke="#06B300"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <path
                d="M6.69141 19.3918L19.0161 6.68448"
                stroke="#06B300"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <path
                d="M2 14.8401L14.3247 2.1328"
                stroke="#06B300"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div>
        and I write a{" "}
        <a href="https://denistarasenko.beehiiv.com/subscribe" target="_blank">
          newsletter
        </a>{" "}
        about building products.
      </div>

      <div className="flex items-center gap-3">
        You can also find me hanging out on{" "}
        <a href="https://x.com/lite_pal" target="_blank">
          <img
            src="/X_logo.jpg"
            className="h-10 w-10 rotate-6 rounded-lg transition-all duration-200 hover:rotate-0"
          />
        </a>
      </div>

      <hr />

      <div className="text-lg">
        Need a developer/designer?{" "}
        <a href="mailto:deniskatarasenko6@gmail.com">Let me know</a>
      </div>
    </div>
  );

  return (
    <div>
      <HeroSection />
      <div id="projects">
        {projects.map((p) => (
          <ProjectSection key={p.href} project={p} />
        ))}
      </div>
      <WhatIdoSection />
      <WantToWorkSection />
    </div>
  );
}
