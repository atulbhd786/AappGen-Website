import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feedback from "./components/Feedback";
import AutoModal from "./components/AutoModal";
import { useEffect, useState } from "react";
import ChatBot from "./components/ChatBot";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";
// import AdminLogin from "./components/AdminLogin";
import WebsiteLayout from "./layouts/WebsiteLayout";
import AdminLayout from "./layouts/AdminLayout";
import AdminLogin from "./components/AdminLogin";
import AdminTable from "./components/AdminTable";

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

      {/* WEBSITE ROUTES */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/table" element={<AdminTable />} />
      </Route>

    </Routes>
      {/* <Header />
      <Feedback />
      <Home />
      <Footer />
       <AutoModal show={showModal} onClose={() => setShowModal(false)} />
      <ChatBot />
       <AdminLogin /> */}
    </>
  );
}

export default App;
