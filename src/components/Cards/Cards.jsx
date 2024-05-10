import React from 'react';
import BadgeProduct from '../Badges/BadgeProduct';
import ButtonNitro from '../Buttons/ButtonNitro';
import ButtonDynamite from '../Buttons/ButtonDynamite';
import ButtonFork from '../Buttons/ButtonFork';
import ButtonLike from '../Buttons/ButtonLike';
import Timestamp from "react-timestamp";
import {nbGetProfilePictureUrl} from "../../lib/nitroback";
import {Link} from "react-router-dom";

function Cards({
                   post,
                   interactable = false
               }) {

    return interactable ? <Link to={`/post?id=${post.id}`}>{Post(post)}</Link> : Post(post)
}

function Post(post) {
    return <div className='border-2 bg-[#0D0023] border-[#411A83] rounded-[23px] w-[500px] p-3 my-4'>
        <div className='absolute'>
            <Timestamp relativex date={post.creationDate} className='text-[#D4D3DC] text-sm'></Timestamp>
        </div>
        <div className='flex items-center'>
            <div className="flex flex-row gap-2">
                <div className='flex items-center border-4 rounded-full border-[#411A83] h-12 w-12 overflow-hidden'>
                    <img alt="A beautiful landscape" className="w-full h-full object-cover"
                         src={nbGetProfilePictureUrl(post.sender)}/>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-white font-semibold">{post.sender.displayName ?? post.sender.username}</p>
                    <p className="text-white opacity-50">@{post.sender.username}</p>
                </div>
            </div>
            <div className='ml-auto flex items-end'>
                <div className='ml-2 flex flex-col gap-2 items-center'>
                    <ButtonNitro/>
                    <ButtonDynamite/>
                    <ButtonFork/>
                </div>
            </div>
        </div>
        <div className='flex'>
            <p className='text-white text-[20px] ml-2 mb-2'>{post.message}</p>
        </div>
    </div>
}

export default Cards;
