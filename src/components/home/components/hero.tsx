import Button from "@/components/base/button";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="mx-auto mt-20 flex w-fit flex-col items-center gap-10 text-center font-medium text-slate-900 dark:text-slate-50">
      <div className="w-11/12 text-3xl leading-tight sm:text-5xl md:w-full">
        <div>
          Take your business to the{" "}
          <span className="hover:cursor-default hover:bg-gradient-to-r hover:from-emerald-700 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent">
            next level
          </span>
          .
        </div>
        <div className="text-slate-500 dark:text-slate-400">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={100}
            loop={0}
            typeSpeed={100}
            words={[
              "Put your money to work",
              "Increase your revenue",
              "Make yourself feel better",
            ]}
          />
        </div>
        {/* <div>Put your money to work</div> */}
      </div>
      <Button
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore services
      </Button>
    </div>
  );
}
