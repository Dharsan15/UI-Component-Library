import React from "react";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-br from-white to-[#f2f8fd] min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold">
          Create an online <span className="text-[#2563EB]">form</span> in{" "}
          <span className="text-[#0EA5E9]">minutes</span>.
        </h1>
        <p className="text-gray-600 mt-8">
          Forms are <span className="text-orange-500">complex</span> and{" "}
          <span className="text-red-500">time-consuming</span> to create and integrate. <br /> We make it{" "}
          <span className="text-green-500">easy</span> to create them and <span className="text-[#2563EB]">embed</span>{" "}
          it into your website in minutes.
        </p>
        <div className="mt-12">
          <p className="text-gray-600">Get notified when we launch and get a free early access. 🐥</p>
          <div className="flex items-center justify-center mt-6">
            <input
              type="email"
              placeholder="Enter your email..."
              className="border border-gray-300 rounded-l-md py-2 px-4 w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-[#2563EB] text-white rounded-r-md py-2 px-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Join the waitlist ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
