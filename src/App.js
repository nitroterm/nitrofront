import React from 'react';
import Header from './components/Header/Header';
import ButtonRegister from './components/Buttons/ButtonRegister';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='ml-16 mt-12'>
        <ButtonRegister text="Write something"/>
      </div>
      <div className='flex justify-center'>
        <Cards 
        time={'03/03/2024 at 17:50'}
        srcImg={'https://picsum.photos/seed/picsum/200/300'}
        name={'Monsieur Front'}
        language={'React'}
        id={'@flofloflofloflo'}
        title={'Tema mon composant React :'}
        />
      </div>
    </div>
  );
}

export default App;
