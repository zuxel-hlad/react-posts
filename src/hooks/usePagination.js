import { useMemo } from "react";

export const usePagination = (totalPages) => {
  const result = useMemo(() => {
    console.log("useMemo");
    const paginationItems = [];
    for (let i = 0; i < totalPages; i++) {
      paginationItems.push(i + 1);
    }
    return paginationItems;
  }, [totalPages]);

  return result;
};
