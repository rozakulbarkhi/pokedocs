import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Card = ({ poke, id }) => {
  const { theme } = useContext(AppContext);

  return (
    <div
      className={twMerge(
        "max-w-sm rounded-lg shadow-md text-center transition-colors",
        theme === "light" ? "border border-slate-800" : "border"
      )}
    >
      <div className="flex items-center justify-center overflow-hidden md:h-[250px] h-[200px]">
        <img
          className="rounded-t-lg h-auto object-cover"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`}
          alt="pokemon image preview"
        />
      </div>
      <div
        className={twMerge(
          "p-10 rounded-b",
          theme === "dark"
            ? "bg-slate-100 rounded-b-md text-slate-800"
            : "bg-slate-800 rounded-b-md text-slate-100"
        )}
      >
        <p className="mb-3 font-normal capitalize">{poke?.name}</p>
        <Link
          to={`/detail/${poke?.name}`}
          className="inline-flex gap-2 items-center px-3 py-1.5 font-medium text-center bg-blue-700 hover:bg-blue-800 rounded text-white"
        >
          <span className="text-xs md:text-sm">See details</span>
          <AiFillEye />
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  poke: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  id: PropTypes.number.isRequired,
};

export default Card;
