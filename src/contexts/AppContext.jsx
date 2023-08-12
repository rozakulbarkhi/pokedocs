import { createContext, useEffect, useState } from "react";
import propTypes from "prop-types";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState([]);

  const switchTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");

        if (response.data) {
          setData(response.data.results);
        }
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
        data,
      }}
    >
      <div className={`${theme} theme`}>{children}</div>
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: propTypes.node,
};
