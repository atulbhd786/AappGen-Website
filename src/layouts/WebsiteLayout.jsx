import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const WebsiteLayout = () => {
  return (
    <>
      <Header />
      <Outlet />   {/* yahan Home, About, etc aayega */}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
