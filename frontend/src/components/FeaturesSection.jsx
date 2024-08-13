import React from "react";
import { FaCogs, FaCode, FaFileAlt } from "react-icons/fa"; // Import icons from react-icons

function FeaturesSection() {
  return (
    <div>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[510px] text-center lg:mb-20">
                <h2 className="text-indigo-600 mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                  What We Offer
                </h2>
              </div>
            </div>
          </div>
          <div className="mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 h-460  rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <FaCogs className="text-indigo-600 text-4xl" /> {/* UI-Components Icon */}
                </div>
                <h4 className="text-dark mb-[14px] text-2xl font-semibold">UI-Components</h4>
                <p className="text-[20px] text-body-color">Completely Customizable ready to use react Components</p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <FaCode className="text-indigo-600 text-4xl" /> {/* Design To Code Icon */}
                </div>
                <h4 className="text-dark mb-[14px] text-2xl font-semibold">Design To Code</h4>
                <p className="text-[20px] text-body-color">
                  Convert your Components from Design to Code in few seconds
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10">
                <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                  <FaFileAlt className="text-indigo-600 text-4xl" /> {/* Templates Icon */}
                </div>
                <h4 className="text-dark mb-[14px] text-2xl font-semibold">Templates</h4>
                <p className="text-[20px] text-body-color">Readly available complete website templates</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesSection;
