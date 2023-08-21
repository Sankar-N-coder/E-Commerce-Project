import React from 'react'

const ShoeCard = ({imgUrl,changeImg,bigShoeimg}) => {
    const handleClick=()=>{
        if(bigShoeimg!==imgUrl.bigShoe)
        {
            changeImg(imgUrl);
        }
    }
  return (
    <div className={`border-2 rounded-xl
    ${bigShoeimg===imgUrl?'border-coral-red':'border-transparent'}
    cursor-pointer max-sm:flex-1`} onClick={handleClick}>
       <div className=' flex items-center justify-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgUrl} alt="" className=' object-contain'/>
       </div>
    </div>
  )
}

export default ShoeCard