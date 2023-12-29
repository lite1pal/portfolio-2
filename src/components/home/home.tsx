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
import { AnimatePresence, motion } from "framer-motion";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: "30%" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5 }}
        >
          <Skills />
        </motion.div>
      </AnimatePresence>
      <AboutMe />
      <Resume />
      <Services />
      <Testimonials />
    </div>
  );
}
