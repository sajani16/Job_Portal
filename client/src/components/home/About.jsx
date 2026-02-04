import React from "react";
import { Laptop, Smartphone, Brush, Search } from "lucide-react";

const servicesData = [
  {
    title: "Verified Internships",
    description:
      "Find curated internships that match your skills and career goals.",
    icon: <Laptop className="w-8 h-8 text-[#0B1F3A]" />,
  },
  {
    title: "Career Guidance",
    description:
      "Get guidance and tips to improve your profile and applications.",
    icon: <Smartphone className="w-8 h-8 text-[#0B1F3A]" />,
  },
  {
    title: "Skill Development",
    description:
      "Access resources and learning opportunities to enhance your skills.",
    icon: <Brush className="w-8 h-8 text-[#0B1F3A]" />,
  },
  {
    title: "Company Insights",
    description:
      "Learn about companies before applying to make informed decisions.",
    icon: <Search className="w-8 h-8 text-[#0B1F3A]" />,
  },
];

const About = () => {
  return (
    <section className="py-16 bg-white">
      {/* Section Heading with lines */}
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center mb-16">
        <div className="flex-1 h-[1.5px] bg-[#FFD700]"></div>
        <h2 className="px-6 text-4xl font-bold text-[#0B1F3A]">Our Features</h2>
        <div className="flex-1 h-[1.5px] bg-[#FFD700]"></div>
      </div>

      {/* Grid of features */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center text-center hover:shadow-xl transition rounded-lg border border-gray-100"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-[#FFD700]/20">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#0B1F3A] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700 text-md">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
