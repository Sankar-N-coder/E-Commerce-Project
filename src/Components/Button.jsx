import React from 'react'

const Button = ({label,iconUrl}) => {
  return (
    <button className=' flex items-center justify-center gap-2 px-4 py-3 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white'>
        {label}
        {iconUrl&&<img src={iconUrl} alt="" className=' mt-1 ml-2 rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button