import React from 'react'
import Reasons from './Reasons';

function WhatweOffer() {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h4 className="text-indigo-600 text-lg font-semibold uppercase tracking-wider">
              What We Offer
            </h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Giving Your Business Some Great Ideas
            </h1>
            <button className="mt-8 bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
              View Services
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-gray-300 rounded-lg shadow-lg p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4">01</h3>
              <hr className="border-t-2 border-gray-300 my-4" />
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                Web Development
              </h1>
              <p className="text-gray-700 mb-2">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>{" "}
                Front End
              </p>
              <p className="text-gray-700 mb-2">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>{" "}
                Back End
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg shadow-lg p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4">02</h3>
              <hr className="border-t-2 border-gray-300 my-4" />
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                App Development
              </h1>
              <p className="text-gray-700 mb-2">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>{" "}
                IOS and Android Application
              </p>
              <p className="text-gray-700 mb-2">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>{" "}
                App Publishing
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg shadow-lg p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4">03</h3>
              <hr className="border-t-2 border-gray-300 my-4" />
              <h1 className="text-xl md:text-2xl font-bold mb-4">Design</h1>
              <p className="text-gray-700 mb-2">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>{" "}
                UI/UX design
              </p>
              <p className="text-gray-700 mb-2">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>{" "}
                IOS and Android Design
              </p>
              <p className="text-gray-700 mb-2">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>{" "}
                Branding
              </p>
            </div>
            <div className="border border-gray-300 rounded-lg shadow-lg p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4">04</h3>
              <hr className="border-t-2 border-gray-300 my-4" />
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                Integrated DevOps Solution
              </h1>
              <p className="text-gray-700 mb-2">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>{" "}
                DevOps
              </p>
              <p className="text-gray-700 mb-2">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>{" "}
                Third Party Integration
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <hr className="border-t-2 border-gray-300 mb-8" />
        <div className="container mx-auto flex flex-col items-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Ready to move forward and get results?
            </h2>
          </div>
          <button className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
            Get in Touch
          </button>
        </div>
        <hr className="border-t-2 border-gray-300 mt-8" />
      </section>

      <Reasons/>
    </>
  );
}

export default WhatweOffer