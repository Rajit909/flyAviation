import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Features = () => {
  return (
    <>
     <div className="container-fluid py-5" data-aos="fade-left">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Features</h5>
                <h1>Our Best Study Features</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-4 mb-4">
                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                        <Image width={400} height={100} className="img-fluid" src="/img/live classes.jpg" alt=""/>
                        <a className="blog-overlay text-decoration-none" href="">
                            <h5 className="text-white mb-3">Our Live video classNamees allows students to watch content at home
                                and attend lectures remotely.</h5>
                            <p className="text-primary m-0">Online Live classNamees</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                    <Image width={400} height={100} className="img-fluid" src="/img/recorded.jpg" alt=""/>
                        <a className="blog-overlay text-decoration-none" href="">
                            <h5 className="text-white mb-3">Our Recorded classNamees can be access by the students enrolled in
                                the course at any time, as long as the course is active and available.</h5>
                            <p className="text-primary m-0">Online Recorded classNamees</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 mb-4">
                    <div className="blog-item position-relative overflow-hidden rounded mb-2">
                    <Image width={400} height={100} className="img-fluid" src="/img/call.jpg" alt=""/>
                        <a className="blog-overlay text-decoration-none" href="">
                            <h5 className="text-white mb-3">We provide Call Support to our students all days and every time when they need</h5>
                            <p className="text-primary m-0">24*7 Call Support</p>
                        </a>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center ml-4'>

                <Link href={"/course"} >
                    <button className='btn btn-warning border border-dark'>
                    Explore Our Courses
                    </button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Features