"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Vudayana Chaitanya Kumar, a passionate and dedicated <span className="underline">Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at VIT-AP University</span>. With strong proficiency in Java, web development, and problem-solving, I enjoy building projects that make an impact. I have hands-on experience in <span className="underline">full-stack development, machine learning, and computer vision</span>, along with a solid foundation in <span className="underline">data structures and algorithms</span>.
      </p>

      <p>
      My diverse background having lived in multiple states across India like <span className="underline">Jammu, Karnataka, Rajasthan, Andhra pragesh and New Delhi</span> - has given me the ability to adapt and collaborate with people from various cultures. Outside of academics and work, I enjoy playing badminton, swimming, and creating engaging promotional videos. I’m always eager to learn, explore new technologies, and contribute to innovative solutions.
      </p>
    </motion.section>
  );
}
