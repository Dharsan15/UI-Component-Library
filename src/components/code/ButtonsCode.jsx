import { LuClipboard } from "react-icons/lu";
import { BiCheck } from "react-icons/bi";
import { useState } from "react";

function BasicButtonsCode() {
  const [clicked, setClicked] = useState(false);

  const code = `<button className="inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all   border border-transparent py-3 text-white bg-blue-500 hover:bg-blue-700 ">
          Default
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all   disabled:pointer-events-none disabled:opacity-50 border-2 border-blue-200 hover:text-white dark:border-gray-700 text-blue-500 hover:border-blue-700 hover:bg-blue-500 ">
          Outlined
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-  dark:focus:ring-offset-zinc-800 disabled:pointer-events-none disabled:opacity-50 border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline text-indigo-500    focus:ring-indigo-500 dark:hover:text-indigo-400">
          Underlined
        </button>`;

  const Clicked = () => {
    setClicked(true);

    navigator.clipboard.writeText(code);

    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <div
      className="bg-black
           text-white  px-8 py-10 rounded-lg  relative   border  border-gray-300"
    >
      <button
        onClick={Clicked}
        className=" inline-flex items-center justify-center whitespace-nowrap absolute top-4 right-4   cursor-pointer "
      >
        {clicked ? <BiCheck className=" bg-black text-white" /> : <LuClipboard className="w-4 h-4" />}
      </button>
      <code
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
        data-language="tsx"
        data-theme="default"
      >
        <span className="text-pink-300">&lt;button</span> <span className="text-green-500">className</span>=
        <span className="text-blue-300">
          &quot;inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all border
          border-transparent py-3 text-white bg-blue-500 hover:bg-blue-700&quot;&gt;
        </span>
        <br />
        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;Default</span>
        <br />
        <span className="text-pink-300">&lt;/button&gt;</span>
        <br />
        <span className="text-pink-300">&lt;button</span> <span className="text-green-500">className</span>=
        <span className="text-blue-300">
          &quot;inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all
          disabled:pointer-events-none disabled:opacity-50 border-2 border-blue-200 hover:text-white
          dark:border-gray-700 text-blue-500 hover:border-blue-700 hover:bg-blue-500&quot;&gt;
        </span>
        <br />
        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;Outlined</span>
        <br />
        <span className="text-pink-300">&lt;/button&gt;</span>
        <br />
        <span className="text-pink-300">&lt;button</span> <span className="text-green-500">className</span>=
        <span className="text-blue-300">
          &quot;inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-
          dark:focus:ring-offset-zinc-800 disabled:pointer-events-none disabled:opacity-50 border border-transparent
          py-3 underline-offset-4 ring-offset-white hover:underline text-indigo-500 focus:ring-indigo-500
          dark:hover:text-indigo-400&quot;&gt;
        </span>
        <br />
        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;Underlined</span>
        <br />
        <span className="text-pink-300">&lt;/button&gt;</span>
        <br />
      </code>
    </div>
  );
}

function ButtonWithIconsCode() {
  const [clicked, setClicked] = useState(false);

  const code = ` <button className="inline-flex  ml-10 items-center justify-center gap-2 rounded-md px-4  font-medium transition-all   border border-blue-400 hover:shadow-lg hover:border-blue-600 py-3 text-white bg-blue-500 ">
        <RiDeleteBinLine className="h-full w-full text-white " />
        DELETE
      </button>

      <button className="inline-flex  ml-10 items-center justify-center gap-2 rounded-md px-4  font-medium transition-all    border border-blue-400 hover:shadow-sm hover:border-blue-700 hover:bg-blue-50 py-3 text-blue-500 bg-white ">
        UPLOAD
        <MdFileUpload className="h-full w-full text-blue-500 " />
      </button>`;

  const Clicked = () => {
    setClicked(true);

    navigator.clipboard.writeText(code);

    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <div
      className="bg-black
           text-white  px-8 py-10 rounded-lg  relative   border  border-gray-300"
    >
      <button
        onClick={Clicked}
        className=" inline-flex items-center justify-center whitespace-nowrap absolute top-4 right-4   cursor-pointer "
      >
        {clicked ? <BiCheck className=" bg-black text-white" /> : <LuClipboard className="w-4 h-4" />}
      </button>
      <code
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
        data-language="tsx"
        data-theme="default"
      >
        <span className="text-red-300">{"{/* This Component requires React-Icons to be installed */}"}</span>
        <br />
        <br />
        <span className="text-pink-300">&lt;button</span> <span className="text-green-500">className</span>=
        <span className="text-blue-300">
          &quot;inline-flex ml-10 items-center justify-center gap-2 rounded-md px-4 font-medium transition-all border
          border-blue-400 hover:shadow-lg hover:border-blue-600 py-3 text-white bg-blue-500&quot;&gt;
        </span>
        <br />
        <span className="text-blue-300">&nbsp;&nbsp;&nbsp;&nbsp;&lt;RiDeleteBinLine</span>{" "}
        <span className="text-green-500">className</span>=
        <span className="text-blue-300">&quot;h-full w-full text-white&quot; /&gt;</span>
        <br />
        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;DELETE</span>
        <br />
        <span className="text-pink-300">&lt;/button&gt;</span>
        <br />
        <br />
        <span className="text-pink-300">&lt;button</span> <span className="text-green-500">className</span>=
        <span className="text-blue-300">
          &quot;inline-flex ml-10 items-center justify-center gap-2 rounded-md px-4 font-medium transition-all border
          border-blue-400 hover:shadow-sm hover:border-blue-700 hover:bg-blue-50 py-3 text-blue-500 bg-white&quot;&gt;
        </span>
        <br />
        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;UPLOAD</span>
        <br />
        <span className="text-blue-300">&nbsp;&nbsp;&nbsp;&nbsp;&lt;MdFileUpload</span>{" "}
        <span className="text-green-500">className</span>=
        <span className="text-blue-300">&quot;h-full w-full text-blue-500&quot; /&gt;</span>
        <br />
        <span className="text-pink-300">&lt;/button&gt;</span>
        <br />
      </code>
    </div>
  );
}

