import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <>
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
    </>
  )
}

export default Partners