"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const HomePage = () => {
  return (
    <>
      <main>
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
                    
                    <Link href="" className="text-decoration-none d-block d-lg-none">
                        <Image className="logoimg" src="/img/smallflylogo.jpg" alt="" width={80} height={40} srcSet="" />
                        {/* <!-- <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1> --> */}
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="#" className="nav-item nav-link ">Placement</a>
                            <a href="#" className="nav-item nav-link">Certificate</a>
                            <a href="about.html" className="nav-item nav-link">About Us</a>
                            <a href="contact.html" className="nav-item nav-link">Contact Us</a>
                        </div>
                        <a className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="">Online Admission</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>

{/* hero */}
    <div className="container-fluid p-0 pb-5 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                <li data-target="#header-carousel" data-slide-to="1"></li>
                <li data-target="#header-carousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active" style={{minHeight: "300px"}}>
                    <Image className="position-relative w-100" src="/img/slider/aviation-bg.jpg" fill={true}
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

    {/* about */}
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

    {/* partners */}
    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Placements</h5>
                <h1>Top Companies In Which Our Students Placed</h1>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <Image className="img-fluid" src="/img/companies/mutut.png" alt="" width={300} height={100}/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Muthoot Finance</h4>
                            <span>8+ Students</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <Image className="img-fluid" src="/img/companies/emirates.png" alt="" width={300} height={100}/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Emirates</h4>
                            <span>5+ Students</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <Image className="img-fluid" src="/img/companies/hdfcc.png" alt="" width={300} height={100} />
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">HDFC Bank</h4>
                            <span>18+ Students</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <Image className="img-fluid" src="/img/companies/indigo.png" alt="" width={300} height={100} />
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">IndiGo</h4>
                            <span>6+ Students</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <Image className="img-fluid" src="/img/companies/jet airways.png" alt="" width={300} height={100} />
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Jet Airways</h4>
                            <span>6+ Students</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <Image className="img-fluid" src="/img/companies/kotak.png" alt="" width={300} height={100} />
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Kotak</h4>
                            <span>7+ Students</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <Image className="img-fluid" src="/img/companies/qatar.png" alt="" width={300} height={100} />
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Qatar Airways</h4>
                            <span>3+ Students</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <Image className="img-fluid" src="/img/companies/spice jet.png" alt="" width={300} height={100} />
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Spicejet</h4>
                            <span>7+ Students</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* course */}

    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Courses</h5>
                <h1>Our Courses</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/hotel-managment.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Diploma in Hotel Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    <h5 className="m-0">Rs 40,000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/air.jpeg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Diploma in Air hostess</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    <h5 className="m-0">Rs 45,000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/cabin.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Diploma in Cabin crew</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    <h5 className="m-0">Rs 37,000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/airport.jpeg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Diploma in Airport Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    <h5 className="m-0">Rs 35,000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/Travel-and-Tourism.png" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Diploma in Travel & Tourism Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    <h5 className="m-0">Rs 35,000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/hr.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Diploma in Human Resources Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    <h5 className="m-0">Rs 15,000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/marketing-management.jpeg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Diploma in Marketing Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    <h5 className="m-0">Rs 25,000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/metro-management.jpg" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Diploma in Metro Management</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    <h5 className="m-0">Rs 35,000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="rounded overflow-hidden mb-2">
                        <Image width={600} height={200} className="img-fluid" src="/img/cources/Web-Design.png" alt=""/>
                        <div className="bg-secondary p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                                <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                            </div>
                            <a className="h5" href="">Diploma in Web<br/> Designing</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small>
                                    </h6>
                                    <h5 className="m-0">Rs 30,000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* register */}
    <div className="container-fluid bg-registration py-5" style={{margin:"90px 0"}}>
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Need Any Courses</h5>
                        <h1 className="text-white">10% Off For New Students</h1>
                    </div>
                    <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem
                        ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <ul className="list-inline text-white m-0">
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam
                        </li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.
                        </li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-light text-center p-4">
                            <h1 className="m-0">Sign Up Now</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-primary p-5">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="Your name"
                                        required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control border-0 p-4" placeholder="Your email"
                                        required="required" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select border-0 px-4" style={{height: "47px"}}>
                                        <option defaultValue="Select a course"/>
                                        <option value="1">Diploma in Hotel Management</option>
                                        <option value="2">Diploma in Air hostess</option>
                                        <option value="3">Diploma in Cabin crew</option>
                                        <option value="4">Diploma in Airport Management</option>
                                        <option value="5">Diploma in Travel & Tourism Management</option>
                                        <option value="6">Diploma in Human Resources Management</option>
                                        <option value="7">Diploma in Marketing Management</option>
                                        <option value="8">Diploma in Metro Management</option>
                                        <option value="9">Diploma in Web Designing</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="btn btn-dark btn-block border-0 py-3" type="submit">Sign Up
                                        Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* testemonials */}
    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Testimonial</h5>
                <h1>What Say Our Students</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="owl-carousel testimonial-carousel">
                        <div className="text-center">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-normal mb-4">The master-builder of human happines no one rejects,
                                dislikes avoids pleasure itself, because it is very pursue pleasure.</h4>
                            {/* <img className="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt="" /> */}
                            <h5 className="m-0">Arvind kumar</h5>
                            <span>Web Designer</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-normal mb-4">They have got my project on time with the competition
                                with a sed highly skilled, and experienced & professional team.</h4>
                            {/* <img className="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" alt=""/> */}
                            <h5 className="m-0">Priyanshi Agrawal</h5>
                            <span>Cabin Crew</span>
                        </div>
                        <div className="text-center">
                            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                            <h4 className="font-weight-normal mb-4">Explain to you how all this mistaken idea of denouncing
                                pleasure and praising pain was born and I will give you completed.</h4>
                            {/* <img className="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt=""/> */}
                            <h5 className="m-0">Rohit Mourya</h5>
                            <span>HR</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* features */}

    <div className="container-fluid py-5">
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
            </div>
        </div>
    </div>

    {/* footer */}

    <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{marginTop: "5px"}}>
        <div className="row pt-5">
            <div className="col-lg-7 col-md-12">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing: '5px'}}>Get In Touch</h5>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>Mysore Rd, RV Vidyaniketan, Post, Bengaluru,
                            Karnataka 560059</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+ 91 6396850781</p>
                        <p><i className="fa fa-envelope mr-2"></i> info@flyaviationacadmy.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <a className="btn btn-outline-light btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-square mr-2" href="#"><i
                                    className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-square mr-2" href="#"><i
                                    className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style={{letterSpacing:"5px"}}>Our Courses</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Diploma in Hotel
                                Management</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Diploma in Air
                                hostess</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Diploma in Cabin
                                crew</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Diploma in Airport
                                Management</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Diploma in Travel
                                & Tourism Management</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Diploma in Human
                                Resources Management</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Diploma in
                                Marketing Management</a>
                            <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Diploma in Metro
                                Management</a>
                            <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>Diploma in Web
                                Designing</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-12 mb-5">
                <h5 className="text-primary text-uppercase mb-4"  style={{letterSpacing:"5px"}}>Newsletter</h5>
                <p>Stay Updated with Us<br/>
                    Subscribe to our monthly newsletter to get the latest updates, exclusive content, and special offers
                    delivered straight to your inbox. Stay informed about our newest products, upcoming events, and
                    expert insights. Join our community and never miss out on what &apos; s happening!</p>
                <div className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control border-light p-[30px]"
                            placeholder="Your Email Address"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary px-4">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{borderColor: "rgba(256, 256, 256, .1) !important"}}>
        <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">&copy; <a href="#">flyaviationacademy</a><br/> All Rights Reserved <a href="https://flyaviationacademy.com/">Fly Aviation Institute India Pvt. Ltd.</a>
                </p>
            </div>
            <div className="col-lg-6 text-center text-md-right">
                <ul className="nav d-inline-flex">
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">Privacy</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">Terms</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white py-0" href="#">Help</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

      </main>
    </>
  );
};

export default HomePage;
