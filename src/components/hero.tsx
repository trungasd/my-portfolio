import Image from "next/image";
import portrait from "@/images/chandung.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-24 py-16"
    >
      <div className="flex items-center justify-center">
        <Image
          src={portrait}
          alt="Profile Picture"
          className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
        />
      </div>
      <h2 className="text-5xl font-bold text-gray-800 mt-4 mb-10  px-10">
        Hello, I am <span className="text-black">Trung</span>.
      </h2>
      <p className="text-2xl font-normal text-gray-600 mt-4 mb-10  px-10">
        Welcome to my portfolio! This is where I share my journey into
        development, including my skills, projects, and what I've learned along
        the way.
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-center mt-4 mb-10  px-10">
        <a
          href="/CV-HoHuynhTrung-GameDeveloper.pdf"
          download
          className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md"
        >
          Download CV
        </a>
        <a
          href="https://www.facebook.com/huynhtrunq.1711"
          className="p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/huynhtrung03/"
          className="p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </section>
  );
};
export default Hero;
