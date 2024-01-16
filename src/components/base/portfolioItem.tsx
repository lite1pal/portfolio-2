import Image from "next/image";

type Props = {
  count: number;
  title: string;
  description?: string;
  tech?: {
    label: string;
    link?: string;
  }[];
  img: string;
  link?: string;
  reverse?: boolean;
};

export default function PortfolioItem({
  count,
  title,
  description,
  tech,
  img,
  link,
  reverse,
}: Props) {
  return (
    <div className="relative flex w-full flex-col items-center justify-between gap-10 xl:flex-row xl:items-start xl:gap-10">
      <div
        className={`${
          reverse && "lg:order-2"
        } z-2 relative flex flex-col gap-8`}
      >
        <a
          target="_blank"
          href={link}
          className="text-xl font-medium text-slate-900 transition duration-100 hover:text-primary dark:text-slate-50 hover:dark:text-primary-dark"
        >
          <span className="text-primary dark:text-primary-dark">{count}. </span>
          {title}
        </a>
        <div className="rounded bg-slate-200 p-10 text-slate-700 dark:bg-slate-900 dark:text-slate-400">
          {description}
        </div>
        <div className="flex flex-wrap gap-5">
          {tech?.map(({ label, link }) => {
            return (
              <a
                key={label}
                target="_blank"
                href={link}
                className="rounded-xl border border-primary border-opacity-50 px-3 py-1 font-medium text-primary dark:border-primary-dark dark:border-opacity-10 dark:font-extralight dark:text-primary-dark"
              >
                {label}
              </a>
            );
          })}
          <div></div>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        className={`${
          reverse && "lg:order-1"
        } group relative float-right max-w-xl opacity-70 transition duration-300 hover:skew-x-0 hover:opacity-100`}
      >
        <div className="absolute left-0 top-0 h-full w-full rounded-xl border border-primary-dark border-opacity-30 bg-primary bg-opacity-40 transition duration-300 group-hover:scale-110 group-hover:bg-opacity-0 dark:bg-primary-dark dark:bg-opacity-50 group-hover:dark:bg-opacity-0"></div>
        <Image
          className="rounded-xl"
          src={img}
          width={1920}
          height={1080}
          alt={`${title} image`}
        />
      </a>
    </div>
  );
}
