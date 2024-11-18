import BgSpan from "../../Elements/BgSpan";
import Heading1 from "../../Elements/Heading1";
import Paragraph from "../../Elements/Paragraph";
import Container from "../../Layout/Container";

function WhatIdoSection() {
  return (
    <Container>
      <div className="grid gap-[40px] xl:grid-cols-2 xl:gap-0">
        <div>
          <Heading1 className="xl:text-[60px]">
            What I{" "}
            <BgSpan className="bottom-2 h-[9px] group-hover:h-[18px] xl:bottom-4 xl:h-[18px] xl:group-hover:h-[36px]">
              do
            </BgSpan>
          </Heading1>
        </div>
        <div className="flex flex-col gap-[20px] xl:gap-[96px]">
          <div className="flex flex-col gap-1">
            <h3 className="text-[21px] font-[800] xl:text-[30px]">Design</h3>
            <Paragraph className="xl:text-[21px]">
              I design beautiful and stunning designs that stand out. I use
              Figma and follow best strategies to make sure the designs are easy
              to turn into code.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[21px] font-[800] xl:text-[30px]">
              Development
            </h3>
            <Paragraph className="xl:text-[21px]">
              I build websites with NextJS and TailwindCSS that are super fast,
              fully compatible with any integrations, and just awesome. I always
              make it easy for you to update your website’s content, so you’re
              in full control after I deliver it.
            </Paragraph>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WhatIdoSection;
