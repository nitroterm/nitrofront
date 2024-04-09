import React from 'react';

function PasswordError({ showError }) {
    return (
        <div>{showError && <div className="text-red-500">Password mismatch. Please try again.</div>}</div>
    );
}

export default PasswordError;