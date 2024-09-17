import { ArrowDownToLine, BriefcaseBusiness } from "lucide-react";
import { Button } from "../ui/button";

const jobs = [
  {
    imgSrc: "/leyven.webp",
    company: "Leyven",
    position: "Full-stack developer",
    duration: "Dec 2022 - present",
  },

  {
    imgSrc: "/kurby.png",
    company: "Kurby",
    position: "Front-end developer",
    duration: "Sep 2022 - Oct 2022",
  },
];

function WorkExperience() {
  return (
    <div className="card w-full rounded-xl border border-neutral/5">
      <div className="card-body">
        <div className="flex items-center gap-3 text-sm font-semibold">
          <BriefcaseBusiness className="h-5 w-5 text-base-content/60" /> Work
        </div>

        <div className="mt-4 flex flex-col gap-7">
          {jobs.map((job) => (
            <div key={job.position} className="flex justify-between">
              <div className="flex items-center gap-5">
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img src={job.imgSrc} className="h-6 w-6" />
                </div>
                <div className="space-y-1 text-sm">
                  <div className="font-medium">{job.company}</div>
                  <div className="text-base-content/80">{job.position}</div>
                </div>
              </div>
              <div className="self-end text-xs font-medium text-base-content/50">
                {job.duration}
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="mt-7 gap-3">
          Download CV
          <ArrowDownToLine className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default WorkExperience;
