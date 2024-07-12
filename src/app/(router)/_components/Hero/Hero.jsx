import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="container-fluid p-0 pb-5 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active" style={{minHeight: "300px"}}>
                    <Image className="position-relative w-100" src="/img/slider/slider2.jpg" width={500} height={500}
                        style={{minHeight: "300px", objectFit: "cover"}}/>
                    {/* <!-- <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" style="width: 100%; max-width: 900px;">
                            <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 className="display-3 text-white mb-md-4">Best Education From Your Home</h1>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div> --> */}
                </div>
                <div className="carousel-item" style={{minHeight: "300px"}}>
                    <Image className="position-relative w-100" src="/img/slider/slider-13.jpg"
                                        fill={true}       style={{minHeight: "300px", objectFit: "cover"}}/>
                    {/* <!-- <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" style="width: 100%; max-width: 900px;">
                            <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 className="display-3 text-white mb-md-4">Best Online Learning Platform</h1>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div> --> */}
                </div>
                <div className="carousel-item" style={{minHeight: "300px"}}>
                    <Image className="position-relative w-100" src="/img/slider/slider-17.jpg"
                         fill={true}     style={{minHeight: "300px", objectFit: "cover"}}/>
                    {/* <!-- <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" style="width: 100%; max-width: 900px;">
                            <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 className="display-3 text-white mb-md-4">New Way To Learn From Home</h1>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div> --> */}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero
