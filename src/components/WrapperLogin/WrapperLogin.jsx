import React from 'react';
import InputText from "../Inputs/InputText";
import InputPassword from "../Inputs/InputPassword";
import {Link} from "react-router-dom";

function WrapperLogin({textLogin, text}) {
    return (
        <div className='flex bg-[#080016] text-white justify-center items-center pb-24 pl-10 pr-10 border border-purple-900 rounded-lg'>
            <div className='flex flex-col mb-44 mr-32'>
                <img className='w-64 h-24 pb-4' src={require('../img/logo.png')} alt="logo"/>
                <h1 className='font-bold pt-6 pl-5 text-3xl text-[#F9E900]'>Login to your account</h1>
            </div>
            <div className='flex flex-col items-center mr-6 gap-12 mt-36'>
                <div className='flex flex-col gap-2'>
                    <InputText id="input_username" placeholder='Username'/>
                    <InputPassword id="input_password" placeholder='Password'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <Link to="/"><button className='text-black bg-[#F9E900] hover:bg-[#FFF564] w-96 p-2 transition duration-300 rounded-lg border border-yellow-300 px-10 font-bold text-[15px]'>{text}</button></Link>
                    <Link to="/register"><button className='text-white bg-[#290D59] hover:bg-[#411A83] w-96 p-2 transition duration-300 rounded-lg border border-purple-900 px-10 font-bold text-[15px]'>{textLogin}</button></Link>
                </div>
            </div>
        </div>
    );
}

export default WrapperLogin;