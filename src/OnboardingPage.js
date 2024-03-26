import React from 'react'
import Onboarding from './components/Onboarding/Onboarding.jsx'


function OnboardingPage() {
    return (
        <div className='text-white'>
            <Onboarding textLogin={"Create account"} text={"Login"}/>
        </div>
    );
}

export default OnboardingPage;