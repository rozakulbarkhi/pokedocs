import { Link } from "react-router-dom";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const { theme, switchTheme } = useContext(AppContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={twMerge(
        "fixed top-0 z-10 w-full transition-colors ease-in duration-200",
        !scroll
          ? theme === "dark"
            ? "dark text-slate-100"
            : "light text-slate-800"
          : theme === "light"
          ? "dark text-slate-100"
          : "light text-slate-800"
      )}
    >
      <div
        className={twMerge(
          "py-6 md:px-8 px-6 border-b shadow-sm",
          theme === "light" && "border-b border-slate-800"
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <h1 className="uppercase font-bold md:text-xl text-lg tracking-wider">
              Pokedocs.
            </h1>
          </Link>
          <div className="cursor-pointer" onClick={switchTheme}>
            {theme === "dark" ? <BsMoonFill /> : <BsSun />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
