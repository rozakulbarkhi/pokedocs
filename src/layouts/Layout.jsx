import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
