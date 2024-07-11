import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Courses() {
  return (
    <>
     <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Courses</h5>
                <h1>Our Courses</h1>
            </div>
            <div className="row">
                
                <div className="col-lg-4 col-md-6 mb-4">
                <Link href={"/register"}>
                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/hotel-managment.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                {/* <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small> */}
                            </div>
                            <a className="h5" href="">Diploma in Hotel Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    {/* <h5 className="m-0">Rs 40,000</h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Link href={"/register"}>

                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/air.jpeg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                {/* <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small> */}
                            </div>
                            <a className="h5" href="/register">Diploma in Air hostess</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    {/* <h5 className="m-0">Rs 45,000</h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Link href={"/register"}>

                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/cabin.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                {/* <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small> */}
                            </div>
                            <a className="h5" href="/register">Diploma in Cabin crew</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    {/* <h5 className="m-0">Rs 37,000</h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Link href={"/register"}>

                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/airport.jpeg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                {/* <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small> */}
                            </div>
                            <a className="h5" href="/register">Diploma in Airport Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    {/* <h5 className="m-0">Rs 35,000</h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Link href={"/register"}>

                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/Travel-and-Tourism.png" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                {/* <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small> */}
                            </div>
                            <a className="h5" href="/register">Diploma in Travel & Tourism Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    {/* <h5 className="m-0">Rs 35,000</h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Link href={"/register"}>

                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/hr.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                {/* <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small> */}
                            </div>
                            <a className="h5" href="/register">Diploma in Human Resources Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    {/* <h5 className="m-0">Rs 15,000</h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Link href={"/register"}>

                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/marketing-management.jpeg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                {/* <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small> */}
                            </div>
                            <a className="h5" href="/register">Diploma in Marketing Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    {/* <h5 className="m-0">Rs 25,000</h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Link href={"/register"}>

                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/metro-management.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                {/* <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small> */}
                            </div>
                            <a className="h5" href="/register">Diploma in Metro Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    {/* <h5 className="m-0">Rs 35,000</h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <Link href={"/register"}>

                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/Web-Design.png" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                {/* <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small> */}
                            </div>
                            <a className="h5" href="/register">Diploma in Web<br/> Designing</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    {/* <h5 className="m-0">Rs 30,000</h5> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Courses