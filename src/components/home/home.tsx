"use client";

import Button from "@/components/base/button";
import Navbar from "@/components/layouts/components/navbar";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import Testimonial from "../base/testimonial";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Testimonials from "./components/testimonials";
import Resume from "./components/resume";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Skills />
      <AboutMe />
      <Resume />
      <Testimonials />
    </div>
  );
}
