import React from 'react';
import ButtonLogin from '../Buttons/ButtonLogin';
import ButtonRegister from '../Buttons/ButtonRegister';

function Header() {
  return (
    <div className='flex justify-between items-center w-full'>
      <div className='flex items-center'>
        <img src={require('../img/logo.png')} alt="nitro" className='h-28'/>
      </div>
      <div className='flex items-center gap-4 mr-12'>
        <ButtonLogin text="Login" />
        <ButtonRegister text="Create account"/>
      </div>
    </div>
  );
}

export default Header;
