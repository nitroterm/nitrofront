import React, { useState } from 'react'

function InputPassword({
    text
}) {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

  return (
    <div className='relative'>
        <input
            type='password'
            className='font-bold bg-[#290D59] text-white rounded-lg pl-4 p-1 pt-4'
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
        />
        <label
            htmlFor='inputPassword'
            className={`absolute left-4 ${
                isFocused ? '-top-2 text-[#F9E900] text-sm pt-2' : 'mt-2 text-[#F9E900]'
              } pointer-events-none transition-all duration-300`}
        >
            {text}
        </label>
    </div>
  )
}

export default InputPassword