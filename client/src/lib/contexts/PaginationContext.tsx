"use client";

import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { Pagination } from "@/lib/models/Pagination";
import { PaginationButton } from "@/lib/components/client/PaginationButton";
import { SearchBar } from "@/lib/components/client/SearchBar";

const PaginationContextDefaultImpl: Pagination = {
  data: [],
  totalElement: 0,
  currentPage: 1,
  maxElementPerPage: 0,
  onNextPage(): void {},
  onPrevPage(): void {},
  onChangePage(_: number): void {},
};

const PaginationContext = createContext(PaginationContextDefaultImpl);

type PaginationContextProps = {
  data: any[];
  maxElementPerPage: number;
  children: ReactElement | ReactElement[];
};

export const PaginationContextProvider = (props: PaginationContextProps) => {
  const maxElementPerPage = props.maxElementPerPage;

  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [data, setData] = useState(props.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const getCurrentData = (values: any[]) => {
    const lastElementIndex = currentPage * maxElementPerPage;
    const firstElementIndex = lastElementIndex - maxElementPerPage;

    return values.slice(firstElementIndex, lastElementIndex);
  };

  const onChangePage = (index: number) => {
    setCurrentPage(index);
  };

  const onPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage != Math.ceil(data.length / maxElementPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onSearchChange = (value: string) => {
    setSearchValue(value);
  };

  useEffect(() => {
    setFilteredData(getCurrentData(data));
  }, [currentPage, data]);

  useEffect(() => {
    if (searchValue) {
      setData(
        data.filter((v) => v.toLowerCase().includes(searchValue.toLowerCase()))
      );
    } else {
      setData(props.data);
    }
  }, [searchValue]);

  return (
    <PaginationContext.Provider
      value={{
        data: filteredData,
        totalElement: data.length,
        currentPage,
        maxElementPerPage,
        onNextPage,
        onPrevPage,
        onChangePage,
      }}
    >
      <div className="w-full flex-col-center gap-6">
        <SearchBar onChange={onSearchChange} />
        {currentPage && props.children}
        {data.length > maxElementPerPage && <PaginationButton />}
      </div>
    </PaginationContext.Provider>
  );
};

export const usePagination = () => useContext(PaginationContext);
