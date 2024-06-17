import { Github, Linkedin, Twitter } from "lucide-react";
import BlogView from "./blog/blog";

export default function HomeScreen() {
  return (
    <div>
      <div className="mt-10 flex flex-col items-center gap-20 sm:gap-36 lg:flex-row 2xl:justify-center">
        <div className="flex flex-col gap-7 leading-tight">
          <div>
            <img
              className="h-44 w-44 rounded-full object-cover"
              src="/me.jpg"
            />{" "}
          </div>
          <div className="text-5xl font-medium leading-tight sm:min-w-[450px] sm:text-6xl">
            Hi, I am{" "}
            <span className="rounded bg-secondary px-2 py-1 text-secondary-content">
              Denis
            </span>
          </div>
          <div className="max-w-[500px] text-base text-base-content/70">
            Working as a remote web developer, I build my own products whenever
            possible because it brings me so much joy.
          </div>
          <div className="flex items-center gap-7">
            <a target="_blank" href="https://x.com/lite_pal">
              <Twitter className="cursor-pointer hover:fill-base-content" />
            </a>
            <a target="_blank" href="https://github.com/lite1pal">
              <Github className="cursor-pointer hover:fill-base-content" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/denis-tarasenko-39bb44256/"
            >
              <Linkedin className="cursor-pointer hover:fill-base-content" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="relative sm:-left-10 lg:-left-36">
            <img className="h-20" src="/excalidraw/currently-building.png" />
          </div>
          <StartupCard
            title="Lasting Habits"
            description="The only habit tracker you'll ever need"
            logoSrc="/lasting-habits-logo.png"
            link="https://lasting-habits.vercel.app"
          />
        </div>
      </div>
      <BlogView />
    </div>
  );
}

function StartupCard({
  logoSrc,
  title,
  description,
  link,
}: {
  logoSrc: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="card w-fit cursor-pointer gap-1.5 rounded-xl p-5 text-base-content shadow-xl transition duration-300 hover:scale-105"
    >
      <div className="flex items-center gap-3">
        <div>
          <img className="h-12 w-12" src={logoSrc} />
        </div>
        <div className="text-xl font-semibold text-slate-900">{title}</div>
      </div>
      <div className="text-base-content/70">{description}</div>

      <hr className="my-5 border-opacity-10" />
      <div className="mx-auto max-w-[18rem]">
        <img
          className="max-h-[25rem] w-full object-cover"
          src="/lasting-habits (1).png"
        />{" "}
      </div>
    </a>
  );
}
