import { aboutData } from "@/lib/data";

const About = () => {
  return (
    <section
      id="about"
      className="mb-28 text-center scroll-mt-24 py-16"
    >
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">About Me</h2>
        {aboutData.map((about, index) => (
          <div
            key={index}
            className="text-lg italic text-gray-600 mb-5 px-10"
          >{about}</div>
        ))}
      </div>
    </section>
  );
};

export default About;
