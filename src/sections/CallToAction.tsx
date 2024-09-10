import ArrowRight from "@/assets/arrow-right.svg";
import StarImage from "@/assets/star.png";
import SpringImage from "@/assets/spring.png";
import Image from "next/image";
export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF]">
      <div className="container">
        <div className="relative">
          <h2 className="section-title">Sign up for Free Today!</h2>
          <p className="section-description mt-5">
            celebrate the joy of accomplishment with an app designed to track
            your progress and motivates your efforts.
          </p>
          <Image
            src={StarImage}
            alt="Star Image"
            width={360}
            className="absolute lg:-left-[350px]"
          />
          <Image
            src={SpringImage}
            alt="Star Image"
            width={360}
            className="hidden absolute "
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
