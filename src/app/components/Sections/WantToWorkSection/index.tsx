import BgSpan from "../../Elements/BgSpan";
import Heading1 from "../../Elements/Heading1";
import Paragraph from "../../Elements/Paragraph";
import Container from "../../Layout/Container";

function WantToWorkSection() {
  return (
    <section className="mb-5 px-2 xl:px-5">
      <div className="relative z-0 bg-primary">
        <Container>
          <div className="grid gap-[40px] xl:grid-cols-2 xl:gap-0">
            <div className="flex flex-col xl:gap-[276px]">
              <Heading1 className="xl:text-[60px]">
                Want to{" "}
                <BgSpan className="bottom-2 h-[9px] group-hover:h-[18px] xl:bottom-4 xl:h-[18px] xl:group-hover:h-[36px]">
                  work?
                </BgSpan>
              </Heading1>
              <div className="hidden text-[21px] font-[500] opacity-70 xl:flex">
                © All rights reversed - Denis Tarasenko
              </div>
            </div>
            <Paragraph className="xl:text-[21px]">
              If you looking for a modern and powerful website for your
              business, startup or personal project, I am available for work.
              You can email me directly at{" "}
              <BgSpan className="bottom-1.5 h-[5px] group-hover:h-[10px] xl:bottom-2 xl:h-[6px] xl:group-hover:h-[12px]">
                <a href="mailto:deniskatarasenko6@gmail.com">
                  deniskatarasenko6@gmail.com
                </a>
              </BgSpan>
            </Paragraph>

            <div className="mt-5 flex text-[18px] font-[500] opacity-70 xl:hidden xl:text-[21px]">
              © All rights reversed - Denis Tarasenko
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default WantToWorkSection;
