import React from 'react'

function AnswerInputBox() {
  return (
    <div className='flex items-center'>
        <input 
            type="text" 
            className=" h-12 border-2 border-black w-96 rounded-lg pl-4" 
            placeholder="Write your answer here"
        />
    </div>
  )
}

export default AnswerInputBox