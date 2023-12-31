interface IProps {
  svgIcon: any;
  h: string;
  p: string;
}

export default function SkillCard({ svgIcon, h, p }: IProps) {
  return (
    <div className="group flex h-64 w-72 cursor-default flex-col gap-6 rounded-lg bg-slate-200 p-10 transition  duration-300 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-900">
      {svgIcon}
      <div className="text-lg text-slate-800 dark:text-slate-50 dark:group-hover:text-slate-50">
        {h}
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400 dark:group-hover:text-slate-300">
        {p}
      </div>
    </div>
  );
}
