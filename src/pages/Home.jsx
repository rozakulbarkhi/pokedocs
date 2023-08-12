import Search from "../components/Search";
import Feed from "../components/Feed";
import FeedSearch from "../components/FeedSearch";
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [searchData, setSearchData] = useState(null);

  const { data, isLoading, error } = useContext(AppContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );

      setSearchData(response.data);
    } catch (err) {
      setName("");
      setSearchData(null);
      console.log(err);
    }
  };

  const handleClearSearch = () => {
    setName("");
    setSearchData(null);
  };

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
