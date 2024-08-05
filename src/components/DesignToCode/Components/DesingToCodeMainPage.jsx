import React, { useState } from "react";

const DesignToCodeMainPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    // Update uploadProgress state during upload
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold">Upload file</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            {/* Replace with actual close icon path */}
            <path
              fillRule="evenodd"
              d="..." // Add close icon path here
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className="border-2 border-dashed border-gray-300 rounded-md p-8 mt-6 flex flex-col items-center justify-center relative"
        style={{ minHeight: "200px" }} // Adjust height as needed
      >
        {selectedFile ? (
          <>
            <div className="flex items-center">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/excel-282055.png" // Replace with actual Excel icon URL
                alt="File Icon"
                className="h-8 w-8 mr-2"
              />
              <span className="font-medium">{selectedFile.name}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
            </div>
            <span className="text-sm text-gray-500 mt-2">{uploadProgress}%</span>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Replace with actual upload icon path */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="..." // Add upload icon path here
              />
            </svg>
            <p className="text-gray-500 mt-2">
              Drag and Drop file here or <span className="text-blue-500 underline cursor-pointer">Choose file</span>
            </p>
          </>
        )}
        <input type="file" className="hidden" id="file-upload" onChange={handleFileChange} />
      </div>

      <p className="text-sm text-gray-500 mt-4">Supported formats: XLS, XLSX</p>
      <p className="text-sm text-gray-500 text-right mt-4">Maximum size: 25MB</p>

      {selectedFile && (
        <div className="flex justify-end mt-6">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium py-2 px-4 rounded-md mr-2"
            onClick={() => setSelectedFile(null)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
            onClick={handleUpload}
          >
            Next
          </button>
        </div>
      )}
      <p className="text-xs text-gray-400 mt-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline-block mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* Replace with actual help icon path */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="..." // Add help icon path here
          />
        </svg>
        Help Center
      </p>
    </div>
  );
};

export default DesignToCodeMainPage;
