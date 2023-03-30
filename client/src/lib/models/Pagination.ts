export type Pagination = {
  data: string[];
  totalElement: number;
  currentPage: number;
  maxElementPerPage: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onChangePage: (i: number) => void;
};
