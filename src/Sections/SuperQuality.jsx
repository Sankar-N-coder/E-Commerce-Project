import React from 'react'
import { shoe8 } from '../assets/images'
import Button from "../Components/Button"
const SuperQuality = () => {
  return (
  <section className=' max-container'>
    <div className=' flex'>
      <div className=' xl:w-3/4 w-full mt-4 xl:text-4xl text-2xl font-montserrat font-semibold'>
        <div><p>We Provide You</p><span className=' text-coral-red'>Super Quality</span><p>Shoes</p></div>
        <div className=' font-palanquin font-thin text-slate-gray xl:text-xl w-3/4 mt-4 text-lg'>
          Ensuring premium comfort and style ,our meticulosy crafted footwear is designed to elevate your Experience providing you with unmatched quality and a touch of elegance
        </div>
        <div className=' mt-4'>
          <Button label="View details"/>
        </div>
      </div>
      <div className=' flex justify-center items-center'>
        <img src={shoe8} alt="" />
      </div>
    </div>
  </section>
  )
}

export default SuperQuality