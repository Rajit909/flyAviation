import React from "react";

const Register = () => {
  return (
    <>
      <div
        className="container-fluid bg-registration py-5"
        style={{ margin: "90px 0" }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5
                  className="text-primary text-uppercase mb-3"
                  style={{ letterSpacing: "5px" }}
                >
                  Need Any Courses
                </h5>
                <h1 className="text-white">10% Off For New Students</h1>
              </div>
              <p className="text-white">
                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                dolor
              </p>
              <ul className="list-inline text-white m-0">
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Labore eos
                  amet dolor amet diam
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Etsea et sit
                  dolor amet ipsum
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Diam dolor
                  diam elitripsum vero.
                </li>
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="card border-0">
                <div className="card-header bg-light text-center p-4">
                  <h1 className="m-0">Register Now</h1>
                </div>
                <div className="card-body rounded-bottom bg-primary p-5">
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Your name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Father's name"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Mother's name"
                        required="required"
                      />
                    </div>

                    <div className="form-group">
                      <div className="col-md-6 mb-4 py-2 bg-light form-control-file rounded">
                        <h6 className="mb-2 pb-1 b">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="option1"
                          />
                          <label
                            className="form-check-label"
                            for="femaleGender"
                          >
                            Female
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="option2"
                          />
                          <label className="form-check-label" for="maleGender">
                            Male
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="otherGender"
                            value="option3"
                          />
                          <label className="form-check-label" for="otherGender">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control border-0 p-4"
                        placeholder="Your email"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-control border-0 p-4"
                        placeholder="Phone"
                        required="required"
                      />
                    </div>

                    <div className="form-group">
                      <select
                        className="custom-select border-0 px-4"
                        style={{ height: "47px" }}
                      >
                        <option defaultValue="Select Qualification">
                          Select Qualification
                        </option>
                        <option value="1">High School</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Diploma</option>
                        <option value="4">Graduation</option>
                        <option value="5">Post-Graduation</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <div className="col-md-6 mb-4 py-2 bg-light form-control-file rounded">
                        <h6 className="mb-2 pb-1 b">Upload Aadhar </h6>
                        <input type="file" name="aadhar" id="aadhar" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-6 mb-4 py-2 bg-light form-control-file rounded">
                        <h6 className="mb-2 pb-1 b">X MarkSheet </h6>
                        <input type="file" name="aadhar" id="aadhar" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-6 mb-4 py-2 bg-light form-control-file rounded">
                        <h6 className="mb-2 pb-1 b">XII MarkSheet </h6>
                        <input type="file" name="aadhar" id="aadhar" required />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-md-6 mb-4 py-2 bg-light form-control-file rounded">
                        <h6 className="mb-2 pb-1 b">Upload Aadhar </h6>
                        <input type="file" name="aadhar" id="aadhar" required />
                      </div>
                    </div>

                    

                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="address"
                        id="address"
                        cols="48"
                        rows="5"
                        placeholder="Enter your address"
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <select
                        className="custom-select border-0 px-4"
                        style={{ height: "47px" }}
                        value="state"
                        id="state"
                      >
                        <option defaultValue="Select State">
                            Select State
                          </option>
                           <option value="ANDHRA PRADESH">ANDHRA PRADESH</option>
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
                          <option value="MADHYA PRADESH">MADHYA PRADESH</option>
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
                          <option value="DAMAN and DIU">DAMAN &amp; DIU</option>
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


                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control border-0 p-4"
                        placeholder="Country"
                        required
                      />
                    </div>

             

                    <div className="form-group">
                      <select
                        className="custom-select border-0 px-4"
                        style={{ height: "47px" }}
                      >
                        <option defaultValue="Select a course">
                          Select course
                        </option>
                        <option value="1">Diploma in Hotel Management</option>
                        <option value="2">Diploma in Air hostess</option>
                        <option value="3">Diploma in Cabin crew</option>
                        <option value="4">Diploma in Airport Management</option>
                        <option value="5">
                          Diploma in Travel & Tourism Management
                        </option>
                        <option value="6">
                          Diploma in Human Resources Management
                        </option>
                        <option value="7">
                          Diploma in Marketing Management
                        </option>
                        <option value="8">Diploma in Metro Management</option>
                        <option value="9">Diploma in Web Designing</option>
                      </select>
                    </div>
                    <div>
                      <button
                        className="btn btn-dark btn-block border-0 py-3"
                        type="submit"
                      >
                        Register Now
                      </button>
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
