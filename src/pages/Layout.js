import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Fotogalerie from "../components/Fotogalerie";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
