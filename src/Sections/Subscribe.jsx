import React from 'react'

const Subscribe = () => {
  return (
   <section className=' max-container'>
    <div className=' relative'>
      <h1 className=' max-xl:text-3xl font-montserrat font-semibold text-4xl'>Sign up for <span className=' text-coral-red'>Updates </span> & NewsLetter</h1>
      <input type="text" name="" id="" className=' w-full outline-1 outline-coral-red 
      border-2 border-gray-400 my-3 rounded-full h-[48px] px-3' placeholder='subscribe@gmail.com'/>
      <button className=' px-4 py-3 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white
      absolute right-[1%] bottom-[12%]'>
        SignUp
      </button>
    </div>
   </section>
  )
}

export default Subscribe