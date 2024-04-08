import React, { useState } from 'react';

function Vscode() {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
  };

  const generateLineNumbers = () => {
    const lines = code.split("\n");
    return lines.map((_, index) => (
      <div key={index} className="h-6 flex items-center justify-center bg-black text-white">{index + 1}</div>
    ));
  };

  return (
    <div className="flex justify-center border border-solid rounded-lg border-[#411A83] bg-black w-auto">
      {code.length > 0 && (
        <div className="pl-2 pr-2">
          {generateLineNumbers()}
        </div>
      )}
      <div className="flex pl-2">
        <textarea 
          className="w-96 h-auto resize-none outline-none bg-black text-white"
          value={code}
          onChange={handleChange}
          placeholder='Write your code here...'
        >{generateLineNumbers()}</textarea>
      </div>
    </div>
  );
}

export default Vscode;
