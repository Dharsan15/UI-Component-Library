import React, { useRef } from "react";

const PinInput = () => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length > 0) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      if (index > 0 && e.nativeEvent.inputType === "deleteContentBackward") {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="flex gap-x-3">
      {[...Array(4)].map((_, index) => (
        <input
          key={index}
          type="text"
          ref={(el) => (inputRefs.current[index] = el)}
          className="block w-[50px] h-[50px] text-center border border-indigo-600 rounded-md text-indigo-600 text-lg focus:border-indigo-600 focus:ring-indigo-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-indigo-600 dark:text-indigo-600 dark:placeholder-neutral-500 dark:focus:ring-indigo-600"
          placeholder="⚬"
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default PinInput;
