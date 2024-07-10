import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <Image className="img-fluid rounded mb-4 mb-lg-0" src="/img/flylogo.jpg" alt="" width={600} height={400} />
                </div>
                <div className="col-lg-7">
                    <div className="text-left mb-4">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>About Us</h5>
                        <h1>Fly Aviation Academy</h1>
                    </div>
                    <p>Fly Aviation Academy was established in 2016 as an NGO and registered as an education trust in
                        the Government of India in 2021. Some skilled and highly trained instructors and other
                        Knowledgeable professors bring out the best in all the students. Fly Aviation Academy aims at
                        bringing the world to you by providing courses that are globally relevant. It provides Industry
                        oriented, professional training and skill development in the emerging sectors like Aviation,
                        Hospitality and Travel.</p>
                    <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About