import React, { useEffect, useRef } from "react";
import WhatweOffer from "./WhatweOffer";

function Number() {
  const completionRef = useRef(null);
  const softwareRef = useRef(null);
  const rateRef = useRef(null);

  const countUp = (target, start, end, duration) => {
    const range = end - start;
    const increment = (range / duration) * 10;

    let current = start;

    const updateCount = () => {
      current += increment;
      target.textContent = Math.floor(current);

      if (current < end) {
        setTimeout(updateCount, 10);
      } else {
        target.textContent = end;
      }
    };

    updateCount();
  };

  useEffect(() => {
    const completionTarget = completionRef.current;
    const softwareTarget = softwareRef.current;
    const rateTarget = rateRef.current;

    countUp(completionTarget, 0, 100, 2000);
    countUp(softwareTarget, 0, 30, 2000);
    countUp(rateTarget, 0, 97, 2000);
  }, []);

  return (
    <>
      <hr className="border-t-2 border-gray-300 my-8" />
      <section className=" py-20">
        <div className="container mx-auto flex justify-around">
          <div className="text-center">
            <h3
              ref={completionRef}
              className="text-5xl font-bold text-gray-800 mb-2"
            >
              0
            </h3>
            <p className="text-lg text-white">
              Successfully completed projects
            </p>
          </div>
          <div className="text-center">
            <h3
              ref={softwareRef}
              className="text-5xl font-bold text-gray-800 mb-2"
            >
              0
            </h3>
            <p className="text-lg text-white">
              In-house software development specialists
            </p>
          </div>
          <div className="text-center">
            <h3 ref={rateRef} className="text-5xl font-bold text-gray-800 mb-2">
              0
            </h3>
            <p className="text-lg text-white">Customer satisfaction rate</p>
          </div>
        </div>
      </section>
      <hr className="border-t-2 border-gray-300 my-8" />

      <WhatweOffer/>
    </>
  );
}

export default Number;
