import React from 'react';
import BadgeProduct from '../Badges/BadgeProduct';
import ButtonNitro from '../Buttons/ButtonNitro';
import ButtonDynamite from '../Buttons/ButtonDynamite';
import ButtonFork from '../Buttons/ButtonFork';
import ButtonLike from '../Buttons/ButtonLike';
import Timestamp from "react-timestamp";
import {nbGetProfilePictureUrl} from "../../lib/nitroback";

function Cards({
    post
}) {

  return (
    <div className='border-2 border-[#411A83] rounded-2xl w-[500px] p-3 my-4'>
      <div className='absolute'>
        <Timestamp relativex date={post.creationDate} className='text-[#D4D3DC] text-sm'></Timestamp>
      </div>
      <div className='flex items-center mt-2'>
        <div className='flex items-center border-4 rounded-full border-[#411A83]'>
          <img alt="A beautiful landscape" className='rounded-full h-12 w-12' src={nbGetProfilePictureUrl(post.sender)} />
        </div>
        <div className='text-white ml-4 flex items-center'>
            <div className='flex'>
                <div className='flex flex-col'>
                    <h2 className='font-bold text-[20px] mr-4'>{post.sender.displayName ?? post.sender.username}</h2>
                    <p className='text-[15px]'>@{post.sender.username}</p>
                </div>
                {
                    post.sender.product &&
                    <div>
                        <BadgeProduct text={post.sender.product}/>
                    </div>
                }
                <div>
                    <ButtonLike/>
                </div>
            </div>
          </div>
          <div className='ml-auto flex items-end'>
            <div className='ml-2 flex flex-col gap-2 items-center'>
              <ButtonNitro />
              <ButtonDynamite />
              <ButtonFork />
            </div>
          </div>
        </div>
        <div className='flex'>
            <p className='text-white text-[20px] ml-2 mb-2'>{post.message}</p>
        </div>
    </div>
  );
}

export default Cards;
