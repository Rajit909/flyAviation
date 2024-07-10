
import Image from 'next/image'
import React from 'react'

const WelcomeBannerDashboard = ({user}) => {
  return (
    <div className='bg-purple-100 rounded-[10px] p-5 m-5 flex gap-5 items-center'>
      <Image
      src='/images/logo.png'
      width={100}
      height={100}
      alt="images1"
      />
      <div className="text-[32px] font-light">
        Welcome Back,
        <span className=' font-semibold text-[blue]'>{user?.fullName}</span>
        <h2 className="font-light text-[16px] text-slate-500">Let s Begin Learning where you left off.
        </h2>
      </div>
    </div>
  )
}

export default WelcomeBannerDashboard
