import AdjustIcon from "@mui/icons-material/Adjust";
import SchoolIcon from "@mui/icons-material/School";

interface IProps {
  position: string;
  timeline: string;
  place: string;
  description: string;
  type?: "experience" | "education";
}

export function ResumeItem({
  position,
  timeline,
  place,
  description,
  type = "experience",
}: IProps) {
  return (
    <div className="group flex w-full gap-5 rounded-lg p-6 transition duration-300 hover:cursor-pointer hover:bg-slate-300 hover:bg-opacity-20 hover:!opacity-100 lg:group-hover/list:opacity-20 dark:hover:bg-transparent">
      {/* <div className="h-5 min-h-5 w-5 min-w-5 rounded-full bg-emerald-400"></div> */}
      <div className="text-primary dark:text-primary-dark">
        {type === "education" ? <SchoolIcon /> : <AdjustIcon />}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 md:gap-0.5">
          <div className="flex flex-col md:flex-row md:items-center md:gap-3">
            <div className="text-lg font-medium text-slate-900 transition group-hover:text-primary dark:text-slate-50 dark:group-hover:text-primary-dark">
              {position}
            </div>
            <div className="text-sm text-slate-500">{timeline}</div>
          </div>
          <div className=" text-slate-900 dark:text-slate-50">{place}</div>
        </div>
        <div className="text-sm text-slate-500 lg:w-96 dark:font-light dark:text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
}
