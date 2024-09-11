"use Client";
import ArrowIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Image from "next/image";
import CylinderIamge from "@/assets/cylinder.png";
import NoddleImage from "@/assets/noodle.png";
import * as motion from "framer-motion";
export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter  bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 mb-2">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accoumplishment with an app designed to track
              your progress, motivate your efforts, and celebrtae your sucess.
            </p>
            <div className="flex gap-3 items-center mt-[30px]">
              <button className="btn btn-primary md:px-3 py-2">
                Get for Free
              </button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:h-[648px] md:mt-0 md:flex-1 relative">
            <motion.
              className="hidden md:block -top-8  -left-32 md:absolute"
              src={CylinderIamge.src}
              alt="Cylinder Image over the Cog Image in hero Section of the landing page"
              height={220}
              width={220}
            />
            <Image
              src={CogImage}
              alt="Cog Image"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            />
            <Image
              src={NoddleImage}
              height={220}
              width={220}
              alt="noddle image in hero section of landing page"
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
