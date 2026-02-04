import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-[#0B1F3A] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to land your next internship?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Apply to verified internships and jobs from trusted companies. Create
          your profile once and apply with ease.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="bg-white text-[#0B1F3A] px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </Link>

          <Link
            to="/jobs"
            className="border border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#0B1F3A] transition"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
