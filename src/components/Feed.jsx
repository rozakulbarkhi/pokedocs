import Card from "./Card";
import propTypes from "prop-types";
import Pagination from "./Pagination";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Feed = ({ data }) => {
  const { pageInfo } = useContext(AppContext);

  return (
    <div className="">
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
        {data?.map((poke, index) => (
          <Card key={index} poke={poke} id={index + 1 + pageInfo.offset} />
        ))}
      </div>
      <div className="my-6 flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  );
};

Feed.propTypes = {
  data: propTypes.array,
};

export default Feed;
