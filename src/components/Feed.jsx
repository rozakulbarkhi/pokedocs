import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Card from "./Card";

const Feed = () => {
  const { data } = useContext(AppContext);

  return (
    <div className="">
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
        {data?.map((poke, index) => (
          <Card key={index} poke={poke} id={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
