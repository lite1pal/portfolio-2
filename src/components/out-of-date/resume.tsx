import SectionTitle from "@/components/out-of-date/sectionTitle";
import AdjustIcon from "@mui/icons-material/Adjust";
import SchoolIcon from "@mui/icons-material/School";
import SectionHeader from "./sectionHeader";

export default function Resume() {
  return (
    <div
      className={`flex flex-col items-center gap-10 transition duration-700`}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <SectionTitle>Resume</SectionTitle>
        <SectionHeader>I Worked For Some Awesome Companies</SectionHeader>
      </div>
      <div className="flex w-full flex-col gap-10 px-8 sm:w-fit md:p-0 lg:flex-row lg:gap-5">
        <div className="flex h-fit flex-col gap-7 lg:px-2">
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
              type="education"
              position="Bachelor of Computer Engineering"
              timeline="( Sep 2020 - Present )"
              place="Navional Aviation University in Ukraine"
              description="Pursuing my computer engineering studies and at the same time getting my hands dirty in the web development world."
            />
            <ResumeItem
              type="education"
              position="Back-end Engineering Certification"
              timeline="( Dec 2022 - May 2023 )"
              place="Codecademy"
              description="Learned almost everything I know about web dev there, starting from pure Javascript, ending by creating APIs from scratch, designing databases and connecting all of them to a single web app."
            />
            <ResumeItem
              type="education"
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

function ResumeItem({
  position,
  timeline,
  place,
  description,
  type = "experience",
}: {
  position: string;
  timeline: string;
  place: string;
  description: string;
  type?: "experience" | "education";
}) {
  return (
    <div className="group flex w-full gap-5 rounded-lg p-6 transition duration-300 hover:cursor-pointer hover:bg-slate-300 hover:bg-opacity-20 hover:!opacity-100 lg:group-hover/list:opacity-20 dark:hover:bg-transparent">
      {/* <div className="h-5 min-h-5 w-5 min-w-5 rounded-full bg-emerald-400"></div> */}
      <div className="dark:text-primary-dark text-primary">
        {type === "education" ? <SchoolIcon /> : <AdjustIcon />}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3 md:gap-0.5">
          <div className="flex flex-col md:flex-row md:items-center md:gap-3">
            <div className="dark:group-hover:text-primary-dark text-lg font-medium text-slate-900 transition group-hover:text-primary dark:text-slate-50">
              {position}
            </div>
            <div className="text-sm text-slate-500">{timeline}</div>
          </div>
          <div className=" text-slate-900 dark:text-slate-50">{place}</div>
        </div>
        <div className="text-sm text-slate-500 lg:w-96 dark:font-light dark:text-slate-400">
          {description}
        </div>
      </div>
    </div>
  );
}
