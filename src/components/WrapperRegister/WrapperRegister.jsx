import React from 'react';
import InputText from "../Inputs/InputText";
import InputPassword from "../Inputs/InputPassword";
import {Link} from "react-router-dom";

function WrapperRegister({textLogin, text}) {
    return (
        <div className='flex bg-[#080016] text-white pb-20 pl-10 border border-purple-900 rounded-lg'>
            <div className='flex flex-col mb-44 mr-36 mt-8'>
                <img className='w-64 h-24 pb-4' src={require('../img/logo.png')} alt="logo"/>
                <h1 className='font-bold pt-6 pl-5 text-3xl text-[#F9E900]'>Create your account</h1>
            </div>
            <div className='flex flex-col items-center mr-16 gap-12 justify-center'>
                <div className='flex flex-col gap-2 mt-36'>
                    <InputText id="input_username" placeholder='Username'/>
                    <InputPassword id="input_password" placeholder='Password'/>
                    <InputPassword id="input_password_confirm" placeholder='Confirm Password'/>
                </div>
                <div className='flex flex-col mt-12 gap-2'>
                    <button onClick={sendRegister} className='text-black bg-[#F9E900] hover:bg-[#FFF564] w-96 p-2 transition duration-300 rounded-lg border border-yellow-300 px-10 font-bold text-[15px]'>{textLogin}</button>
                    <Link to="/login"><button className='text-white bg-[#290D59] hover:bg-[#411A83] w-96 p-2 transition duration-300 rounded-lg border border-purple-900 px-10 font-bold text-[15px]'>{text}</button></Link>
                </div>
            </div>
        </div>
    );
}

function sendRegister() {
    if (document.getElementById('input_password').value !== document.getElementById('input_password_confirm').value) {
        alert('Passwords do not match');
        return;
    }
    fetch('https://services.cacahuete.dev/api/nitroterm/v1/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: document.getElementById('input_username').value,
            password: document.getElementById('input_password').value
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data.success);
            console.log('Message:', data.message);
            // Return to main page
            window.location.href = '/#onboarding';
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
}

export default WrapperRegister;