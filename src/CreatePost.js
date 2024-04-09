import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function CreatePost() {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='absolute justify-between'>
            <Sidebar />
        </div>
        <h1 className='text-center text-[#F9E900] text-3xl flex ml-[32rem] mt-12'>New Post</h1>
    </div>
  )
}

export default CreatePost