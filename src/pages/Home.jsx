import Search from "../components/Search";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="md:px-8 px-6 my-32">
      <Search />
      <Feed />
    </div>
  );
};

export default Home;
