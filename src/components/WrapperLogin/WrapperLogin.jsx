import React, {useState} from 'react';
import InputText from "../Inputs/InputText";
import InputPassword from "../Inputs/InputPassword";
import {Link, useNavigate} from "react-router-dom";
import secureLocalStorage from 'react-secure-storage';
import ErrorHeader from "../ErrorHeader/ErrorHeader";
import {nbLogin} from "../../lib/nitroback";

function WrapperLogin({textLogin, text}) {
    const [loginSuccess, setLoginSuccess] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    return (
        <div className='flex bg-[#080016] text-white justify-center items-center pb-20 pl-10 pr-10 border border-purple-900 rounded-lg'>
            <div className='flex flex-col mb-44 mr-32'>
                <Link to="/"><img className='w-64 h-24 pb-4' src={require('../img/logo.png')} alt="logo"/></Link>
                <h1 className='font-bold pt-6 pl-5 text-3xl text-[#F9E900]'>Login to your account</h1>
            </div>
            <div className='flex flex-col items-center mr-6 gap-12 mt-28'>
                <div className='flex flex-col gap-2'>
                    <div className='h-10'>
                        <ErrorHeader showError={!loginSuccess} errorMessage={errorMessage}/>
                    </div>
                    <InputText id="input_username" placeholder='Username'/>
                    <InputPassword id="input_password" placeholder='Password'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <button onClick={() => sendRegister(setLoginSuccess, setErrorMessage, navigate)}
                            className='text-black bg-[#F9E900] hover:bg-[#FFF564] w-96 p-2 transition duration-300 rounded-lg border border-yellow-300 px-10 font-bold text-[15px]'>{text}</button>
                    <Link to="/register"><button className='text-white bg-[#290D59] hover:bg-[#411A83] w-96 p-2 transition duration-300 rounded-lg border border-purple-900 px-10 font-bold text-[15px]'>{textLogin}</button></Link>
                </div>
            </div>
        </div>
    );
}

function sendRegister(setLoginSuccess, setErrorMessage, navigate) {
    nbLogin(document.getElementById('input_username').value, document.getElementById('input_password').value)
        .then((response) => response.json())
        .then((data) => {
            if (!data.success) {
                setErrorMessage(data.message);
                setLoginSuccess(false);
              
                return;
            }

            secureLocalStorage.setItem('token', data.data.token);

            navigate('/')
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
}

export default WrapperLogin;