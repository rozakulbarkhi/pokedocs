import propTypes from "prop-types";
import ProgressBar from "@ramonak/react-progress-bar";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

const Stats = ({ stat }) => {
  const { theme } = useContext(AppContext);

  return (
    <ProgressBar
      completed={`${stat?.base_stat}`}
      customLabel={`${stat?.stat.name}`}
      maxCompleted={100}
      width="100%"
      height="20px"
      borderRadius="50px"
      margin="20px 0px"
      animateOnRender={true}
      bgColor="rgb(37 99 235)"
      baseBgColor={theme === "dark" ? "rgb(203 213 225)" : "rgb(100 116 139)"}
      labelSize="12px"
      labelAlignment="center"
    />
  );
};

Stats.propTypes = {
  stat: propTypes.shape({
    stat: propTypes.shape({
      name: propTypes.string.isRequired,
    }),
    base_stat: propTypes.number.isRequired,
  }),
};

export default Stats;
