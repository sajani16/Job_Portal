import React from "react";
import Hero from "../components/home/Hero";
import CTA from "../components/home/CTA";
import About from "../components/home/About";
import PopularJobs from "../components/home/PopularJobs";

function Home() {
  return (
    <div>
      <Hero />
      <CTA />
      <About />
      <PopularJobs />
    </div>
  );
}

export default Home;
