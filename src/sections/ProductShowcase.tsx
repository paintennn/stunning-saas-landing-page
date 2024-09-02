import productImage from "@/assets/product-image.png";
import Image from "next/image";
import prymidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";

export const ProductShowcase = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
        <div className="container">
          <div className="max-w-[540px] mx-auto">
            <div className="flex justify-center">
              <div className="tag">Boost Your Productivity</div>
            </div>
            <h2 className="mt-5 section-title">
              A more Effective way to track products.
            </h2>
            <p className="mt-5 section-description">
              Effortlessly turn your ideas into a fully functional, responsive ,
              SaaS website in just minutes with this template.
            </p>
          </div>
          <div className="relative">
            <Image src={productImage} alt="Product Image" className="mt-10" />
            <Image
              src={prymidImage}
              height={262}
              width={262}
              alt="Prymid Image"
              className="hidden md:block absolute -right-36 -top-32"
            />
            <Image
              src={tubeImage}
              height={262}
              width={262}
              alt="Tube Image"
              className="hidden md:block absolute -left-40 bottom-24"
            />
          </div>
        </div>
      </section>
    </>
  );
};
