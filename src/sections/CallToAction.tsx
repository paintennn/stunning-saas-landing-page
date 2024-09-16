"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const TranslateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip"
    >
      <div className="container">
        <div className="relative">
          <h2 className="section-title">Sign up for Free Today!</h2>
          <p className="section-description mt-5">
            celebrate the joy of accomplishment with an app designed to track
            your progress and motivates your efforts.
          </p>
          <motion.img
            src={StarImage.src}
            alt="Star Image"
            width={360}
            className="hidden md:block absolute -top-[137px] -left-[350px]"
            style={{ translateY: TranslateY }}
          />
          <motion.img
            src={SpringImage.src}
            alt="Star Image"
            width={360}
            className="hidden md:block -top-[19x] -right-[337px] absolute "
            style={{ translateY: TranslateY }}
          />
        </div>
        <div className="flex justify-center gap-6 mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text border">
            <span>Learn more</span> <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
