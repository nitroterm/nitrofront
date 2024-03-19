import React from 'react';
import Header from './components/Header/Header';
import ButtonRegister from './components/Buttons/ButtonRegister';
import Cards from './components/Cards/Cards';
import ButtonMenu from './components/Buttons/ButtonMenu';

function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='absolute flex justify-center'>
                <div className='ml-16 mt-12'>
                    <ButtonRegister text="Write something"/>
                    <ButtonMenu text="Your Feed"/>
                </div>
                <div>
                    <h1 className='text-[#F9E900] text-center text-bold text-[30px] mr-72 mb-4'>Your Feed</h1>
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
            </div>
        </div>
    );
}

export default Home;
