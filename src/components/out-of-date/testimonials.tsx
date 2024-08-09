import SectionTitle from "@/components/out-of-date/sectionTitle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import SectionParagraph from "@/components/sectionParagraph";
import Span from "@/components/out-of-date/span";
import SectionHeader from "./sectionHeader";

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <SectionTitle>Testimonials</SectionTitle>
        <SectionHeader>Trusted By The Best Clients</SectionHeader>
        <SectionParagraph>
          Delivering the highest-quality work for my clients is what makes me
          learn everyday. <Span>Their trust keeps me moving forward</Span>
        </SectionParagraph>
      </div>
      <svg
        className="dark:text-primary-dark mx-auto h-16 w-16 text-primary"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <Swiper
        modules={[Pagination, Navigation]}
        className="w-full xl:w-3/4"
        style={
          {
            // width: "100%",
            paddingBottom: "3rem",
            "--swiper-pagination-color": "rgb(52 211 153)",
            "--swiper-pagination-bullet-inactive-color": "gray",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "9px",
            "--swiper-pagination-bullet-horizontal-gap": "9px",
            "--swiper-navigation-color": "rgb(52 211 153)",
          } as any
        }
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Testimonial
            testimonial="Great programmer! What I was most worried about was that the new person
        would write in the same structure as us, and there were no problems with
        that. Let's continue our work. I'm glad I chose him."
            company="CarLink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            testimonial="We continue to work further. I'm glad I chose Denis. We will have more projects"
            company="Covin"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            testimonial="This is our third time working. Everything is great! I will start new projects with this programmer."
            company="CarLink"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial
            testimonial="Denis did greate job! Thank you!"
            company="Wadah Watsfi"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function Testimonial({
  testimonial,
  company,
}: {
  testimonial: string;
  company: string;
}) {
  return (
    <div className="flex flex-col items-center gap-9">
      <a
        target="_blank"
        href="https://www.linkedin.com/posts/denis-tarasenko-39bb44256_see-how-i-can-get-your-project-done-on-upwork-activity-7128743786175676417-RTZj?utm_source=share&utm_medium=member_desktop"
        className="mx-auto w-2/3 text-center text-lg italic text-slate-500 dark:text-slate-50"
      >
        {testimonial}
      </a>
      <div className="flex items-center gap-2.5">
        {/* <Avatar sx={{ bgcolor: "rgb(52 211 153)" }} /> */}
        {/* <div className="h-12 w-12 rounded-full">
          <img
            className="rounded-full"
            src="https://iamjamessmith.xyz/assets/img/testimonials/Guy06.jpg"
          />
        </div> */}
        <div className="dark:text-primary-dark text-primary">
          <AccountCircleIcon fontSize="large" />
        </div>
        <div className="space-y-1 text-slate-900 dark:text-slate-100">
          <div>{company}</div>
          {/* <div className="text-sm text-gray-500 dark:text-gray-400">
            25.10.2023
          </div> */}
        </div>
      </div>
    </div>
  );
}
