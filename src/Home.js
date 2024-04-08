import React from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function Home() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='flex'>
                <div className='flex max-h-screen'>
                    <Sidebar />
                </div>
                <div className='flex flex-col justify-center ml-60 mt-12 md:justify-center'>
                    <h1 className='text-[#F9E900] text-center text-bold text-[30px] mb-4 md:mr-72'>Your Feed</h1>
                    <div className='flex justify-center'>
                        <Cards
                            time={'03/03/2024 at 17:50'}
                            srcImg={'https://picsum.photos/seed/picsum/200/300'}
                            name={'Monsieur Front'}
                            language={'React'}
                            id={'@flofloflofloflo'}
                            title={'Salut les gars !'}
                        />
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
