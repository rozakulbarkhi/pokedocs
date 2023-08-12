import { createContext, useEffect, useState } from "react";
import propTypes from "prop-types";
import axios from "axios";
import { toast } from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    totalPage: 0,
    limit: 20,
    offset: 0,
  });
  const [name, setName] = useState("");
  const [searchData, setSearchData] = useState(null);

  const switchTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${pageInfo.offset}&limit=${pageInfo.limit}}`
        );

        if (response.data) {
          setData(response.data.results);
          setPageInfo((prev) => ({
            ...prev,
            totalPage: response.data.count,
          }));
        }
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [pageInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );

      setSearchData(response.data);
      toast.success("Pokemon found", {
        style: {
          fontSize: "12px",
        },
      });
    } catch (err) {
      setName("");
      setSearchData(null);
      toast.error("Pokemon not found", {
        style: {
          fontSize: "12px",
        },
      });
      console.log(err);
    }
  };

  const handleClearSearch = () => {
    setName("");
    setSearchData(null);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
        data,
        name,
        setName,
        searchData,
        handleSubmit,
        handleClearSearch,
        pageInfo,
        setPageInfo,
      }}
    >
      <div className={`${theme} theme`}>{children}</div>
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: propTypes.node,
};
