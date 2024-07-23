"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Footer = () => {
    const [isPending, setIsPending] = useState();
    const router = useRouter();
    const [userData, setUserData] = useState({
      email: "",
    });
  
    const handleInputs = (e) => {
      const { id, value } = e.target;
      setUserData((prevData) => ({ ...prevData, [id]: value }));
    };
    console.log(userData);
  
    const contactForm = async (e) => {
      e.preventDefault();
      setIsPending(true);
      try {
        const formData = new FormData();
        Object.keys(userData).forEach((key)=>{
          formData.append(key, userData[key])
        })
  
        const res = await fetch("/api/subscribe", {
          method: "POST",
          body: formData,
        });
  
        const data = await res.json();
        if (data.success) {
          alert("Thanks For Subscribing Us!");
          Object.keys(userData).forEach((key) => {
            setUserData((prevData) => ({ ...prevData, [key]: " " }));
          });
          router.push("/");
        } else {
          alert("Failed to submit Application.");
        }
      } catch (error) {
        alert("Error", error);
      } finally {
        setIsPending(false);
      }
    };
  
  return (
    <>
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
                        <form className="input-group" onSubmit={contactForm}>

                        <input type="email" name='email' id='email' className="form-control border-light p-[30px]"
                            placeholder="Your Email Address" required onChange={handleInputs}/>
                        <div className="input-group-append">
                            <button className="btn btn-primary px-4">
                            {isPending ? 
                                   <div className="text-md">

                                   <span
                                   className="spinner-border spinner-border-sm mb-1 mr-2"
                                   role="status"
                                   aria-hidden="true"
                                   ></span>
                                 Subscribing...
                                   </div>
                                   : 
                                   'Subscribe'}
                            </button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{borderColor: "rgba(256, 256, 256, .1) !important"}}>
        <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                <p className="m-0 text-white">&copy; <a href="/">flyaviationacademy</a><br/> All Rights Reserved 
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
    </>
  )
}

export default Footer