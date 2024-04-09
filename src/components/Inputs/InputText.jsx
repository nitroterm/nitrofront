import React, { useState } from 'react';

function InputText({ id, placeholder }) {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className='relative flex items-center'>
            <input
                type='text'
                id={id}
                className='font-bold bg-[#0E0025] border border-purple-950 w-96 h-14 text-white rounded-lg pl-4 p-1 pt-4'
                placeholder=' '
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <label
                htmlFor='inputText'
                className={`absolute left-4 ${
                    isFocused || inputValue ? '-top-2 text-[#F9E900] text-sm pt-2' : ' text-[#F9E900]'
                } pointer-events-none`}
            >
                {placeholder}
            </label>
        </div>
    );
}

export default InputText;