import { useState } from "react";
import "../../styles/Pagination.css";
function Pagination({ totalflights, flightsPerPage, paginate, currentPage }) {
  const pageNumbers = [];
  const [isActive, SetisActive] = useState("");
  // Calculate total number of pages
  for (let i = 1; i <= Math.ceil(totalflights / flightsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination flex gap-3 justify-center flex-wrap my-6">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}>
            {/* // Add active class */}
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        {pageNumbers.length === 1 ? (
          <li className={`page-item `}>
            {/* // Add active class */}
            <a className="unavilable-page-link">2</a>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
