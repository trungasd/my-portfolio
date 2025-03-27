//src/app/page.tsx

import About from "@/components/about";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main id="home" className="flex flex-col items-center px-4">
      <Hero/>
      <About/>
      <Skills/>
      <Experiences/>
      <Projects/>
      <Contact/>
    </main>
  );
}
