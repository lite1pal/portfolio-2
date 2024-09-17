import Link from "next/link";

function HeroSection() {
  return (
    <div className=" flex flex-col gap-20 sm:gap-36 lg:flex-row 2xl:justify-center">
      <div className="my-auto flex flex-col gap-7 leading-tight">
        <div>
          <img className="h-44 w-44 rounded-full object-cover" src="/me.jpg" />{" "}
        </div>
        <div className="text-4xl font-medium leading-tight sm:min-w-[450px] sm:text-6xl">
          Hi, I am{" "}
          <span className="rounded bg-secondary px-2 py-1 text-secondary-content">
            Denis
          </span>
        </div>
        <div className="max-w-[500px] text-base text-base-content/70">
          Working as a remote web developer, I build my own products whenever
          possible because it brings me so much joy.
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-5">
        <div className="relative sm:-left-10 lg:-left-36">
          <img className="h-20" src="/excalidraw/currently-building.png" />
        </div>

        <Link
          href="https://lastinghabits.app"
          target="_blank"
          className="mx-auto max-w-[65rem] transition-all duration-300 hover:scale-105"
        >
          <img
            className="max-h-[30rem] w-full object-cover"
            src="/demoapp-4.png"
          />
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
