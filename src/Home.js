import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import {nbGetFeed} from "./lib/nitroback";
import secureLocalStorage from "react-secure-storage";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (posts !== undefined && posts.length > 0) return;

        nbGetFeed()
            .then(data => data.json())
            .then(data => {
                if (!data.success && data.slug === 'invalid_token')
                {
                    secureLocalStorage.removeItem('token');
                    return;
                }

                setPosts(data.data)
            })
    }, []);

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className='flex flex-col justify-center mt-12'>
                <div className='fixed'>
                    <Sidebar/>
                </div>
                <div className='flex flex-col justify-center items-center mt-10'>
                    <h1 className='text-[#F9E900] text-bold text-[30px] w-[500px]'>
                        Your Feed
                    </h1>
                    {
                        posts && posts.length > 0 ?
                            posts.map((post, i) => {
                                return (
                                    <Cards post={post} interactable={true}/>
                                )
                            }) : "Please wait"
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;
