import React, { useState } from 'react';

function InputText() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className='relative'>
      <input
        type='text'
        className='font-bold bg-[#290D59] text-white rounded-lg pl-4 p-1 pt-4'
        placeholder=' '
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        htmlFor='inputText'
        className={`absolute left-4 ${
          isFocused ? '-top-2 text-[#F9E900] text-sm pt-2' : 'mt-2 text-[#F9E900]'
        } pointer-events-none transition-all duration-300`}
      >
        Field
      </label>
    </div>
  );
}

export default InputText;
