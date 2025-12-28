import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feedback from "./components/Feedback";
import AutoModal from "./components/AutoModal";
import { useEffect, useState } from "react";
import ChatBot from "./components/ChatBot";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // open on load
    setShowModal(true);

    // auto close after 8 seconds
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
   
      <Header />
      <Feedback />
      <Home />
      <Footer />
       <AutoModal show={showModal} onClose={() => setShowModal(false)} />
      <ChatBot />
    </>
  );
}

export default App;
