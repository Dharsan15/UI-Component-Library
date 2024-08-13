import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

import "../custom-prism-theme.css";

function CodeComponent() {
  const code = `import React, { useContext, useRef, useState } from "react";
    import { LuChevronDown } from "react-icons/lu";
    
    const AccordionContext = React.createContext();
    
    function Accordion({ children, value, ...props }) {
      const [selected, setSelected] = useState(null);
    
      return (
        <div className="w-80 border-gray-400 bg-gray-50">
          <ul {...props}>
            <AccordionContext.Provider value={{ selected, setSelected }}>
              <AccordionItem className="text-red-500" id="1" title="Accordion item 1">
                Veniam officia laborum in do sit eiusmod.
              </AccordionItem>
    
              <AccordionItem id="2" title="Accordion item 2">
                This is the second accordion item.
              </AccordionItem>
    
              <AccordionItem id="3" title="Accordion item 3">
                This is the third accordion item.
              </AccordionItem>
            </AccordionContext.Provider>
          </ul>
        </div>
      );
    }
    
    function AccordionItem({ children, id, title, ...props }) {
      const { selected, setSelected } = useContext(AccordionContext);
    
      const ref = useRef(null);
    
      const open = selected === id;
    
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
              className={\`transition-transform \${open ? "rotate-180" : ""} text-black\`}
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
    
    export default Accordion;`;

  return (
    <Editor
      value={code}
      padding={20}
      highlight={(code) => highlight(code, languages.js, "javascript")}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 15,
        backgroundColor: "#000",
        color: "#fff",
      }}
    />
  );
}

export default CodeComponent;
