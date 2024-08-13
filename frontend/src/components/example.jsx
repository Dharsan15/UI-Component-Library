import React from "react";

const Example = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-8 w-[400px]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign Up</h2>
      <p className="text-gray-600 mb-6">Let's get started with your 30 days free trial</p>

      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input type="text" id="name" className="mt-1 p-2.5 w-full border rounded-md focus:ring focus:ring-blue-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2.5 w-full border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              className="mt-1 p-2.5 w-full border rounded-md focus:ring focus:ring-blue-300 pr-10"
            />
            <span className="absolute inset-y-0 right-3 flex items-center">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md w-full"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Already have an account?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Log In
        </a>
      </p>

      <div className="flex items-center justify-center mt-6">
        <div className="h-px bg-gray-200 w-full"></div>
        <span className="text-gray-400 px-3 text-sm">or</span>
        <div className="h-px bg-gray-200 w-full"></div>
      </div>

      <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-2.5 px-4 rounded-md w-full flex items-center justify-center mt-4">
        {/* Replace with actual Google icon CDN link */}
        <img
          src="https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" // Replace with Google icon CDN
          alt="Google logo"
          className="h-5 w-5 mr-2"
        />
        Sign up with Google
      </button>

      <p className="text-xs text-gray-500 mt-4 text-center">
        By signing up to create an account I accept Company's{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
};

export default Example;
