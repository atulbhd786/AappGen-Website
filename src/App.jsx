import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feedback from "./components/Feedback";
import AutoModal from "./components/AutoModal";
import { useEffect, useState } from "react";
import ChatBot from "./components/ChatBot";

import { Routes, Route } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";

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
       <Routes>
      <Route path="/" element={<h1>Home Page</h1>} />
      <Route path="/admin" element={<AdminLogin />} />
    </Routes>
      <Header />
      <Feedback />
      <Home />
      <Footer />
       <AutoModal show={showModal} onClose={() => setShowModal(false)} />
      <ChatBot />
       <AdminLogin />
    </>
  );
}

export default App;
