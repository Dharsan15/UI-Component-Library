import React, { useContext } from "react";
import { FaCode, FaFolderOpen, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { userContext } from "../../UserContext/UserContext";

const WelcomePage = () => {
  const { userName } = useContext(userContext);

  return (
    <div>
      <h1 className="text-4xl ml-48 mt-16 md:text-6xl font-bold  mb-8">
        Welcome ,{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          {userName}
        </span>
      </h1>
      <div className="min-h-screen ml-36 mt-28 bg-gradient-to-r  p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-4xl">
          <Link to="/designtocode/upload">
            <button className="w-[250px] h-[180px] p-8 flex flex-col items-center bg-gray-300 bg-opacity-20 p-6 rounded-lg shadow-lg">
              <FaCode className="text-4xl text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold ">Generate Code</h2>
            </button>
          </Link>
          <div className="flex flex-col text-center   items-center justify-center bg-gray-300 bg-opacity-20 p-6 rounded-lg shadow-lg">
            <FaFolderOpen className="text-4xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold ">Organize Your Components</h2>
          </div>
          <div className="flex flex-col items-center bg-gray-300 bg-opacity-20 p-6 rounded-lg shadow-lg">
            <FaProjectDiagram className="text-4xl text-blue-600 mb-4" />
            <h2 className="text-2xl font-semibold ">Your Projects</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
