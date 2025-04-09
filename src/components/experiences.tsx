"use client";

import { experiencesData } from "@/lib/data";

const Experiences = () => {
  return (
    <section id="experiences" className="mb-28 text-center scroll-mt-24 py-16">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Experience</h2>
        
        <div className="relative border-l border-gray-300 dark:border-gray-600 ml-6">
          {experiencesData.map((exp) => (
            <div key={exp.id} className="mb-10 ml-6">
              <div className="absolute -left-6 flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md">
                <exp.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <div className="bg-white dark:bg-gray-900 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <p className="text-gray-500 text-sm">{exp.location}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{exp.description}</p>
                <span className="block mt-3 text-sm text-gray-400">{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
