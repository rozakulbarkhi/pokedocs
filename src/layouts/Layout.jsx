import Navbar from "../components/Navbar";
import propTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      {children}
    </main>
  );
};

Layout.propTypes = {
  children: propTypes.node,
};

export default Layout;
