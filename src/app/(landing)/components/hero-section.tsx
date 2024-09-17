import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <section className=" flex flex-col gap-10 sm:gap-36 lg:flex-row 2xl:justify-center">
      <div className="my-auto flex flex-col gap-7 leading-tight">
        <figure>
          <Image
            width={300}
            height={300}
            className="h-44 w-44 rounded-full object-cover"
            src="/me.jpg"
            alt="Denis"
          />
        </figure>
        <h1 className="text-4xl font-medium leading-tight sm:min-w-[450px] sm:text-6xl">
          Hi, I am{" "}
          <span className="rounded bg-secondary px-2 py-1 text-secondary-content">
            Denis
          </span>
        </h1>
        <p className="max-w-[500px] text-base text-base-content/70">
          Working as a remote web developer, I build my own products whenever
          possible because it brings me so much joy.
        </p>
      </div>

      <div className="mt-5 flex flex-col items-center gap-5 sm:mt-10">
        <figure className="relative sm:-left-10 lg:-left-36">
          <Image
            width={500}
            height={300}
            className="h-20 w-full"
            src="/excalidraw/currently-building.png"
            alt="Currently building illustration"
          />
        </figure>

        <Link
          href="https://lastinghabits.app"
          target="_blank"
          className="mx-auto max-w-[65rem] transition-all duration-300 hover:scale-105"
        >
          <Image
            width={500}
            height={500}
            className="max-h-[30rem] w-full object-cover"
            src="/demoapp-4.png"
            alt="Demo of Lasting Habits app"
            priority
          />
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
