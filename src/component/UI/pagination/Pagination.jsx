import { usePagination } from "../../../hooks/usePagination";
import classes from "./Pagination.module.css";

const Pagination = ({ totalPages, page, changePage }) => {
  const pagination = usePagination(totalPages).map((num) => (
    <button
      key={num}
      onClick={() => changePage(num)}
      className={
        page === num
          ? [classes["pagination-btn"], classes["pagination-btn_active"]].join(' ')
          : classes["pagination-btn"]
      }
    >
      {num}
    </button>
  ));

  return <div className={classes.pagination}>{pagination}</div>;
};

export default Pagination;
