import SectionHeader from "@/components/sectionHeader";
import SectionParagraph from "@/components/sectionParagraph";
import SectionTitle from "@/components/out-of-date/sectionTitle";
import Span from "@/components/out-of-date/span";
import XLine from "@/components/xLine";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div id="portfolio" className="flex flex-col items-center gap-10">
      <div className="flex w-full flex-col items-center gap-2 text-center">
        <SectionTitle>Portfolio</SectionTitle>
        <SectionHeader>Excellent Websites I{"'"}ve Built</SectionHeader>
        <SectionParagraph>
          For me, developing websites is like an art in its pure way. I{"'"}m
          proud of all of them,{" "}
          <Span>and I strive everyday to make next one better</Span>
        </SectionParagraph>
      </div>
      <div className="flex w-10/12 flex-col gap-16">
        <PortfolioItem
          count={1}
          title="Pet E-commerce website"
          description="This project is the best I've built so far in terms of technologies used there. Apart from Next.js and TailwindCSS, I also used Prisma ORM, Auth.js, DaisyUI, Flowbite-react, MUI and Joy UI. SEO is optimized following the best practices possible."
          img="/leyven-image-en.png"
          link="https://www.leyven.com.ua"
          tech={[
            { label: "Next.js", link: "https://nextjs.org/" },
            { label: "React.js", link: "https://react.dev/" },
            { label: "TailwindCSS", link: "https://tailwindcss.com/" },
            { label: "Prisma", link: "https://www.prisma.io/" },
            { label: "DaisyUI", link: "https://daisyui.com/" },
            {
              label: "Joy UI",
              link: "https://mui.com/joy-ui/getting-started/",
            },
            {
              label: "MongoDB",
              link: "https://www.mongodb.com/",
            },
            {
              label: "Telegram API",
              link: "https://core.telegram.org/",
            },
          ]}
        />
        <XLine />
        <PortfolioItem
          count={2}
          reverse
          title="Auto-auction Catalog website"
          description="I got this job on Upwork, and my task was to create an entire front-end for the website, and also connecting it to the existing back-end. Tight deadlines, but it was worth all the effort!"
          img="/carlink-image-en.png"
          link="https://car-link.tools"
          tech={[
            { label: "Next.js", link: "https://nextjs.org/" },
            { label: "React.js", link: "https://react.dev/" },
            { label: "SCSS", link: "https://tailwindcss.com/" },
            { label: "MUI", link: "https://www.prisma.io/" },
          ]}
        />
        <XLine />
        <PortfolioItem
          count={3}
          title="Auto-auction Dashboard website"
          description="It's our second collaboration with a client, and this time I had to optimize almost every dashboard page for mobile/tablet screens. Got hands-on experience with styled-components, solid UI library indeed."
          img="/covin-image.png"
          link="https://covin.io"
          tech={[
            { label: "Next.js", link: "https://nextjs.org/" },
            { label: "React.js", link: "https://react.dev/" },
            {
              label: "styled-components",
              link: "https://styled-components.com/",
            },
          ]}
        />
        <XLine />
        <PortfolioItem
          count={4}
          reverse
          title="Landing Page of Real estate AI platform"
          description="My first commercial job, never forget this one. I got it on Upwork and my task was to build a landing page following the Figma design. Used SCSS and MUI for the first time here."
          img="/kurby-image.png"
          link="https://kurby.ai"
          tech={[
            { label: "Next.js", link: "https://nextjs.org/" },
            { label: "React.js", link: "https://react.dev/" },
            { label: "SCSS", link: "https://tailwindcss.com/" },
            { label: "MUI", link: "https://www.prisma.io/" },
          ]}
        />
      </div>
    </div>
  );
}

function PortfolioItem({
  count,
  title,
  description,
  tech,
  img,
  link,
  reverse,
}: any) {
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
          className="hover:dark:text-primary-dark text-xl font-medium text-slate-900 transition duration-100 hover:text-primary dark:text-slate-50"
        >
          <span className="dark:text-primary-dark text-primary">{count}. </span>
          {title}
        </a>
        <div className="rounded bg-slate-200 p-10 text-slate-700 dark:bg-slate-900 dark:text-slate-400">
          {description}
        </div>
        <div className="flex flex-wrap gap-5">
          {tech?.map(({ label, link }: any) => {
            return (
              <a
                key={label}
                target="_blank"
                href={link}
                className="dark:border-primary-dark dark:text-primary-dark rounded-xl border border-primary border-opacity-50 px-3 py-1 font-medium text-primary dark:border-opacity-10 dark:font-extralight"
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
        <div className="border-primary-dark dark:bg-primary-dark absolute left-0 top-0 h-full w-full rounded-xl border border-opacity-30 bg-primary bg-opacity-40 transition duration-300 group-hover:scale-110 group-hover:bg-opacity-0 dark:bg-opacity-50 group-hover:dark:bg-opacity-0"></div>
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
