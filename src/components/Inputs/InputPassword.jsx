import React, { useState } from 'react'

function InputPassword() {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

  return (
    <div className='relative items-center flex justify-center'>
        <input
            type='password'
            className='font-bold bg-[#0E0025] border border-purple-950 w-96 h-14 text-white rounded-lg pl-4 p-1 pt-2'
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            required
        />
        <label
            htmlFor='inputPassword'
            className={`absolute left-4 ${
                isFocused || inputValue ? '-top-2 text-[#F9E900] text-sm pt-2' : ' text-[#F9E900]'
              } pointer-events-none transition-all duration-300`}
        >
            Password
        </label>
    </div>
  )
}

export default InputPassword