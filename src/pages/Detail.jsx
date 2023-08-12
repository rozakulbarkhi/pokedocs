import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { twMerge } from "tailwind-merge";
import Stats from "../components/Stats";

const Detail = () => {
  const { name } = useParams();
  const [data, setData] = useState([]);

  const { theme } = useContext(AppContext);

  useEffect(() => {
    try {
      const fetchDetailData = async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        if (response.data) {
          setData(response.data);
        }
      };

      fetchDetailData();
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  return (
    <div className="md:px-8 px-6 mt-28 w-full space-y-4 flex justify-center items-center flex-col">
      <div className="flex justify-start w-full gap-2 mb-4 md:text-md text-sm">
        <Link
          to="/"
          className={theme === "dark" ? "text-blue-500" : "text-blue-600"}
        >
          Home
        </Link>{" "}
        /{" "}
        <span
          className={twMerge(
            "capitalize",
            theme === "dark" ? "text-slate-200" : "text-slate-800"
          )}
        >
          {name}
        </span>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="relative cursor-pointer">
            <img
              src={data?.sprites?.front_default}
              alt="pokemon image"
              className={twMerge(
                "md:h-[250px] h-[200px] border rounded-lg",
                theme === "dark"
                  ? "border-slate-800 bg-slate-100"
                  : "border-slate-100 bg-slate-800"
              )}
              onMouseEnter={(e) => {
                e.currentTarget.src = data?.sprites?.back_default;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.src = data?.sprites?.front_default;
              }}
            />
          </div>
          <div className="capitalize py-2 tracking-widest font-semibold">
            {data?.name}
          </div>
        </div>
        <div
          className={twMerge(
            "capitalize border rounded-lg gap-2 overflow-y-auto max-h-64 shadow-lg",
            theme === "dark"
              ? "border-slate-100 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-800 scrollbar-track-slate-100 rounded"
              : "border-slate-800 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-100 scrollbar-track-slate-800 rounded"
          )}
        >
          <div
            className={twMerge(
              "md:py-1.5 py-1 w-full text-center font-semibold sticky top-0 z-10 tracking-wider",
              theme === "dark"
                ? "bg-slate-100 text-slate-800"
                : "bg-slate-800 text-slate-100"
            )}
          >
            Stats
          </div>
          {data?.stats?.map((stat, index) => (
            <Stats key={index} stat={stat} />
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-8">
        <div
          className={twMerge(
            "capitalize border rounded-lg gap-2 overflow-y-auto max-h-64 shadow-lg md:mt-0 mt-4",
            theme === "dark"
              ? "border-slate-100 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-800 scrollbar-track-slate-100 rounded"
              : "border-slate-800 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-100 scrollbar-track-slate-800 rounded"
          )}
        >
          <div
            className={twMerge(
              "md:py-1.5 py-1 w-full text-center font-semibold sticky top-0 z-10 tracking-wider",
              theme === "dark"
                ? "bg-slate-100 text-slate-800"
                : "bg-slate-800 text-slate-100"
            )}
          >
            detail
          </div>
          <div className="mx-4 my-4 mt-4">
            <div className="flex gap-2 space-y-2">
              <div>
                Abilities:{" "}
                <span className="italic">
                  {data.abilities
                    ?.map(({ ability }) => ability?.name)
                    .join(", ")}
                </span>
              </div>
            </div>
            <div>Height: {data?.height}</div>
            <div>Weight: {data?.weight}</div>
            <div>Base Experience: {data?.base_experience}</div>
            <div>
              Species: <span className="italic">{data?.species?.name}</span>
            </div>
            <div>
              Types:{" "}
              <span className="italic">
                {data?.types?.map(({ type }) => type?.name).join(", ")}
              </span>
            </div>
          </div>
        </div>
        <div
          className={twMerge(
            "capitalize border rounded-lg gap-2 overflow-y-auto max-h-64 shadow-lg",
            theme === "dark"
              ? "border-slate-100 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-800 scrollbar-track-slate-100 rounded"
              : "border-slate-800 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-slate-100 scrollbar-track-slate-800 rounded"
          )}
        >
          <div
            className={twMerge(
              "md:py-1.5 py-1 w-full text-center font-semibold sticky top-0 z-10 tracking-wider",
              theme === "dark"
                ? "bg-slate-100 text-slate-800"
                : "bg-slate-800 text-slate-100"
            )}
          >
            special moves
          </div>
          <div className="mx-4 my-4 space-y-2">
            {data?.moves?.map((move, index) => (
              <div key={index} className="italic">
                ⚡️ {move?.move.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
