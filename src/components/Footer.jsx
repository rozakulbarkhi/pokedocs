import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { AppContext } from "../contexts/AppContext";

const Footer = () => {
  const { theme } = useContext(AppContext);

  return (
    <footer>
      <div
        className={twMerge(
          "my-4 flex justify-center items-center md:text-md text-sm",
          theme === "dark" ? "text-slate-100" : "text-slate-800"
        )}
      >
        &copy; {new Date().getFullYear()} POKEDOCS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
