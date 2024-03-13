import React from 'react'
import WrapperLoginRegister from './components/WrapperLoginRegister/WrapperLoginRegister'


function login() {
    return (
        <div className='text-white'>
            <div className='flex justify-center mt-40'>
                <WrapperLoginRegister textLogin={"Create account"} text={"Login"}/>
            </div>
            <footer className='flex justify-center mt-40'>
                <p>Copyright (c) 2024 nitroterm contributors</p>
            </footer>
        </div>
)
    ;
}

export default login;