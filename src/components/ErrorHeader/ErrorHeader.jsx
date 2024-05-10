import React from 'react';
import cross from '../img/cross.svg';

function PasswordError({ showError, errorMessage }) {
    return (
        <div>
            {showError && <div className="flex bg-[#590D0D] border border-[#9D2121] text-white text-xs p-2 mb-2 rounded font-['PT Sans]"><img className='h-4 mr-2' src={cross} alt='cross'/>{errorMessage}</div>}
        </div>
    );
}

export default PasswordError;