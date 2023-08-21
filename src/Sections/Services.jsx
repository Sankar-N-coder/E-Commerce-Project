import React from 'react'
import {services} from '../Constants'
const Services = () => {
  return (
    <section>
      <div className=' flex gap-4'>
        {services.map((service)=>(
          <div className=' shadow-3xl p-5  rounded-3xl' key={service}>
            <img src={service.imgURL} alt=""  className=' bg-coral-red rounded-full p-3'/>
            <p className=' mt-4 font-palanquin text-xl font-semibold'>{service.label}</p>
            <p className=' w-1/2 mt-4 text-slate-gray mb-6'>{service.subtext}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services