// src/components/common/Pagination.jsx
import React from 'react';
import './Pagination.css'; // We'll create this CSS file

function Pagination({ beatsPerPage, totalBeats, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBeats / beatsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length <= 1) {
    return null; // Don't render pagination if there's only one page or no pages
  }

  return (
    <nav className="pagination-nav">
      <ul className="pagination-list">
        {/* Previous Button */}
        <li className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="pagination-link">
            &laquo; {/* Previous */}
          </button>
        </li>

        {/* Page Number Buttons */}
        {pageNumbers.map(number => (
          <li key={number} className={`pagination-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="pagination-link">
              {number}
            </button>
          </li>
        ))}

        {/* Next Button */}
        <li className={`pagination-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length} className="pagination-link">
            &raquo; {/* Next */}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;