import React from 'react'
import Button from '../Components/Button'
import ShoeCard from '../Components/ShoeCard'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../Constants'
import { bigShoe1 } from '../assets/images'
import { useState } from 'react'
const Hero = () => {
  const  [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
   <section id='home' className=' w-full  px-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
    <div className=' flex flex-col relative xl:w-2/5 justify-center items-start w-full max-xl:padding-x pt-28'>
      <p className=' font-montserrat text-lg text-coral-red'>Our summer Collection</p>
      <h1 className=' mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[2] font-bold'>
        <span className=' xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
        <br />
        <span className=' text-coral-red inline-block mt-3'>Sports </span> Shoes
      </h1>
      <p className=' font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals,quality comfort and innovation for your active life</p>
      <Button label="Shop now" iconUrl={arrowRight}/>
      <div className=' flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {statistics.map((element,index)=>(<div key={index}>
          <p className=' text-4xl font-palanquin font-bold'>{element.value}</p>
          <p className=' leading-7 font-montserrat text-slate-gray'>{element.label}</p>
        </div>))}
      </div>
    </div>
    <div className=' relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
      <img src={bigShoeImg} alt="" className=' relative z-10 object-contain'/>
      <div className=' flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%] max-sm:p-4'>
        {shoes.map((shoe,index)=>(
        <div key={index}>
          <ShoeCard imgUrl={shoe.bigShoe} changeImg={(e) => {setbigShoeImg(e)}} bigShoeimg={bigShoeImg} />
        </div>))}
      </div>
    </div>
   </section>
  )
}

export default Hero