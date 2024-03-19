import React from 'react'
import WrapperLogin from './components/WrapperLogin/WrapperLogin'


function login() {
    return (
        <div className='text-white'>
            <div className='flex justify-center mt-40'>
                <WrapperLogin textLogin={"Create account"} text={"Login"}/>
            </div>
            <footer className='flex justify-center mt-40'>
                <p>Copyright (c) 2024 nitroterm contributors</p>
            </footer>
        </div>
    );
}

export default login;