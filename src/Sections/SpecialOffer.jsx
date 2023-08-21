import React from 'react'
import Button from "../Components/Button"
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
const SpecialOffer = () => {
  return (
    <section className=' max-container flex max-xl:flex-col-reverse gap-10 items-center'>
      <div>
        <img src={offer} alt="" />
      </div>
      <div>
       <div className=' flex gap-4 text-4xl font-palanquin font-semibold'><h1 className=' text-coral-red'>Special</h1><span>Offer</span></div>
       <div className=' text-slate-gray font-montserrat md:gap-10'>
        <p className=' mt-2 pr-20'>Embarks on a Shopping journey that redefines your experince with unbeatable deals From premier selections to incredible
          savings we offer un paralled value that sets us upart </p>
          <p className=' mt-2 mr-20'>Navigate a realm of possiblites designed to fullfil your unique desires,surpassing
          the loftiest expectation Your Journey with us is nothing sort of Exceptional</p>
       </div>
       <div className=' flex mt-3 gap-10'>
        <Button label="Shop now" iconUrl={arrowRight}/>
        <button className=' p-5 border-2 rounded-full font-palanquin text-xl text-slate-gray'>Learn more</button>
       </div>
      </div>
    </section>
  )
}

export default SpecialOffer