function ButtonsWithAnimationsCode() {
  const [clicked, setClicked] = useState(false);

  const code = `<button className="inline-flex  h-12 ml-10 items-center justify-center gap-2 rounded-md px-4  font-medium transition-all    border border-blue-400  hover:border-blue-700 hover:bg-blue-50 py-3 text-blue-500 bg-white ">
        <AiOutlineLoading3Quarters className="w-5 h-8 animate-spin text-sky-500 mr-2" />
        Loading
      </button>
      <button className="inline-flex h-12 ml-10 items-center justify-center gap-2 rounded-md px-4  font-medium transition ease-in-out delay-150 text-white bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... ">
        Hover Me
      </button>
     <button className="inline-flex h-12 ml-10 items-center animate-bounce  justify-center gap-2 rounded-full bg-blue-500 tex-white px-4  font-medium ">
        <FaArrowDown className="text-white" />
      </button>`;

  const Clicked = () => {
    setClicked(true);

    navigator.clipboard.writeText(code);

    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <div
      className="bg-black
           text-white  px-8 py-10 rounded-lg  relative   border  border-gray-300"
    >
      <button
        onClick={Clicked}
        className=" inline-flex items-center justify-center whitespace-nowrap absolute top-4 right-4   cursor-pointer "
      >
        {clicked ? <BiCheck className=" bg-black text-white" /> : <LuClipboard className="w-4 h-4" />}
      </button>
      <code
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
        data-language="tsx"
        data-theme="default"
      >
        <span className="text-red-300">{"{/* This Component requires React-Icons to be installed */}"}</span>
        <br />
        <br />
        <span className="text-pink-300">&lt;button</span> <span className="text-green-500">className</span>=
        <span className="text-blue-300">
          &quot;inline-flex h-12 ml-10 items-center justify-center gap-2 rounded-md px-4 font-medium transition-all
          border border-blue-400 hover:border-blue-700 hover:bg-blue-50 py-3 text-blue-500 bg-white&quot;&gt;
        </span>
        <br />
        <span className="text-blue-300">&nbsp;&nbsp;&nbsp;&nbsp;&lt;AiOutlineLoading3Quarters</span>{" "}
        <span className="text-green-500">className</span>=
        <span className="text-blue-300">&quot;w-5 h-8 animate-spin text-sky-500 mr-2&quot; /&gt;</span>
        <br />
        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp; Loading </span>
        <br />
        <span className="text-pink-300">&lt;/button&gt;</span>
        <br />
        <br />
        <span className="text-pink-300">&lt;button</span> <span className="text-green-500">className</span>=
        <span className="text-blue-300">
          &quot;inline-flex h-12 ml-10 items-center justify-center gap-2 rounded-md px-4 font-medium transition
          ease-in-out delay-150 text-white bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500
          duration-300 ...&quot;&gt;
        </span>
        <br />
        <span className="text-white">&nbsp;&nbsp;&nbsp;&nbsp;Hover Me</span>
        <br />
        <span className="text-pink-300">&lt;/button&gt;</span>
        <br />
        <br />
        <span className="text-pink-300">&lt;button</span> <span className="text-green-500">className</span>=
        <span className="text-blue-300">
          &quot;inline-flex h-12 ml-10 items-center animate-bounce justify-center gap-2 rounded-full bg-blue-500
          tex-white px-4 font-medium&quot;&gt;
        </span>
        <br />
        <span className="text-blue-300">&nbsp;&nbsp;&nbsp;&nbsp;&lt;FaArrowDown</span>{" "}
        <span className="text-green-500">className</span>=
        <span className="text-blue-300">&quot;text-white&quot; /&gt;</span>
        <br />
        <span className="text-pink-300">&lt;/button&gt;</span>
        <br />
      </code>
    </div>
  );
}

export { BasicButtonsCode, ButtonWithIconsCode, ButtonsWithAnimationsCode };

{
  /* This Component requires React-Icons to be installed  */
}
