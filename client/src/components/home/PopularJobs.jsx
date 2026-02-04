import React from "react";

// Dummy data
const jobsData = [
  {
    id: 1,
    companyLogo: "https://via.placeholder.com/80x80?text=Logo1",
    title: "Frontend Developer Intern",
    company: "Tech Solutions",
    timeline: "3 months",
    deadline: "2026-03-15",
  },
  {
    id: 2,
    companyLogo: "https://via.placeholder.com/80x80?text=Logo2",
    title: "Backend Developer Intern",
    company: "Code Labs",
    timeline: "6 months",
    deadline: "2026-03-20",
  },
  {
    id: 3,
    companyLogo: "https://via.placeholder.com/80x80?text=Logo3",
    title: "UI/UX Designer Intern",
    company: "Creative Studio",
    timeline: "4 months",
    deadline: "2026-03-25",
  },
  {
    id: 4,
    companyLogo: "https://via.placeholder.com/80x80?text=Logo4",
    title: "Fullstack Developer Intern",
    company: "InnovateX",
    timeline: "3 months",
    deadline: "2026-04-01",
  },
  {
    id: 5,
    companyLogo: "https://via.placeholder.com/80x80?text=Logo5",
    title: "Marketing Intern",
    company: "Brandify",
    timeline: "2 months",
    deadline: "2026-04-05",
  },
  {
    id: 6,
    companyLogo: "https://via.placeholder.com/80x80?text=Logo6",
    title: "Data Analyst Intern",
    company: "DataHub",
    timeline: "3 months",
    deadline: "2026-04-10",
  },
];

const PopularJobs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-[1.5px] bg-[#FFD700]"></div>
          <h2 className="px-6 text-4xl font-bold text-[#0B1F3A]">
            Popular Jobs
          </h2>
          <div className="flex-1 h-[1.5px] bg-[#FFD700]"></div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobsData.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start"
            >
              {/* Company Logo */}
              <img
                src={job.companyLogo}
                alt={job.company}
                className="w-16 h-16 object-contain mb-4"
              />

              {/* Job Info */}
              <h3 className="text-xl font-semibold text-[#0B1F3A] mb-1">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-1">{job.company}</p>
              <p className="text-gray-500 text-sm mb-1">
                Duration: <span className="font-medium">{job.timeline}</span>
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Apply By: <span className="font-medium">{job.deadline}</span>
              </p>

              {/* Apply button */}
              <button className="mt-auto bg-[#0B1F3A] text-white px-6 py-2 rounded-md hover:bg-[#FFD700] hover:text-[#0B1F3A] transition w-full">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Load more placeholder */}
        <div className="mt-12 flex justify-center">
          <button className="bg-[#FFD700] text-[#0B1F3A] px-8 py-3 rounded-md font-semibold hover:bg-[#0B1F3A] hover:text-white transition">
            Load More Jobs
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularJobs;
