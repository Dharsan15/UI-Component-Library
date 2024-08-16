import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-okaidia.css";

import "../custom-prism-theme.css";

function Tabscode() {
  const code = `
    import { useState } from "react";
    
    const Tabs = () => {
      const [activeTab, setActiveTab] = useState(0);
    
      return (
        <div>
          <div className="border-b border-b-gray-100">
            <ul className="-mb-px flex items-center gap-4 text-sm font-medium">
              <li>
                <button
                  onClick={() => setActiveTab(0)}
                  className={\`inline-flex cursor-pointer items-center gap-2 px-1 py-3 \${activeTab === 0 ? "text-indigo-600 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-indigo-600" : "text-gray-500 hover:text-indigo-600"}\`}
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab(1)}
                  className={\`inline-flex cursor-pointer items-center gap-2 px-1 py-3 \${activeTab === 1 ? "text-indigo-600 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-indigo-600" : "text-gray-500 hover:text-indigo-600"}\`}
                >
                  Preferences
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab(2)}
                  className={\`inline-flex cursor-pointer items-center gap-2 px-1 py-3 \${activeTab === 2 ? "text-indigo-600 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-indigo-600" : "text-gray-500 hover:text-indigo-600"}\`}
                >
                  Notifications
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">8</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab(3)}
                  className={\`inline-flex cursor-pointer items-center gap-2 px-1 py-3 \${activeTab === 3 ? "text-indigo-600 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-indigo-600" : "text-gray-500 hover:text-indigo-600"}\`}
                >
                  Applications
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab(4)}
                  className={\`inline-flex cursor-pointer items-center gap-2 px-1 py-3 \${activeTab === 4 ? "text-indigo-600 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-indigo-600" : "text-gray-500 hover:text-indigo-600"}\`}
                >
                  API
                </button>
              </li>
            </ul>
          </div>
          <div className="py-3">
            <div className={\`transition-opacity duration-600 \${activeTab === 0 ? "block" : "hidden"}\`}>
              Tab content 1
            </div>
            <div className={\`transition-opacity duration-600 \${activeTab === 1 ? "block" : "hidden"}\`}>
              Tab content 2
            </div>
            <div className={\`transition-opacity duration-600 \${activeTab === 2 ? "block" : "hidden"}\`}>
              Tab content 3
            </div>
            <div className={\`transition-opacity duration-600 \${activeTab === 3 ? "block" : "hidden"}\`}>
              Tab content 4
            </div>
            <div className={\`transition-opacity duration-600 \${activeTab === 4 ? "block" : "hidden"}\`}>
              Tab content 5
            </div>
          </div>
        </div>
      );
    };
    
    export default Tabs;
    `;

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

export default Tabscode;
