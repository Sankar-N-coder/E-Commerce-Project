import React from 'react'
import { footerLinks,socialMedia } from '../Constants'
const Footer = () => {
  return (
    <footer className=' pt-3' id="contact-us">
        <div className=' font-semibold font-palanquin text-white'>
          <div className=' w-3/4 xl:w-[300px]'>
            <h1 className=' text-2xl'>Shopify</h1>
            <p className=' font-light mt-3 font-montserrat'>Get shoes ready for the new term at your 
              nearest nike store Find your perfect size in store Get rewards
            </p>
          </div>
          <div className=' flex gap-8 mt-4'>
            {socialMedia.map((icon)=><img src={icon.src} className=' bg-white rounded-full w-[30px] p-1'/>)}
          </div>
          <div className=' flex gap-6 mt-14'>
              {footerLinks.map((footer)=>(<div>
                <p className=' text-2xl font-montserrat'>{footer.title}</p>
                <ul className=' mt-4'>
                  {footer.links.map((link)=>(<li key={link.name} className=' font-thin'><a href={link.link}>{link.name}</a></li>))}
                </ul>
              </div>))}
          </div>
        </div>
    </footer>
  )
}

export default Footer