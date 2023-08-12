import { createContext, useState } from "react";
import propTypes from "prop-types";
import axios from "axios";
import { useQuery } from "react-query";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const { isLoading, error, data } = useQuery({
    queryKey: "fetchData",
    queryFn: async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");

      return response.data.results;
    },
  });

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
        data,
        isLoading,
        error,
      }}
    >
      <div className={`${theme} theme`}>{children}</div>
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: propTypes.node,
};
