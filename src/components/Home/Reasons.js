import React from 'react'
import { FaHandshake } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaAccessibleIcon } from "react-icons/fa";
import { FaTransgender } from 'react-icons/fa'; // You can replace 'FaTransgender' with any other icon you prefer

function Reasons() {
  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-500">What we offer</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Reasons to work with OzTech
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Trustworthy
              </h3>
              <p className="text-gray-600">
                Our trust is verified by big players in the market. Thanks to
                our certified clients who recommend us, we became a regional and
                global specialist in providing outsource solutions in web and
                mobile development.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHeart className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Care
              </h3>
              <p className="text-gray-600">
                We always follow the latest updates in the IT industry and
                implement them into our solutions, which are fully scalable and
                easily extendable. Everything is precisely documented so you can
                freely continue improving it on your own in the future.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaAccessibleIcon className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Transparency
              </h3>
              <p className="text-gray-600">
                By splitting your projects into smaller pieces, you have the
                opportunity to follow every single phase of its workflow by
                offering new ideas that will be easily integrated.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaTransgender className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                Individual approach
              </h3>
              <p className="text-gray-600">
                We approach your issues using individually developed stacks of
                technologies for your project's needs. No matter how big your
                challenge is, we're fully focused on delivering the high-quality
                solution as fast as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reasons