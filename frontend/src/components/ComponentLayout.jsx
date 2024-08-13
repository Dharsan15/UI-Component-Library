import React from "react";
import { RxButton } from "react-icons/rx";

function ComponentLayout(props) {
  return (
    <div className="bg-gray-50 border cursor-pointer border-gray-300 h-[200px] w-2xl flex items-center justify-center  rounded-lg max-w-3xl m-5 sm:m-14">
      <button>
        {/* <RxButton className=" text-blue-700 h-full font-bold w-full" /> */}
        <h1 className=" text-gray-600 font-bold text-xl"> {props.title} </h1>
      </button>
    </div>
  );
}

export default ComponentLayout;
