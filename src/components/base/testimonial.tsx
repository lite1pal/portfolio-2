import SectionHeader from "./sectionHeader";
import SectionTitle from "./sectionTitle";

interface IProps {
  testimonial: string;
  company: string;
}

export default function Testimonial({ testimonial, company }: IProps) {
  return (
    <div className="flex flex-col items-center gap-9">
      <a
        target="_blank"
        href="https://www.linkedin.com/posts/denis-tarasenko-39bb44256_see-how-i-can-get-your-project-done-on-upwork-activity-7128743786175676417-RTZj?utm_source=share&utm_medium=member_desktop"
        className="mx-auto w-96 text-center text-lg italic text-slate-900 dark:text-slate-50"
      >
        {testimonial}
      </a>
      <div className="flex items-center gap-3.5">
        {/* <Avatar sx={{ bgcolor: "rgb(52 211 153)" }} /> */}
        {/* <div className="h-12 w-12 rounded-full">
          <img
            className="rounded-full"
            src="https://iamjamessmith.xyz/assets/img/testimonials/Guy06.jpg"
          />
        </div> */}
        <div className="space-y-1 font-light text-slate-900 dark:text-slate-100">
          <div>{company}</div>
          {/* <div className="text-sm text-gray-500 dark:text-gray-400">
            25.10.2023
          </div> */}
        </div>
      </div>
    </div>
  );
}
