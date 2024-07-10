import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import React, {useState, useEffect } from 'react'

const SideBanners = () => {
    const [sideBannerList, setSideBannerList] = useState();
    useEffect(() => {
        getSideBanners()
    }, [])

    const getSideBanners = () => {
        GlobalApi.getSideBanner().then(res => {
            setSideBannerList(res?.sideBanners);
                console.log(res);
        })
    }
  return (
      <div className='flex flex-col gap-10 mt-2'>
      {sideBannerList?.length > 0
          ? sideBannerList.map((item, index) => (
              <div key={index} className='bg-white p-2 rounded-xl'>
                <Image 
                src={item?.banner.url}
                width={350}
                height={150}
                alt='banner'
                className='rounded-xl h-[200px]'
                />

              </div>
            ))
          : [1, 2, 3].map((item, index) => (
            <div className="p-2 bg-white" key={index}>

              <div
          
                className="w-full h-40 rounded-xl bg-slate-200 animate-pulse"
                >
                </div>
              </div>
            ))}
    </div>
  )
}

export default SideBanners