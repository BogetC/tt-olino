import { usePagination } from "@/lib/contexts/PaginationContext";
import classNames from "classnames";
import { useEffect, useState } from "react";

export const PaginationButton = () => {
  const {
    totalElement,
    currentPage,
    maxElementPerPage,
    onChangePage,
    onPrevPage,
    onNextPage,
  } = usePagination();

  const pageIndexes = Array(Math.ceil(totalElement / maxElementPerPage))
    .fill(0)
    .map((e, i) => i + 1);

  const [neighbours, setNeighbours] = useState(pageIndexes);

  useEffect(() => {
    const start = currentPage - 1 <= 0 ? 0 : currentPage - 2;
    const end = currentPage + 1;
    setNeighbours(pageIndexes.slice(start, end));
  }, [currentPage]);

  return (
    <div className="flex-center gap-3">
      <button
        type="button"
        onClick={() => onChangePage(currentPage < 10 ? 1 : currentPage - 10)}
        className={classNames("button", { disabled: currentPage === 1 })}
        disabled={currentPage === 1}
      >
        {"<<"}
      </button>
      <button
        type="button"
        onClick={() => onPrevPage()}
        className={classNames("button", { disabled: currentPage === 1 })}
        disabled={currentPage === 1}
      >
        {"<"}
      </button>
      {currentPage > 2 && (
        <>
          <button
            type="button"
            onClick={() => onChangePage(1)}
            className={classNames("button", {
              disabled: currentPage === 1,
            })}
            disabled={currentPage === 1}
          >
            {1}
          </button>
          <span>...</span>
        </>
      )}
      {neighbours.map((number) => (
        <button
          type="button"
          key={number}
          onClick={() => onChangePage(number)}
          className={classNames("button", { disabled: number === currentPage })}
          disabled={number === currentPage}
        >
          {number}
        </button>
      ))}
      {currentPage < pageIndexes.length - 2 && (
        <>
          <span>...</span>
          <button
            type="button"
            onClick={() => onChangePage(pageIndexes.length)}
            className={classNames("button", {
              disabled: currentPage === pageIndexes.length,
            })}
            disabled={currentPage === pageIndexes.length}
          >
            {pageIndexes.length}
          </button>
        </>
      )}
      <button
        type="button"
        onClick={() => onNextPage()}
        className={classNames("button", {
          disabled: currentPage === pageIndexes.length,
        })}
        disabled={currentPage === pageIndexes.length}
      >
        {">"}
      </button>
      <button
        type="button"
        onClick={() =>
          onChangePage(
            currentPage > pageIndexes.length - 10
              ? pageIndexes.length
              : currentPage + 10
          )
        }
        className={classNames("button", {
          disabled: currentPage === pageIndexes.length,
        })}
        disabled={currentPage === pageIndexes.length}
      >
        {">>"}
      </button>
    </div>
  );
};
