import Card from "./Card";
import propTypes from "prop-types";

const Feed = ({ data }) => {
  return (
    <div className="">
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
        {data?.map((poke, index) => (
          <Card key={index} poke={poke} id={index + 1} />
        ))}
      </div>
      <div>Pagination</div>
    </div>
  );
};

Feed.propTypes = {
  data: propTypes.array,
};

export default Feed;
