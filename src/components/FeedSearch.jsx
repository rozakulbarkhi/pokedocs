import Card from "./Card";
import propTypes from "prop-types";

const Feed = ({ data }) => {
  return (
    <div className="">
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
        <Card poke={data} id={data.id} />
      </div>
      <div>Pagination</div>
    </div>
  );
};

Feed.propTypes = {
  data: propTypes.object.isRequired,
};

export default Feed;
