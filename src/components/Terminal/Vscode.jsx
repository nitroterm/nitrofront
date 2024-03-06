import React, { useState } from 'react';

function Vscode() {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
  };

  const generateLineNumbers = () => {
    const numLines = code.split("\n").length;
    return [...Array(numLines).keys()].map((lineNumber) => (
      <div key={lineNumber} className="h-6 flex items-center justify-center bg-black text-white">{lineNumber + 1}</div>
    ));
  };

  return (
    <div className="flex justify-center border border-solid rounded-lg border-[#411A83] bg-black w-auto">
      {code && (
        <div className="pl-8">
          {generateLineNumbers()}
        </div>
      )}
      <div className="flex">
        <textarea 
          className="w-96 mt-auto resize-none h-auto outline-none bg-black text-white pl-4"
          value={code}
          onChange={handleChange}
          placeholder="Ecrivez votre code ici..."
        ></textarea>
      </div>
    </div>
  );
}

export default Vscode;
