interface IProps {
  position: string;
  timeline: string;
  place: string;
  description: string;
}

export function ResumeItem({ position, timeline, place, description }: IProps) {
  return (
    <div className="group flex gap-5 rounded-lg p-6 transition duration-300 hover:cursor-pointer hover:bg-slate-600 hover:bg-opacity-20 hover:!opacity-100 group-hover/list:opacity-50">
      <div className="h-5 w-5 rounded-full bg-emerald-400"></div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="text-lg font-medium text-slate-900 transition group-hover:text-emerald-400 dark:text-slate-50">
            {position}
          </div>
          <div className="text-sm text-slate-500">{timeline}</div>
        </div>
        <div className=" text-slate-900 dark:text-slate-50">{place}</div>
        <div className="w-96 text-sm font-light text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
}
