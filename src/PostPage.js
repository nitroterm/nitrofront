import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Cards from "./components/Cards/Cards";
import NewPostCard from "./components/Cards/NewPostCard";
import {useLocation} from "react-router-dom";
import {useQuery} from "./lib/utils";
import {nbGetPost} from "./lib/nitroback";
import ErrorHeader from "./components/ErrorHeader/ErrorHeader";

function PostPage() {
    let query = useQuery();
    let postId = query.get("id");

    const [post, setPost] = useState(undefined);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        nbGetPost(postId)
            .then(data => data.json())
            .then(data => {
                if (!data.success) {
                    setError(data.message);

                    return;
                }

                setPost(data.data);
            })
            .catch(error => {
                setError(error.message);
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
                        {
                            post && `Post from ${post.sender.displayName ?? post.sender.username}`
                        }
                    </h1>
                    {
                        error && <ErrorHeader showError={true} errorMessage={error} />
                    }
                    {
                        post && <Cards post={post}/>
                    }
                    <p className="text-white">Answers aren't implemented yet</p>
                </div>
            </div>
        </div>
    )
}

export default PostPage