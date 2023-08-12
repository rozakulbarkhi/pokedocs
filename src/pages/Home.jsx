import Search from "../components/Search";
import Feed from "../components/Feed";
import FeedSearch from "../components/FeedSearch";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Home = () => {
  const { data, searchData, handleSubmit, handleClearSearch, name, setName } =
    useContext(AppContext);

  return (
    <div className="md:px-8 px-6 mt-28 w-full">
      <Search
        value={name}
        handleChange={(e) => setName(e.target.value)}
        handleSubmit={handleSubmit}
        searchData={searchData}
        handleClearSearch={handleClearSearch}
      />
      {searchData ? <FeedSearch data={searchData} /> : <Feed data={data} />}
    </div>
  );
};

export default Home;
