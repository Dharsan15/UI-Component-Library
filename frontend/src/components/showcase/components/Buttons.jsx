import { RiDeleteBinLine } from "react-icons/ri";
import { MdFileUpload } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";

const BasicButtons = () => {
  return (
    <div className="flex gap-10">
      <button className="inline-flex items-center  justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all   border border-transparent py-3 text-white bg-blue-500 hover:bg-blue-700 ">
        Default
      </button>
      <button className="inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-all   disabled:pointer-events-none disabled:opacity-50 border-2 border-blue-200 hover:text-white dark:border-gray-700 text-blue-500 hover:border-blue-700 hover:bg-blue-500 ">
        Outlined
      </button>
      <button className="inline-flex items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-  dark:focus:ring-offset-zinc-800 disabled:pointer-events-none disabled:opacity-50 border border-transparent py-3 underline-offset-4 ring-offset-white hover:underline text-indigo-500    focus:ring-indigo-500 dark:hover:text-indigo-400">
        Underlined
      </button>
    </div>
  );
};

function ButtonsWithIcons() {
  return (
    <div>
      <button className="inline-flex  ml-10 items-center justify-center gap-2 rounded-md px-4  font-medium transition-all   border border-blue-400 hover:shadow-lg hover:border-blue-600 py-3 text-white bg-blue-500 ">
        <RiDeleteBinLine className="h-full w-full text-white " />
        DELETE
      </button>

      <button className="inline-flex  ml-10 items-center justify-center gap-2 rounded-md px-4  font-medium transition-all    border border-blue-400 hover:shadow-sm hover:border-blue-700 hover:bg-blue-50 py-3 text-blue-500 bg-white ">
        UPLOAD
        <MdFileUpload className="h-full w-full text-blue-500 " />
      </button>
    </div>
  );
}

function ButtonWithAnimation() {
  return (
    <>
      <button className="inline-flex  h-12 ml-10 items-center justify-center gap-2 rounded-md px-4  font-medium transition-all    border border-blue-400  hover:border-blue-700 hover:bg-blue-50 py-3 text-blue-500 bg-white ">
        <AiOutlineLoading3Quarters className="w-5 h-8 animate-spin text-sky-500 mr-2" />
        Loading
      </button>
      <button className="inline-flex h-12 ml-10 items-center justify-center gap-2 rounded-md px-4  font-medium transition ease-in-out delay-150 text-white bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ... ">
        Hover Me
      </button>

      <button className="inline-flex h-12 ml-10 items-center animate-bounce  justify-center gap-2 rounded-full bg-blue-500 tex-white px-4  font-medium ">
        <FaArrowDown className="text-white" />
      </button>
    </>
  );
}

export { BasicButtons, ButtonsWithIcons, ButtonWithAnimation };
