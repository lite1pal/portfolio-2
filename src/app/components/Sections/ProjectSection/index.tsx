import Image from "next/image";
import Heading1 from "../../Elements/Heading1";
import Paragraph from "../../Elements/Paragraph";
import Container from "../../Layout/Container";
import Button from "../../UI/Button";
import Dots from "../../UI/Dots";
import { ArrowRight } from "lucide-react";

function ProjectSection({
  project,
}: {
  project: {
    label: string;
    name: string;
    href: string;
    description: string;
    image1: string;
    image2: string;
    attributes: string[];
  };
}) {
  return (
    <Container>
      <div className="grid gap-28 xl:grid-cols-2 xl:gap-0">
        <div className="flex flex-col xl:max-w-[605px]">
          <div className="uppercase">{project.label}</div>
          <Heading1 className="xl:text-[60px] xl:leading-[80px]">
            {project.name}
          </Heading1>
          <div className="mt-7 flex flex-col gap-10 xl:mt-7">
            <div className="flex flex-wrap gap-4">
              {project.attributes.map((at) => (
                <div key={at} className="bg-primary px-6 py-2">
                  {at}
                </div>
              ))}
            </div>
            <Paragraph className="opacity-80 xl:text-[21px]">
              {project.description}
            </Paragraph>
            <a href={project.href} target="_blank">
              <Button>see this project</Button>
            </a>
          </div>
        </div>

        <div className="flex xl:justify-end">
          <a
            href={project.href}
            target="_blank"
            className="group relative mx-auto h-[350px] w-full max-w-[300px] transition-all duration-300 hover:bg-transparent sm:h-[450px] sm:max-w-[400px] xl:max-w-[499px]"
          >
            <div className="absolute -right-7 -top-7 -z-10">
              <Dots color={"#32E2F9"} />
            </div>
            <Image
              src={project.image2}
              width={358}
              height={211}
              className="absolute right-12 top-0 w-[250px] shadow-xl transition-all duration-300 group-hover:-translate-y-3 group-hover:translate-x-3 sm:w-[300px] xl:w-[358px]"
              alt="project 1 image 2"
            />
            <Image
              src={project.image1}
              width={358}
              height={211}
              className="absolute bottom-0 left-12 w-[250px] shadow-xl transition-all duration-300 group-hover:-translate-y-3 group-hover:translate-x-3 sm:w-[300px] xl:w-[360px]"
              alt="project 1 image 1"
            />
            <div className="absolute -bottom-7 -left-7 -z-10">
              <Dots color={"#32E2F9"} />
            </div>
            <div className="absolute -bottom-10 right-0 flex items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:opacity-70">
              See this project <ArrowRight className="h-4 w-4" />
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default ProjectSection;
