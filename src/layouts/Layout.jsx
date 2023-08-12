import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import propTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

Layout.propTypes = {
  children: propTypes.node,
};

export default Layout;
