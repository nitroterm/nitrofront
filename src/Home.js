import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import {nbGetFeed} from "./lib/nitroback";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (posts !== undefined && posts.length > 0) return;

        nbGetFeed()
            .then(data => data.json())
            .then(data => {
                setPosts(data.data)
            })
    }, []);

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className='flex flex-col justify-center mt-12'>
                <h1 className='text-[#F9E900] text-center text-bold text-[30px] mb-4 md:mr-72'>Your Feed</h1>
                <div className='absolute'>
                    <Sidebar/>
                </div>
                {
                    posts && posts.length > 0 ?
                        posts.map((post, i) => {
                            return (
                                <div className='flex justify-center'>
                                    <Cards post={post}/>
                                </div>
                            )
                        }) : "Please wait"
                }
            </div>
        </div>
    );
}

export default Home;
