"use client";
import { useRouter } from "next/navigation";
import { React, useState } from "react";

const Contact = () => {
  const [isPending, setIsPending] = useState();
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        alert("Message Sent");
        Object.keys(userData).forEach((key)=>{
          setUserData((prevData)=> ({...prevData, [key]: " "}))
        })

        router.push("/contact");
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
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5
              className="text-primary text-uppercase mb-3"
              style={{ letterSpacing: "5px" }}
            >
              Contact
            </h5>
            <h1>Contact For Any Query</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form bg-secondary rounded p-5">
                <div id="success"></div>
                <form onSubmit={contactForm}>
                  <div className="control-group">
                    <input
                      onChange={handleInputs}
                      type="text"
                      className="form-control border-0 p-4"
                      id="name"
                      name="name"
                      value={userData.name}
                      placeholder="Your Name"
                      required="required"
                      data-validation-required-message="Please enter your name"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      onChange={handleInputs}
                      type="email"
                      className="form-control border-0 p-4"
                      id="email"
                      name="email"
                      value={userData.email}
                      required
                      placeholder="Your Email"
                      data-validation-required-message="Please enter your email"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      onChange={handleInputs}
                      type="text"
                      className="form-control border-0 p-4"
                      id="subject"
                      name="subject"
                      value={userData.subject}
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      onChange={handleInputs}
                      className="form-control border-0 py-3 px-4"
                      rows="5"
                      id="message"
                      name="message"
                      value={userData.message}
                      placeholder="Message"
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">
                                   
                                   {isPending ? 
                                   <div className="text-md">

                                   <span
                                   className="spinner-border spinner-border-sm mb-1 mr-2"
                                   role="status"
                                   aria-hidden="true"
                                   ></span>
                                 Sending...
                                   </div>
                                   : 
                                   'Send Message'}
                                </button>
                
                      
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
