import React from "react";
import { useEffect, useState } from "react";
function Header(){

const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
        setIsVisible(true); // first time bhi yahin set ho jayega
      } else {
        setIsSticky(false);
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

return(
     <header id="header">
            <nav class="navbar navbar-expand top">
                <div class="container header">

                   
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#" class="nav-link pl-0"><i class="fas fa-clock mr-2"></i>Open Hours: Mon - Sat - 9:00 - 18:00</a>
                        </li>
                    </ul>

                    
                    <div class="ml-auto"></div>

                   
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="#" class="nav-link"><i class="fas fa-phone-alt mr-2"></i>+1 (305) 1234-5678</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link"><i class="fas fa-envelope mr-2"></i>hello@example.com</a>
                        </li>
                    </ul>

                    
                    <ul class="navbar-nav icons">
                        <li class="nav-item social">
                            <a href="#" class="nav-link"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="nav-item social">
                            <a href="#" class="nav-link"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="nav-item social">
                            <a href="#" class="nav-link pr-0"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                    </ul>

                </div>
            </nav>

            
            <nav class={`navbar navbar-expand navbar-fixed sub
        ${isSticky ? "navbar-sticky" : ""}
        ${isVisible ? "visible" : ""}
      `}>
                <div class="container header">

                   
                    <a class="navbar-brand" href="/">
                        <span class="brand">
                            <span class="featured">
                                <span class="first">Aapp</span>
                            </span>
                            <span class="last">Gen</span>
                        </span>
                        
                       
                    </a>

                   
                    <div class="ml-auto"></div>

                    
                    <ul class="navbar-nav items">
                        <li class="nav-item">
                            <a href="#header" class="smooth-anchor nav-link">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a href="#funfacts" class="smooth-anchor nav-link">ABOUT</a>
                        </li>
                        <li class="nav-item">
                            <a href="#projects" class="smooth-anchor nav-link">PRODUCTS</a>
                        </li>
                        <li class="nav-item">
                            <a href="#process" class="smooth-anchor nav-link">SERVICES</a>
                        </li>
                        <li class="nav-item">
                            <a href="#testimonials" class="smooth-anchor nav-link">TESTIMONIALS</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact" class="smooth-anchor nav-link">CONTACTS</a>
                        </li>
                    </ul>

                   
                    <ul class="navbar-nav icons">
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-toggle="modal" data-target="#sign">
                                <i class="icon-user"></i>
                            </a>
                        </li>
                    </ul>

                   
                    <ul class="navbar-nav toggle">
                        <li class="nav-item">
                            <a href="#" class="nav-link" data-toggle="modal" data-target="#menu">
                                <i class="icon-menu m-0"></i>
                            </a>
                        </li>
                    </ul>

                    
                    <ul class="navbar-nav action">
                        <li class="nav-item ml-3">
                            <a href="#contact" class="smooth-anchor btn ml-lg-auto primary-button">GET IN TOUCH</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>);
}
export default Header;