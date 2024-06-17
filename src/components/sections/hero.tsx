import SocialMediaIcons from "../socialMediaIcons";

export default function Hero() {
  return (
    <div className="mt-10 flex items-center gap-7">
      <div className="flex flex-col gap-5 text-3xl leading-tight sm:text-5xl ">
        <div className="font-medium leading-tight">Hi, I am Denis</div>
        <div className="max-w-[500px] text-base text-base-content/70">
          Working as a remote web dev, building my own products whenever
          possible as it gives me so much joy
        </div>
        <SocialMediaIcons />
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-lg">Follow me along on my solopreneur journey</div>
        <div className="flex gap-3">
          <input
            className="input input-secondary"
            placeholder="Enter your email"
          />
          <button className="btn btn-secondary">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="text-3xl text-slate-500 dark:text-slate-400">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={100}
            loop={0}
            typeSpeed={100}
            words={[
              "Build high-performant websites",
              "Solve complex problems",
              "Delight in the elegance of great design",
            ]}
          />
        </div> */
}
