import React, { useContext, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const AccrodianContext = React.createContext();

function Accordian({ children, value, ...props }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-80 border-gray-400 bg-gray-50">
      <ul {...props}>
        <AccrodianContext.Provider value={{ selected, setSelected }}>
          <AccordianItem className="text-red-500" id="1" title="Accordian item1">
            Veniam officia laborum in do sit eiusmod.
          </AccordianItem>

          <AccordianItem id="2" title="Accordian item 2">
            this is the second accordian item
          </AccordianItem>

          <AccordianItem id="3" title="Accordian item 3">
            this is the 3rd accordian item
          </AccordianItem>
        </AccrodianContext.Provider>
      </ul>
    </div>
  );
}

function AccordianItem({ children, id, title, ...props }) {
  const { selected, setSelected } = useContext(AccrodianContext);

  const ref = useRef(null);

  const open = selected == id;

  return (
    <li className="border mt-2 hover:bg-gray-100" >
      <header
        role="button"
        onClick={() => setSelected(open ? null : id)}
        className="flex justify-between items-center p-4 font-medium"
      >
        {title}
        <LuChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""} text-black
        `}
        />
      </header>
      <div className="overflow-y-hidden transition-all" style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}>
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}

export default Accordian;
