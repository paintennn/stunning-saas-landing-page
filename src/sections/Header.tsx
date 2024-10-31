import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";
export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 ">
      {/* <div className="flex justify-center gap-2 items-center py-3 bg-black text-white">
        <p className="text-white/60 hidden md:block">
          Streamline/ Automize your workflow and boost your productivity
        </p>

        <div className="flex justify-center items-center gap-1">
          <p className="font-semibold">Get Started for Free!</p>
          <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
        </div>
      </div> */}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src={Logo}
                alt="SaaS landing Page Logo"
                width={40}
                height={40}
              ></Image>
            </Link>

            <MenuIcon className="w-4 h-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <Link href="/about">About</Link>
              <Link href="">Features</Link>
              <Link href="">Customers</Link>
              <Link href="">Updates</Link>
              <Link href="">Help</Link>
              <button className="btn btn-primary">Get for Free!</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
