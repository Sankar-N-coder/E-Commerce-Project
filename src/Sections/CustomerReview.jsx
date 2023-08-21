import React from 'react'
import { reviews } from '../Constants'
import { star } from '../assets/icons'
const CustomerReview = () => {
  return (
    <section className=' max-container' id="about-us">
      <div>
        <h1 className=' font-palanquin text-4xl font-semibold'>What Our <span className=' text-coral-red'>Customers </span>Say?</h1>
        <p className='w-1/3 max-xl:w-3/4 mx-4 text-slate-gray mt-3'>Hear geniune stories from our satisfied customers about their exceptional 
        expereince with us</p>
      </div>
        <div className=' flex flex-col items-center justify-evenly gap-10 mt-10'>
          {reviews.map((review)=>(
            <div className='flex flex-col items-center justify-center'>
              <img src={review.imgURL} alt="" className=' rounded-full w-32'/>
              <p className='w-1/2 mt-3 ml-10 font-montserrat text-slate-gray'>{review.feedback}</p>
              <div className=' flex items-center gap-2'><img src={star} alt="" className=' w-[20px]' />
              <h1>({review.rating})</h1>
              </div>
              <h1 className=' mt-3 text-xl font-semibold font-palanquin'>{review.customerName}</h1>
            </div>
          ))}
        </div>
    </section>
  )
}

export default CustomerReview