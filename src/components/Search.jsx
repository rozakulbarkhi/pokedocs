import { MdCatchingPokemon } from "react-icons/md";
import { BsSearch, BsFillTrashFill } from "react-icons/bs";
import propTypes from "prop-types";

const Search = ({
  value,
  handleSubmit,
  handleChange,
  searchData,
  handleClearSearch,
}) => {
  return (
    <form className="relative w-full mb-8" onSubmit={handleSubmit}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-800">
        <MdCatchingPokemon size={20} />
      </div>
      <input
        type="text"
        name="name"
        value={value}
        onChange={handleChange}
        className="border border-slate-800 text-gray-800 text-sm rounded-lg block w-full md:pl-10 pl-10 md:p-2 p-1.5 pr-12 md:placeholder:text-sm placeholder:text-xs"
        placeholder="Search pokemon by name or id"
        required
      />
      {searchData === null ? (
        <button
          type="submit"
          className="absolute right-0 top-0 md:p-2.5 p-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-600 rounded-r-lg border border-slate-800"
        >
          <BsSearch size={16} />
        </button>
      ) : (
        <button
          type="submit"
          onClick={handleClearSearch}
          className="absolute right-0 top-0 md:p-2.5 p-2 text-sm font-medium text-white bg-red-700 hover:bg-red-600 rounded-r-lg border border-slate-800"
        >
          <BsFillTrashFill size={16} />
        </button>
      )}
    </form>
  );
};

Search.propTypes = {
  handleSubmit: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  searchData: propTypes.object,
  handleClearSearch: propTypes.func.isRequired,
};

export default Search;
