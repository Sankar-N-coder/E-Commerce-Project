import React from 'react'
import {products} from '../Constants'
import ShoeCard from '../Components/ShoeCard'
import { star } from '../assets/icons'
const PopularProducts = () => {
  return (
    <section id='products'>
    <div className=' max-container'>
        <div className=' flex flex-col gap-5'>
          <div className=' flex gap-2 text-4xl font-palanquin font-medium'>
            <h1>Our</h1><span className=' text-coral-red'>Popular</span><h1>Products</h1>
          </div>
          <p className='xl:w-1/2 max-lg:w-2/3 text-slate-gray font-montserrat'>Experience top notch quality and style with our sought after selctions .Discover a world of comfort,design and value</p>
        </div>
        <div className=' flex gap-4 mt-10'>
          {products.map((product)=><div><ShoeCard imgUrl={product.imgURL} bigShoeimg=""/>
          <div className=' flex mt-1'><img src={star} alt="" className=' pl-1 w-[24px]'/><span>(4.5)</span> </div>
          <p className=' mt-1 font-montserrat pl-1'>{product.name}</p>
          <p className=' text-coral-red pl-1'>{product.price}</p>
          </div>
          )}
        </div>
    </div>
    </section>
  )
}

export default PopularProducts