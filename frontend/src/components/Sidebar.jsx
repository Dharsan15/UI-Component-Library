import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function SideList({ value, selected, setSelected }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setSelected(value);
    navigate(`/components/${value}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        selected ? "text-blue-500" : "text-black"
      } flex w-full text-xl items-center p-2 pl-6 rounded-lg hover:bg-gray-100 hover:underline group`}
    >
      {value}
    </button>
  );
}

const values = ["Accordian", "Alert", "Buttons", "DropDown", "LogoCloud", "Tabs" , "PinInput"];

function Sidebar() {
  const location = useLocation();
  const [selected, setSelected] = useState(values[0]);

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    if (values.includes(currentPath)) {
      setSelected(currentPath);
    }
  }, [location]);

  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 h-full w-[200px] border-r border-gray-100 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
      aria-label="Sidebar"
    >
      <ul className="pt-20 space-y-2 font-medium">
        <li>
          <button className="flex items-center p-2 font-bold text-lg text-gray-900 rounded-lg dark:text-white">
            <span className="ms-3 text-2xl mb-5">Components</span>
          </button>
          {values.map((val) => (
            <SideList value={val} selected={selected === val} setSelected={setSelected} key={val} />
          ))}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
