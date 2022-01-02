import React from "react";
import "../style/pagination.css";
import back from "../assets/Back.png";
import next from "../assets/Next.png";

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div className="pagination">
        <img
          src={back}
          alt="back"
          className={
            currentPage <= 1 ? "back-next-icon disabled" : "back-next-icon"
          }
          onClick={() => paginate(currentPage - 1)}
        />
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            className={
              pageNumber === currentPage ? "page-item active-page" : "page-item"
            }
            onClick={() => paginate(pageNumber)}
          >
            {pageNumber}
          </div>
        ))}
        <img
          src={next}
          alt="next"
          className={
            currentPage === pageNumbers.length
              ? "back-next-icon disabled"
              : "back-next-icon"
          }
          onClick={() => paginate(currentPage + 1)}
        />
      </div>
    </nav>
  );
}
