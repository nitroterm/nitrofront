import React, { useState } from 'react';
import InputText from "../Inputs/InputText";
import InputBio from "../Inputs/InputBio";
import SearchBar from "../SearchBar/SearchBar";
import CardOnboarding from "../Cards/CardOnboarding";
import Icon from "../img/Icon.png";
import secureLocalStorage from 'react-secure-storage';

function OnboardingStep1({onNext, onPrev}) {
    const updateProfileCall = () => {
        updateProfil(onNext);
    }
    return (
        <div className='flex flex-wrap bg-[#080016] w-7/12 text-white justify-center items-center border border-purple-900 rounded-lg'>
            <div className='flex'>
                <div className='flex flex-col mt-12'>
                    <div className='flex'>
                        <div className='bg-[#F9E900] w-10 p-1 rounded-lg border border-yellow-300 mr-1'></div>
                        <div className='bg-[#290D59] w-5 p-1 rounded-lg border border-purple-900'></div>
                    </div>
                    <div className='flex flex-col mb-44 mr-12'>
                        <p className='text-[#F9E900] text-xs mt-2'>1/2</p>
                        <h1 className='font-bold pt-6 text-2xl text-[#F9E900]'>Let’s setup your account</h1>
                        <h3 className='font-bold'>Your identity</h3>
                    </div>
                </div>
                <div className='flex flex-col items-center ml-10 mt-32'>
                    <div>
                        <div className='flex flex-col gap-3'>
                            <InputText id="input_name" placeholder="Your name"/>
                            <InputBio id="input_bio" placeholder='Bio'/>
                        </div>
                        <div className='flex gap-2 mt-28 pb-16'>
                            <button onClick={onPrev} className='text-white bg-[#290D59] hover:bg-[#411A83] w-40 p-2 transition duration-300 rounded-lg border border-purple-900 px-10 font-bold text-[15px]'>Back</button>
                            <button onClick={updateProfileCall} className='text-black bg-[#F9E900] hover:bg-[#FFF564] w-56 p-2 transition duration-300 rounded-lg border border-yellow-300 px-10 font-bold text-[15px]'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OnboardingStep2({onNext, onPrev}) {
    return (
        <div
            className='flex flex-wrap bg-[#080016] w-7/12 text-white justify-center items-center border border-purple-900 rounded-lg'>
            <div className='flex'>
                <div className='flex flex-col mt-12'>
                    <div className='flex mx-12'>
                        <div className='bg-[#290D59] hover:bg-[#411A83] w-5 p-1 rounded-lg border border-purple-900'></div>
                        <div className='bg-[#F9E900] hover:bg-[#FFF564] w-10 p-1 rounded-lg border border-yellow-300 ml-1'></div>
                    </div>
                    <div className='flex flex-col mb-44 ml-12'>
                        <p className='text-[#F9E900] text-xs mt-2'>2/2</p>
                        <h1 className='font-bold pt-6 text-2xl text-[#F9E900]'>Let’s setup your account</h1>
                        <h3 className='font-bold'>Choose your single favorite product : it will be shown to everyone</h3>
                    </div>
                </div>
                <div className='flex flex-col items-center mr-12 ml-6 mt-24'>
                    <div className='mr-1 mt-3'>
                        <div className='flex flex-col gap-3'>
                            <SearchBar />
                            <div className='flex flex-wrap gap-1'>
                                <button><CardOnboarding img={Icon} id="product_input" name={'Apple'} hashtag={'apple'}/></button>
                                <button><CardOnboarding img={Icon} id="product_input" name={'Windobe'} hashtag={'windobe'}/></button>
                                <button><CardOnboarding img={Icon} id="product_input" name={'Linux'} hashtag={'linux'}/></button>
                            </div>
                        </div>
                        <div className='flex gap-2 mt-32 pb-16'>
                            <button onClick={onPrev} className='text-white bg-[#290D59] hover:bg-[#411A83] w-40 p-2 transition duration-300 rounded-lg border border-purple-900 px-10 font-bold text-[15px]'>Back</button>
                            <button onClick={updateProfilStep2} className='text-black bg-[#F9E900] hover:bg-[#FFF564] w-56 p-2 transition duration-300 rounded-lg border border-yellow-300 px-10 font-bold text-[15px]'>Finish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function updateProfil(onNext) {
    fetch('https://services.cacahuete.dev/api/nitroterm/v1/user', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + secureLocalStorage.getItem('token')
        },
        body: JSON.stringify({
            username: document.getElementById('input_name').value,
            bio: document.getElementById('input_bio').value
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.success === false) {
                alert(data.message);
                return;
            }
            
            onNext();
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
}

function updateProfilStep2(onNext) {
    fetch('https://services.cacahuete.dev/api/nitroterm/v1/user', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + secureLocalStorage.getItem('token')
        },
        body: JSON.stringify({
            productId: document.getElementById('product_input').value
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.success === false) {
                alert(data.message);
                return;
            }
            
            window.location.href = '/';
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
}

function Onboarding() {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    return (
        <div className='flex justify-center items-center mt-36'>
            {step === 1 && <OnboardingStep1 onNext={handleNext}/>}
            {step === 2 && <OnboardingStep2 onPrev={handlePrev}/>}
        </div>
    );
}

export default Onboarding;