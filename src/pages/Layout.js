import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BackOnTop from "../components/BackOnTop";

const Layout = () => {
  return (
    <>
      <Header />
      {/* STYLY PAGES JSOU V HEADER.CSS DOLE */}
      <Outlet />
      <BackOnTop />
      <Footer />
    </>
  );
};

export default Layout;
