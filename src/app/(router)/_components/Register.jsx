import React from 'react'

const Register = () => {
  return (
    <>
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
                            <h1 className="m-0">Register Now</h1>
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
    </>
  )
}

export default Register