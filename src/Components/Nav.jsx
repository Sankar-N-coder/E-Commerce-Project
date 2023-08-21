import React from 'react'
import {hamburger} from "../assets/icons"
import{navLinks} from "../Constants"
const Nav = () => {
  return (
   <header className=' w-full padding-x py-8 absolute z-10'>
    <nav className=' flex justify-between items-center max-container'>
        <a href="/">
            <p className=' font-palanquin text-2xl  font-bold'>Shopify</p>
        </a>
        <img src={hamburger} alt="" className=' h-[20px] hidden max-lg:block'/> 
        <ul className=' flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((element)=><li key={element.label}><a href={element.href}>{element.label}</a></li>)}
        </ul>
    </nav>
   </header>
  )
}

export default Nav