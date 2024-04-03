import React, { useState } from 'react';
import BadgeProduct from '../Badges/BadgeProduct';
import ButtonNitro from '../Buttons/ButtonNitro';
import ButtonDynamite from '../Buttons/ButtonDynamite';
import ButtonFork from '../Buttons/ButtonFork';
import Vscode from '../Terminal/Vscode';
import ButtonLogin from '../Buttons/ButtonLogin';
import ButtonLike from '../Buttons/ButtonLike';

function Cards({
    time,
    srcImg,
    name,
    language,
    id,
    title,
    post,
}) {

  const [editMode, setEditMode] = useState('normal');

  return (
    <div className='border-2 border-[#411A83] rounded-2xl w-auto p-3'>
      <div className='absolute'>
        <p className='text-[#D4D3DC] text-sm'>{time}</p>
      </div>
      <div className='flex items-center mt-2'>
        <div className='flex items-center border-4 rounded-full border-[#411A83]'>
          <img src={srcImg} alt="A beautiful landscape" className='rounded-full h-12 w-12' />
        </div>
        <div className='text-white ml-4 flex items-center flex-grow'>
            <div className='flex'>
                <div className='flex flex-col'>
                    <h2 className='font-bold text-[20px] mr-4'>{name}</h2>
                    <p className='text-[15px]'>{id}</p>
                </div>
                <div>
                    <BadgeProduct text={language}/>
                </div>
                <div>
                    <ButtonLike/>
                </div>
            </div>
            <div className='ml-auto flex items-end'>
            <div className='ml-2 flex flex-col gap-1 items-center'>
              <ButtonNitro />
              <ButtonDynamite />
              <ButtonFork />
            </div>
          </div>
        </div>
      </div>
      <div className="tooltip flex items-start flex-col ml-2 mb-4">
            <select value={editMode} onChange={(e) => setEditMode(e.target.value)}>
              <option value="normal">Normal</option>
              <option value="terminal">Terminal</option>
            </select>
          </div>
          <div>
            <p className='text-white text-[20px] font-bold mb-2'>{title}</p>
          </div>
      {editMode === 'normal' && (
        <div className='flex'>
          <textarea className='text-black h-auto w-96 outline-none rounded-lg font-bold text-[20px] mt-auto pl-2'>{post}</textarea>
        </div>
      )}
      {editMode === 'terminal' && (
        <div className='flex justify-center'>
          <Vscode />
        </div>
      )}
      <div className='flex items-center justify-center mt-4'>
        <ButtonLogin text="Envoyer" />
      </div>
    </div>
  );
}

export default Cards;
