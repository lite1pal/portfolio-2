import Container from "./components/Layout/Container";
import HeroSection from "./components/Sections/HeroSection";
import ProjectSection from "./components/Sections/ProjectSection";
import WantToWorkSection from "./components/Sections/WantToWorkSection";
import WhatIdoSection from "./components/Sections/WhatIdoSection";

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
