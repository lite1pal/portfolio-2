import Container from "../../Layout/Container";
import Heading1 from "../../Elements/Heading1";
import Paragraph from "../../Elements/Paragraph";
import Button from "../../UI/Button";
import Navbar from "../../Layout/Navbar";
import BgSpan from "../../Elements/BgSpan";

function HeroSection() {
  return (
    <section className="p-2 xl:p-5">
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Container>
          <div className="flex flex-col gap-[50px] xl:gap-[74px]">
            <div className="flex flex-col gap-[16px] xl:gap-[21px]">
              <Heading1 className="max-w-[225px] text-[26px] leading-[40px] sm:max-w-[470px] sm:text-[32px] sm:leading-[50px] xl:max-w-[846px] xl:text-[60px] xl:leading-[80px]">
                Hi, I’m Denis,{" "}
                <BgSpan className="bottom-2 h-[8px] group-hover:h-[16px] max-sm:bg-transparent xl:bottom-4 xl:h-[18px] xl:group-hover:h-[36px]">
                  Web Designer
                </BgSpan>{" "}
                and{" "}
                <BgSpan className="bottom-2 h-[8px] group-hover:h-[16px] max-sm:bg-transparent xl:bottom-4 xl:h-[18px] xl:group-hover:h-[36px]">
                  Nextjs
                </BgSpan>{" "}
                Developer
              </Heading1>
              <Paragraph className="xl:max-w-[605px] xl:text-[21px]">
                I design beautiful, high-performing websites for companies
                around the world. Email me if you’re in need of a powerful
                online presence. If we’re compatible, I’ll provide a time and
                cost breakdown.
              </Paragraph>
            </div>
            <a href="#projects">
              <Button>see my work</Button>
            </a>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HeroSection;
