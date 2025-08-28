import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const CodeEditor = ({ setResponse }) => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("// Write your code here...");
  const [theme, setTheme] = useState("vs-dark"); 
  const [isExpress, setIsExpress] = useState(false);

  const handleTheme = () => setTheme(prev => prev === "vs-dark" ? "light" : "vs-dark");

  const handleRun = async () => {
    try {
      let res;
      if (isExpress) {
        res = await axios.post("http://localhost:5000/api/express", { code });
      } else {
        res = await axios.post("http://localhost:5000/api/code", { code });
      }
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setResponse(err.message);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <label className="text-white text-2xl font-bold">Code Editor</label>
        <div className="flex flex-row justify-between gap-2">
          <button
            className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-600"
            onClick={handleTheme}
          >
            {theme === "vs-dark" ? "Light Theme" : "Dark Theme"}
          </button>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-600"
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="php">PHP</option>
            <option value="go">Go</option>
          </select>

          <label className="text-white flex items-center gap-1">
            <input
              type="checkbox"
              checked={isExpress}
              onChange={(e) => setIsExpress(e.target.checked)}
            />
            Express API
          </label>

          <button
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
            onClick={handleRun}
          >
            Run
          </button>
        </div>
      </div>

      <div className="flex-1 border border-gray-600 rounded mb-2">
        <Editor
          height="100%"
          language={language}
          theme={theme}
          value={code}
          onChange={(value) => setCode(value || "")}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
