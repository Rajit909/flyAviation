import React from 'react'
import Image from 'next/image'

const Welcomebanner = () => {
  return (
    <div className='flex gap-5 bg-white rounded-lg p-5 items-center '>
      <Image
      src='/images/logo.png'
      width={100}
      height={100}
      alt="images1"
      />
      
      <div>
      <h2><span className='font-bold text-[27px]'>Welcome to 
      <span className='text-purple-800 '>
       {" "}     Beaginer tech stack
      </span>
      </span></h2>
      <h2 className=' text-gray-500'>Learn to build more...</h2>
      </div>
    </div>
  )
}

export default Welcomebanner