"use client";

import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Skills from "./components/skills";
import "swiper/css";
import "swiper/css/pagination";
import Testimonials from "./components/testimonials";
import Resume from "./components/resume";
import { AnimatePresence, motion } from "framer-motion";
import Services from "./components/services";
import ContactForm from "./components/contactForm";
import Portfolio from "./components/portfolio";
import SocialMediaIcons from "../base/socialMediaIcons";
import { usePDF } from "react-to-pdf";

export default function Home() {
  const { toPDF, targetRef } = usePDF({ filename: "cv.pdf" });
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
      <div ref={targetRef} className="flex flex-col gap-24">
        <AboutMe {...{ toPDF }} />
        <Resume />
        <Portfolio />
      </div>
      <Services />
      <Testimonials />
      <ContactForm />
      <SocialMediaIcons />
    </div>
  );
}
