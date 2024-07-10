import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <>
     
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
            <div className="col-lg-3">
                <Link href={"/"}>
                <Image src="/img/smallflylogo.jpg" alt="logImage" className="logoimg" width={120} height={80}/>
                </Link>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                        <small>Mysore Rd, RV Vidyaniketan, Post, Bengaluru, Karnataka 560059</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                        <small>info@flyaviationacadmy.com</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                        <small>+ 91 6396850781</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none"
                    data-toggle="collapse" href="#navbar-vertical" style={{height: "67px", padding: "0 30px"}}>
                    <h5 className="text-primary m-0"><i className="fa fa-book-open mr-2"></i>Courses</h5>
                    <i className="fa fa-angle-down text-primary"></i>
                </a>
                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
                    id="navbar-vertical" style={{width: "calc(100% - 30px)", zIndex: "9"}}>
                    <div className="navbar-nav w-100">

                        <a href="" className="nav-item nav-link">Diploma in Hotel Management</a>
                        <a href="" className="nav-item nav-link">Diploma in Air hostess</a>
                        <a href="" className="nav-item nav-link">Diploma in Cabin crew</a>
                        <a href="" className="nav-item nav-link">Diploma in Airport Management</a>
                        <a href="" className="nav-item nav-link">Diploma in Travel & Tourism Management</a>
                        <a href="" className="nav-item nav-link">Diploma in Human Resources Management</a>
                        <a href="" className="nav-item nav-link">Diploma in Marketing Management</a>
                        <a href="" className="nav-item nav-link">Diploma in Metro Management</a>
                        <a href="" className="nav-item nav-link">Diploma in Web Designing</a>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    
                    <Link href={"/"} className="text-decoration-none d-block d-lg-none">
                        <Image className="logoimg" src="/img/smallflylogo.jpg" alt="" width={80} height={40} srcSet="" />
                        {/* <!-- <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1> --> */}
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav py-4">
                            <Link href={"/"} className="nav-item nav-link active pt-4">Home
                            </Link>
                            <Link href={"/course"} className="nav-item nav-link ">Courses
                            </Link>
                            
                            <Link href={"/features"} className="nav-item nav-link ">Features
                            </Link>
                            
                            <Link href={"/about"} className="nav-item nav-link">About Us
                            </Link>
                            
                            <Link href={"/contact"} className="nav-item nav-link ">Contact Us
                            </Link>
                        </div>
                        <Link className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href={"/register"}>Online Admission</Link>
                    </div>
                </nav>
            </div>
        </div>
    </div>
   
   </>
  )
}

export default Navbar
