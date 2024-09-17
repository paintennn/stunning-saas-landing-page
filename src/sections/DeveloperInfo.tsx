"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export const DeveloperInfo = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20 ">
      <div className="flex justify-center gap-2 items-center py-3 bg-black text-white">
        <div className="flex text-lg font-bold justify-center items-center gap-1">
          <Link
            href={"http://www.github.com/gen-ai-developer"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span
              animate={{ backgroundPositionX: "-100%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 4,
                repeatType: "loop",
              }}
              className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text text-2xl"
            >
              The Genius Behind the Screen
            </motion.span>
          </Link>
        </div>
      </div>
    </header>
  );
};
