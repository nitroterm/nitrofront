import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Cards from "./components/Cards/Cards";
import NewPostCard from "./components/Cards/NewPostCard";

function CreatePost() {
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
                      Write a Post
                  </h1>
                  <NewPostCard></NewPostCard>
              </div>
          </div>
      </div>
  )
}

export default CreatePost