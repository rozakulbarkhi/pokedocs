import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { twMerge } from "tailwind-merge";

const Pagination = () => {
  const { pageInfo, setPageInfo, theme } = useContext(AppContext);

  const handlePrev = () => {
    setPageInfo((prev) => ({
      ...prev,
      offset: prev.offset - prev.limit,
    }));
  };

  const handleNext = () => {
    setPageInfo((prev) => ({
      ...prev,
      offset: prev.offset + prev.limit,
    }));
  };

  const start = pageInfo.offset + 1;
  const end = Math.min(pageInfo.offset + pageInfo.limit, pageInfo.totalPage);

  return (
    <div className="flex flex-col items-center mt-2">
      <span className="text-sm">
        Showing <span className="font-semibold">{start}</span> to{" "}
        <span className="font-semibold">{end}</span> of{" "}
        <span className="font-semibold">{pageInfo.totalPage}</span> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          onClick={handlePrev}
          className={twMerge(
            "flex items-center justify-center px-3 h-8 text-sm font-medium disabled:bg-slate-300 disabled:text-slate-800 disabled:cursor-not-allowed",
            theme === "dark"
              ? "border rounded-l-lg"
              : "border rounded-l-lg border-slate-800"
          )}
          disabled={pageInfo.offset === 0}
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className={twMerge(
            "flex items-center justify-center px-3 h-8 text-sm font-medium",
            theme === "dark"
              ? "border rounded-r-lg"
              : "border rounded-r-lg border-slate-800"
          )}
          disabled={pageInfo.offset + pageInfo.limit >= pageInfo.totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
