import React, { useState } from "react";
import { BasicButtons } from "./showcase/components/Buttons";
import { LuClipboard } from "react-icons/lu";
import { BiCheck } from "react-icons/bi";

function Preview(props) {
  return (
    <div
      className="bg-white
           rounded-lg  flex items-center justify-center  min-h-[350px] border  border-gray-300"
    >
      {props.component}
    </div>
  );
}

function ShowCaseLayout(props) {
  const [CodeOrPreview, setCodeOrPreview] = useState({
    code: false,
    preview: true,
  });

  const selectCode = () => {
    setCodeOrPreview({
      code: true,
      preview: false,
    });
  };

  const selectPreview = () => {
    setCodeOrPreview({
      code: false,
      preview: true,
    });
  };

  return (
    <>
      <div className={`${props.classes} mr-20  ml-60 `}>
        <h1 className="font-bold text-4xl text-black"> {props.maintitle} </h1>
        <h1 className="text-black text-2xl text-black mt-20"> {props.title} </h1>
        <div className="mt-10 flex gap-8 mb-3">
          <button
            onClick={selectPreview}
            className={`${
              CodeOrPreview.preview ? "text-blue-500  border-b-2  border-b-blue-500" : "text-gray-400"
            }  p-2 `}
          >
            {" "}
            Preview{" "}
          </button>
          <button
            onClick={selectCode}
            className={`${CodeOrPreview.code ? "text-blue-500 border-b-2 border-b-blue-500" : "text-gray-400"} p-2 `}
          >
            {" "}
            Code{" "}
          </button>
        </div>

        {CodeOrPreview.code ? props.code : <Preview component={props.component} />}
      </div>
    </>
  );
}

export { Preview };
export default ShowCaseLayout;
