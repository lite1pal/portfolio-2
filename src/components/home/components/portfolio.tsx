import PortfolioItem from "@/components/base/portfolioItem";
import SectionHeader from "@/components/base/sectionHeader";
import SectionParagraph from "@/components/base/sectionParagraph";
import SectionTitle from "@/components/base/sectionTitle";
import Span from "@/components/base/span";
import XLine from "@/components/base/xLine";

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
