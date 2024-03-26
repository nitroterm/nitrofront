import React, { useState } from 'react'

function InputBio({placeholder}) {
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
        <div className='relative items-center flex'>
            <div className='flex'>
                <textarea
                    className="font-bold bg-[#0E0025] outline-none border border-purple-950 w-96 h-40 text-white rounded-lg pt-4 pl-3 overflow-auto resize-none"
                    onInput={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                ></textarea>
            <label
                htmlFor='BioInput'
                className={`absolute left-3 ${
                    isFocused || inputValue ? '-top-2 text-[#F9E900] text-sm pt-2' : ' text-[#F9E900]'
                } pointer-events-none`}
            >
                {placeholder}
            </label>
            </div>
        </div>
    )
}

export default InputBio;