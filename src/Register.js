import React from 'react'
import WrapperRegister from './components/WrapperRegister/WrapperRegister'


function Register() {
    return (
        <div className='text-white'>
            <div className='flex justify-center mt-32'>
                <WrapperRegister textLogin={"Create account"} text={"I already have one"}/>
            </div>
            <footer className='flex justify-center mt-24'>
                <p>Copyright (c) 2024 nitroterm contributors</p>
            </footer>
        </div>
    );
}

export default Register;