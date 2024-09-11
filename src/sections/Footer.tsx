import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute ">
          <Image src={logo} alt="SaaS Logo" height={40} className="relative" />
        </div>
        <nav className="md:flex-row md:justify-center flex flex-col gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialPin /> <SocialX />
          <SocialInsta /> <SocialYoutube /> <SocialLinkedin />
        </div>
        <p className="mt-6">&copy 2024 Company, Inc. All right reserved.</p>
      </div>
    </footer>
  );
};
