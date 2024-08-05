import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";


function NavBar() {
  return (
    <div className="relative  bg-white">
      <header className="fixed  backdrop-filter backdrop-blur-lg bg-opacity-40 top-0 z-50 w-full  border-b border-gray-200  bg-white">
        <div className="flex  h-16 items-center px-20">
          <div className="mx-auto w-full  space-y-20">
            <div className="flex justify-between">
              <div className="flex flex1 items-center justify-start">
                <a className="hover:text-blue-500" href="/">DUI</a>
                <a className="pl-10 cursor-pointer hover:text-blue-500">Get Started</a>
              </div>

              <div className="flex flex1 items-center justify-end">
                <nav className="flex items-center space-x-1">
                  <a href="/" className="hover:text-blue-700 h-10 p-2 mr-3 text-gray-800">
                    <MdOutlineLightMode className="h-full w-full" />
                  </a>
                  <a href="/" className="h-10 p-2 text-gray-800">
                    <FaGithub className="h-full w-full hover:text-blue-700" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default NavBar;



