import Image from "next/image";
import portrait from "@/images/chandung.jpg";
const Hero = () => {
  return (
    <section id="hero" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-24 py-16">

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
        I am a passionate frontend developer with a strong focus on building
        interactive and user-friendly web applications. I specialize in React,
        Next.js, and modern web technologies.
      </p>

      {/* Buttons */}
      <div className="items-center justify-center mt-4 mb-10  px-10">
        <a
          href="/CV-HoHuynhTrung-GameDeveloper.pdf"
          download
          className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};
export default Hero;
