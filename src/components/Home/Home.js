import React from "react";
import Number from "./Number";

function Home() {
  return (
    <>
    <section className=" text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Scale Up Your Business <br className="md:hidden" /> with Our Digital
          Expertise
        </h1>
        <p className="text-lg mb-8">
          We empower businesses to thrive in the digital world through
          innovative solutions and cutting-edge technologies.
        </p>
        <button className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-500 hover:text-white transition duration-300">
          Get in Touch
        </button>
      </div>
    </section>

    <Number/>
    </>
  );
}

export default Home;
