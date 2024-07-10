import React from 'react'

const Testemonials = () => {
  return (
    <>
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
    </>
  )
}

export default Testemonials