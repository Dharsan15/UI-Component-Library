import React, { useRef, useState } from "react";

const uploadIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const FileUpload = () => {
  const [fileName, setFileName] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);
    // Implement file upload logic here
  };

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex w-full h-full items-center justify-center" >
      <div className="bg-white  rounded-lg shadow-md p-6 w-[450px]">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-medium text-gray-900">Upload file</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="border-2 border-dashed border-gray-300 rounded-md p-8 mt-4 flex flex-col items-center justify-center">
          {uploadIcon}
          <p className="text-gray-500 text-sm mt-2">
            Drag and Drop file here or{" "}
            <span className="text-blue-500 cursor-pointer underline" onClick={handleChooseFileClick}>
              Choose file
            </span>
          </p>
          <input type="file" className="hidden" onChange={handleFileChange} ref={fileInputRef} />
        </div>

        <div className="mt-4 flex justify-between text-xs text-gray-500">
          <p>Supported formats: XLS, XLSX</p>
          <p>Maximum size: 25MB</p>
        </div>

        {fileName && (
          <div className="mt-4 bg-gray-100 rounded-md p-3 flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#22C55E"
                className="w-4 h-4 mr-2"
              >
                {/* Replace with your preferred Excel icon SVG code */}
              </svg>
              <div>
                <p className="text-sm font-medium text-gray-900">{fileName}</p>
                <p className="text-xs text-gray-500">3 MB</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
              </div>
              <p className="text-xs text-gray-500">{uploadProgress}%</p>
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end space-x-4">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              {/* Replace with your preferred question mark icon SVG code */}
            </svg>
            Help Center
          </a>
          <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none">
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
