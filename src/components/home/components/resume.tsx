import { ResumeItem } from "@/components/base/resumeItem";
import SectionHeader from "@/components/base/sectionHeader";
import SectionTitle from "@/components/base/sectionTitle";

export default function Resume() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <SectionTitle>Resume</SectionTitle>
        <SectionHeader>I Worked For Some Awesome Companies</SectionHeader>
      </div>
      <div className="grid w-full grid-rows-2 space-x-3 px-4 sm:w-fit md:p-0 lg:grid-cols-2 lg:grid-rows-1">
        <div className="flex flex-col gap-7">
          <div className="text-xl font-medium text-slate-900 lg:text-2xl dark:text-slate-50">
            Experience
          </div>
          <div className="group/list flex flex-col gap-4">
            <ResumeItem
              position="Front-end Developer"
              timeline="( Nov 2023 - Present )"
              place="Covin"
              description="Worked on the existing website to make it mobile/tablet responsive."
            />
            <ResumeItem
              position="Lead Front-end Developer"
              timeline="( Oct 2023 - Present )"
              place="CarLink"
              description="Developed and optimized a front-end for the website from scratch. Collaborated with a back-end engineer to ensure a secure and performant integration with API."
            />
            <ResumeItem
              position="Front-end Developer"
              timeline="( Sep 2023 - Sep 2023 )"
              place="Kurby"
              description="Crafted a responsive landing page based on Figma design."
            />
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className="text-xl font-medium text-slate-900 lg:text-2xl dark:text-slate-50">
            Education
          </div>
          <div className="group/list flex flex-col gap-4">
            <ResumeItem
              position="Bachelor of Computer Engineering"
              timeline="( Sep 2020 - Present )"
              place="Navional Aviation University in Ukraine"
              description="Pursuing my computer engineering studies and at the same time getting my hands dirty in the web development world."
            />
            <ResumeItem
              position="Back-end Engineering Certification"
              timeline="( Dec 2022 - May 2023 )"
              place="Codecademy"
              description="Learned almost everything I know about web dev there, starting from pure Javascript, ending by creating APIs from scratch, designing databases and connecting all of them to a single web app."
            />
            <ResumeItem
              position="Python Beginners Course"
              timeline="(Jul 2022 - Aug 2022)"
              place="Stepik"
              description="Here is the place where my coding journey started, from good old Python."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
