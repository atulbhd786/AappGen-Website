import React from "react";
function Hero()
{return(
    <>
        <section id="slider" class="hero p-0 odd">
            <div class="swiper-container no-slider animation slider-h-100 slider-h-auto">
                <div class="swiper-wrapper">

                   
                    <div class="swiper-slide slide-center">

                       
                        <img src="/images/bg-4.jpg" alt="Full Image" class="full-image" data-mask="50"/>    

                        <div class="slide-content row">
                            <div class="col-12 d-flex justify-content-start inner">
                                <div class="left text-left">

                                  
                                    <h1 class="title effect-static-text">
                                        <span class="pre-title m-0">AappGen tech pvt Ltd</span>
                                        Your Vision, <span class="featured bottom"><span>Our Code</span></span>
                                    </h1>
                                    <p class="description bigger">Planning, recruitment and selection process and performance evaluation of employees.</p>

                                   
                                    <div data-aos="fade-up" data-aos-delay="2800" class="buttons">
                                        <div class="d-sm-inline-flex">
                                            <a href="#contact" class="smooth-anchor mt-4 btn primary-button">GET IN TOUCH</a>
                                            <a href="#features" class="smooth-anchor ml-sm-4 mt-4 btn outline-button">READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
         <section id="features" class="section-1 features offers featured">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12">
                        <div class="text-center">
                            <span class="pre-title m-auto m-md-0 d-inline mb-5" style={{ display: "block !important", marginBottom: "1.5rem !important" }}>Welcome to AappGen tech pvt Ltd</span>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center items" style={{marginTop: "1.4rem"}}>
                    <div class="col-12 col-md-6 col-lg-4 item">
                        <div class="card d-flex align-items-center">
                            <i class="icon featured icon-people">
                                 <i class="fa-solid fa-users"></i>
                            </i>
                            <h4>Human Capital</h4>
                            <p>Humanizing business: Harness the power of technology to improve the way people work.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 item">
                        <div class="card d-flex align-items-center">
                            <i class="icon featured icon-pie-chart">
                                <i class="fa-solid fa-briefcase"></i>
                            </i>
                            <h4>Core Business</h4>
                            <p>It takes innovative approaches to transform, modernize, and run existing platforms.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 item">
                        <div class="card d-flex align-items-center">
                            <i class="icon featured icon-speedometer">
                                 <i class="fa-solid fa-chart-line"></i>
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