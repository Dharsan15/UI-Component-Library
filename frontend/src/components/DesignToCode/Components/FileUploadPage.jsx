import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

import "../../custom-prism-theme.css";

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

const LoadingModal = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
    <div className="flex items-center justify-center space-x-2">
      <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
      <span className="text-white text-lg">Your Code is Being Generated...</span>
    </div>
  </div>
);

const FileUpload = () => {
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const [isCodeGenerated, setIsCodeGenerated] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);
  const editorRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileSize((file.size / 1024 / 1024).toFixed(2));
    }
  };

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    if (!fileInputRef.current.files[0]) return;

    const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });

      setIsCodeGenerated(true);
      setGeneratedCode(response.data.result);

      setFileName(null);
      setFileSize(null);
      setUploadProgress(0);
      setUploadError(null);

      if (editorRef.current) {
        editorRef.current.scrollTop = 0;
      }
    } catch (error) {
      console.error("Error uploading data:", error);
      setUploadError("Error uploading file. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isCodeGenerated && editorRef.current) {
      editorRef.current.scrollTop = 0;
    }
  }, [isCodeGenerated]);

  return (
    <>
      {isLoading && <LoadingModal />}
      <div className="flex w-full h-full items-center justify-center">
        {isCodeGenerated && (
          <div className="flex w-full my-5 mx-5  ">
            {" "}
            <div className="w-full  bg-black p-4 rounded-md shadow-lg">
              <div ref={editorRef} className="overflow-y-auto max-h-[90vh]">
                <Editor
                  value={generatedCode}
                  padding={23}
                  highlight={(code) => highlight(code, languages.js, "javascript")}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 15,
                    backgroundColor: "#000",
                    color: "#fff",
                    lineHeight: 1.5,
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <div className={` ${isCodeGenerated ? "hidden" : ""} flex w-full h-full items-center justify-center`}>
          <div className="bg-gray-100 rounded-lg shadow-md p-6 w-[450px]">
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

            <div
              className="border-2 border-dashed border-gray-300 rounded-md p-8 mt-4 flex flex-col items-center justify-center"
              onClick={handleChooseFileClick}
            >
              {uploadIcon}
              <p className="text-gray-500 text-sm mt-2">
                Drag and Drop file here or <span className="text-blue-500 cursor-pointer underline">Choose file</span>
              </p>
              <input type="file" className="hidden" onChange={handleFileChange} ref={fileInputRef} />
            </div>

            <div className="mt-4 flex justify-between text-xs text-gray-500">
              <p>Supported formats: JPG,PNG,WEBPG</p>
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
                  ></svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{fileName}</p>
                    <p className="text-xs text-gray-500">{fileSize} MB</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500">{uploadProgress}%</p>
                  <button className="ml-2 text-gray-400 hover:text-gray-600" onClick={() => setFileName(null)}>
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

            {uploadError && <div className="mt-4 text-red-500 text-xs">{uploadError}</div>}

            <div className="mt-6 flex justify-end space-x-4">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                ></svg>
              </a>
              <button
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                onClick={() => {
                  setFileName(null);
                  setFileSize(null);
                  setUploadProgress(0);
                  setUploadError(null);
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
                onClick={handleUpload}
              >
                Get Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
