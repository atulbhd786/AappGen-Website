import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import OurProducts from "../components/OurProducts";
import Testimonials from "../components/Testimonials";
import AutoModal from "../components/AutoModal";
import { useEffect, useState } from "react";

function Home(){
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
   
    setShowModal(true);

    
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
return(<><Hero/><About/><OurProducts /><Services/><Testimonials/><Contact/><AutoModal show={showModal} onClose={() => setShowModal(false)}/></>);
}
export default Home;