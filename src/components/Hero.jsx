import React from "react";
function Hero()
{return(
    <>
        <section id="slider" className="hero p-0 odd">
            <div className="swiper-container no-slider animation slider-h-100 slider-h-auto">
                <div className="swiper-wrapper">

                   
                    <div className="swiper-slide slide-center">

                       
                        <img src="/images/bg-4.jpg" alt="Full Image" className="full-image" data-mask="50"/>    

                        <div className="slide-content row">
                            <div className="col-12 d-flex justify-content-start inner">
                                <div className="left text-left">

                                  
                                    <h1 className="title effect-static-text">
                                        <span className="pre-title m-0">AappGen tech pvt Ltd</span>
                                        Your Vision, <span className="featured bottom"><span>Our Code</span></span>
                                    </h1>
                                    <p className="description bigger">Planning, recruitment and selection process and performance evaluation of employees.</p>

                                   
                                    <div data-aos="fade-up" data-aos-delay="2800" className="buttons">
                                        <div className="d-sm-inline-flex">
                                            <a href="#contact" className="smooth-anchor mt-4 btn primary-button">GET IN TOUCH</a>
                                            <a href="#features" className="smooth-anchor ml-sm-4 mt-4 btn outline-button">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
         <section id="features" className="section-1 features offers featured">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="text-center">
                            <span className="pre-title m-auto m-md-0 d-inline mb-5" style={{ display: "block !important", marginBottom: "1.5rem !important" }}>Welcome to AappGen tech pvt Ltd</span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center items" style={{marginTop: "1.4rem"}}>
                    <div className="col-12 col-md-6 col-lg-4 item">
                        <div className="card d-flex align-items-center">
                            <i className="icon featured icon-people">
                                 <i className="fa-solid fa-users"></i>
                            </i>
                            <h4>Human Capital</h4>
                            <p>Humanizing business: Harness the power of technology to improve the way people work.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 item">
                        <div className="card d-flex align-items-center">
                            <i className="icon featured icon-pie-chart">
                                <i className="fa-solid fa-briefcase"></i>
                            </i>
                            <h4>Core Business</h4>
                            <p>It takes innovative approaches to transform, modernize, and run existing platforms.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 item">
                        <div className="card d-flex align-items-center">
                            <i className="icon featured icon-speedometer">
                                 <i className="fa-solid fa-chart-line"></i>
                            </i>
                            <h4>Performance</h4>
                            <p>Achieving maximum impact and value from investments in finance and supply chain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    </>

    );
    }
export default Hero;