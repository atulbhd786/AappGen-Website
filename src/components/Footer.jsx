import React from "react";
function Footer(){return(

<>
     <section id="contact" className="section-6 odd form contact">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 pr-md-5 align-self-center text">
                        <div className="row intro">
                            <div className="col-12 p-0">
                                <span className="pre-title m-0">Send a message</span>
                                <h2>Get in <span className="featured"><span>Touch</span></span></h2>
                                <p>We will respond to your message as soon as possible.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 p-0">
                                
                                    <input type="hidden" name="section" value="nexgen_form"/>

                                    <input type="hidden" name="reCAPTCHA"/>
                                    

                                    <div className="row form-group-margin">
                                        <div className="col-12 col-md-6 m-0 p-2 input-group">
                                            <input type="text" name="name" className="form-control field-name" placeholder="Name"/>
                                        </div>
                                        <div className="col-12 col-md-6 m-0 p-2 input-group">
                                            <input type="email" name="email" className="form-control field-email" placeholder="Email"/>
                                        </div>
                                        <div className="col-12 col-md-6 m-0 p-2 input-group">
                                            <input type="text" name="phone" className="form-control field-phone" placeholder="Phone"/>
                                        </div>
                                        <div className="col-12 col-md-6 m-0 p-2 input-group">
                                            <i className="icon-arrow-down mr-3"></i>
                                            <select name="info" className="form-control field-info">
                                                <option value="" selected disabled>More Info</option>
                                                <option>Audit & Assurance</option>
                                                <option>Financial Advisory</option>
                                                <option>Analytics and M&A</option>
                                                <option>Middle Marketing</option>
                                                <option>Legal Consulting</option>
                                                <option>Regulatory Risk</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="col-12 m-0 p-2 input-group">
                                            <textarea name="message" className="form-control field-message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="col-12 col-12 m-0 p-2 input-group">
                                            <span className="form-alert"></span>
                                        </div>
                                        <div className="col-12 input-group m-0 p-2">
                                            <a className="btn primary-button mr-3">SEND</a>
                                            <a href="tel:+911234567890">
    <button className="smooth-anchor btn ml-lg-auto primary-button">
        Request a Call
    </button>
    </a>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>                        
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="contacts">
                            <h4>Quick Contact</h4>
                          
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fas fa-phone-alt mr-2"></i>
                                        +1 (305) 1234-5678
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fas fa-envelope mr-2"></i>
                                        hello@example.com
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                        Main Avenue, 987
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="mt-2 btn outline-button" data-toggle="modal" data-target="#map">VIEW MAP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
       
        <footer>

           
            <section id="copyright" className="p-3 odd copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 p-3 text-center text-lg-left">
                            <p>Enjoy the low price. We are tracking any intention of piracy.</p>
                           
                        </div>
                        <div className="col-12 col-md-6 p-3 text-center text-lg-right">
                            <p>© 2025 AappGen is Proudly Powered by <a href="#" target="_blank">AappGen Tech Pvt Ltd</a>.</p>
                        </div>
                    </div>
                </div>
            </section>

        </footer>
</>

);}
export default Footer;