import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for slight tint */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-20 px-4 w-full flex">
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B1F3A] leading-tight">
            Launch Your Career With The Right Internship
          </h1>

          <p className="mt-5 max-w-xl text-[#0B1F3A]">
            Explore curated internships and entry-level roles from trusted
            companies. Apply with confidence and gain real-world experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0B1F3A] text-white px-7 py-3 rounded-md hover:opacity-90 transition">
              Browse Internships
            </button>

            <button className="border border-[#0B1F3A] text-[#0B1F3A] px-7 py-3 rounded-md hover:bg-[#0B1F3A] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
        {/* Right side left empty for background image */}
      </div>
    </section>
  );
};

export default Hero;
