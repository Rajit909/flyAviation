"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [highmarkFile, setHighmarkFile] = useState(null);
  const [intermarkFile, setIntermarkFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [userData, setUserData] = useState({
    name: "",
    fname: "",
    mname: "",
    gender: "",
    email: "",
    phone: "",
    aadhar: "",
    qfn: "",
    address: "",
    state: "",
    country: "",
    course: "",
  });

  console.log(userData);

  const handleHighmarkfileChange = (e) => {
    const file = e.target.files[0];
    setHighmarkFile(file);
  };
  const handleIntermarkfileChange = (e) => {
    const file = e.target.files[0];
    setIntermarkFile(file);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("highmark", highmarkFile);
      formData.append("intermark", intermarkFile);
      Object.keys(userData).forEach((key) => {
        formData.append(key, userData[key]);
      });

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response not Found?");
      }

      const result = await response.json();
      if (result.success) {
        alert(result.message);
        Object.keys(userData).forEach((key) => {
          setUserData((prevData) => ({ ...prevData, [key]: " " }));
        });
        setHighmarkFile("");
        setIntermarkFile("");

        // Redirect to payment page
        router.push("/payment");
      } else {
        alert("Failed to submit Application.");
      }
    } catch (error) {
      console.log("Error Submitting form", error);
      alert("An error while submitting form. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="container-fluid bg-registration py-5"
        style={{ margin: "40px 0" }}
      >
        <div className="container py-5">
          <div className="">
            <div className="">
              <div className="mb-4">
                <h5
                  className="text-primary text-uppercase mb-3"
                  style={{ letterSpacing: "5px" }}
                >
                  Need Any Courses
                </h5>
                <h1 className="text-white">
                  Affordable price For New Students
                </h1>
              </div>
            </div>
            <div className="">
              <div className="card border-0">
                <div className="card-header bg-light text-center p-4">
                  <h1 className="m-0">Register Now</h1>
                </div>

                <div className="card-body rounded-bottom bg-primary p-5 col-lg-12">
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="row g-3 my-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control border-0 p-4"
                            id="name"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control border-0 p-4"
                            id="fname"
                            name="fname"
                            value={userData.fname}
                            onChange={handleChange}
                            placeholder="Father's name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control border-0 p-4"
                            name="mname"
                            id="mname"
                            value={userData.mname}
                            onChange={handleChange}
                            placeholder="Mother's name"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="form-group">
                            <select
                              className="custom-select border-0 px-4"
                              style={{ height: "47px" }}
                              id="gender"
                              name="gender"
                              value={userData.gender}
                              onChange={handleChange}
                            >
                              <option hidden>Select Gender</option>
                              <option value="Female">Female</option>
                              <option value="Male">Male</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control border-0 p-4"
                            id="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Your email"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control border-0 p-4"
                            name="phone"
                            id="phone"
                            pattern="[0-9]{10}"
                            value={userData.phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select
                            className="custom-select border-0 px-4"
                            style={{ height: "47px" }}
                            name="qfn"
                            id="qfn"
                            value={userData.qfn}
                            onChange={handleChange}
                          >
                            <option hidden>Select Qualification</option>
                            <option value="High School">High School</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Graduation">Graduation</option>
                            <option value="Post-Graduation">
                              Post-Graduation
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control border-0 p-4"
                            name="aadhar"
                            id="aadhar"
                            pattern="[0-9]{12}"
                            value={userData.aadhar}
                            onChange={handleChange}
                            placeholder="Aadhar no."
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="pl-4 mb-4 py-4 bg-light form-control-file rounded">
                            <h6 className="mb-2 pb-1 b">
                              10 <sup>th</sup> MarkSheet{" "}
                            </h6>
                            <input
                              type="file"
                              id="highmark"
                              name="highmark"
                              accept=".jpg, .jpeg, .png, .pdf"
                              onChange={handleHighmarkfileChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className=" mb-4 pl-4 py-4 bg-light form-control-file rounded">
                            <h6 className="mb-2 pb-1 b">XII MarkSheet </h6>
                            <input
                              type="file"
                              id="intermark"
                              name="intermark"
                              accept=".jpg, .jpeg, .png, .pdf"
                              onChange={handleIntermarkfileChange}
                              required
                            />{" "}
                            <br />
                            <small>
                              अगर आप सिर्फ 10वीं पास हैं तो यहां भी 10वीं की
                              मार्कशीट अपलोड करें |
                            </small>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="address"
                            name="address"
                            value={userData.address}
                            onChange={handleChange}
                            cols="48"
                            rows="5"
                            placeholder="Enter your address"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select
                            className="custom-select border-0 px-4"
                            style={{ height: "47px" }}
                            // value="state"
                            id="state"
                            name="state"
                            value={userData.state}
                            onChange={handleChange}
                          >
                            <option hidden>Select State</option>
                            <option value="ANDHRA PRADESH">
                              ANDHRA PRADESH
                            </option>
                            <option value="ASSAM">ASSAM</option>
                            <option value="ARUNACHAL PRADESH">
                              ARUNACHAL PRADESH
                            </option>
                            <option value="BIHAR">BIHAR</option>
                            <option value="GUJRAT">GUJRAT</option>
                            <option value="HARYANA">HARYANA</option>
                            <option value="HIMACHAL PRADESH">
                              HIMACHAL PRADESH
                            </option>
                            <option value="JAMMU KASHMIR">
                              JAMMU &amp; KASHMIR
                            </option>
                            <option value="KARNATAKA">KARNATAKA</option>
                            <option value="KERALA">KERALA</option>
                            <option value="MADHYA PRADESH">
                              MADHYA PRADESH
                            </option>
                            <option value="MAHARASHTRA">MAHARASHTRA</option>
                            <option value="MANIPUR">MANIPUR</option>
                            <option value="MEGHALAYA">MEGHALAYA</option>
                            <option value="MIZORAM">MIZORAM</option>
                            <option value="NAGALAND">NAGALAND</option>
                            <option value="ORISSA">ORISSA</option>
                            <option value="PUNJAB">PUNJAB</option>
                            <option value="RAJASTHAN">RAJASTHAN</option>
                            <option value="SIKKIM">SIKKIM</option>
                            <option value="TAMIL NADU">TAMIL NADU</option>
                            <option value="TRIPURA">TRIPURA</option>
                            <option value="UTTAR PRADESH">UTTAR PRADESH</option>
                            <option value="WEST BENGAL">WEST BENGAL</option>
                            <option value="DELHI">DELHI</option>
                            <option value="GOA">GOA</option>
                            <option value="PONDICHERY">PONDICHERY</option>
                            <option value="LAKSHDWEEP">LAKSHDWEEP</option>
                            <option value="DAMAN and DIU">
                              DAMAN &amp; DIU
                            </option>
                            <option value="DADRA and NAGAR">
                              DADRA &amp; NAGAR
                            </option>
                            <option value="CHANDIGARH">CHANDIGARH</option>
                            <option value="ANDAMAN and NICOBAR">
                              ANDAMAN &amp; NICOBAR
                            </option>
                            <option value="UTTARANCHAL">UTTARANCHAL</option>
                            <option value="JHARKHAND">JHARKHAND</option>
                            <option value="CHATTISGARH">CHATTISGARH</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control border-0 p-4"
                            id="country"
                            name="country"
                            value={userData.country}
                            onChange={handleChange}
                            placeholder="Country"
                            pattern="[A-Za-z\s\-]{2,}"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <select
                            className="custom-select border-0 px-4"
                            style={{ height: "47px" }}
                            id="course"
                            name="course"
                            value={userData.course}
                            onChange={handleChange}
                            // value="course"
                          >
                            <option defaultValue="Select a course">
                              Select course
                            </option>
                            <option value="Diploma in Hotel Management">
                              Diploma in Hotel Management
                            </option>
                            <option value="Diploma in Air hostess">
                              Diploma in Air hostess
                            </option>
                            <option value="Diploma in Cabin crew">
                              Diploma in Cabin crew
                            </option>
                            <option value="Diploma in Airport Management">
                              Diploma in Airport Management
                            </option>
                            <option value="Diploma in Travel & Tourism Management">
                              Diploma in Travel & Tourism Management
                            </option>
                            <option value="Diploma in Human Resources Management">
                              Diploma in Human Resources Management
                            </option>
                            <option value="Diploma in Marketing Management">
                              Diploma in Marketing Management
                            </option>
                            <option value="Diploma in Metro Management">
                              Diploma in Metro Management
                            </option>
                            <option value="Diploma in Web Designing">
                              Diploma in Web Designing
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4"> </div>

                      <div className="col-md-4 mt-2">
                        <button
                          className="btn btn-dark btn-block border-0 py-3"
                          type="submit"
                        >
                          {isLoading ? (
                            <div className="text-md">
                              <span
                                className="spinner-border spinner-border-sm mb-1 mr-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Please wait...
                            </div>
                          ) : (
                            "Register now"
                          )}
                        </button>
                      </div>
                      <div className="col-md-4"> </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
