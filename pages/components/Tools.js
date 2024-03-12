
import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import toolsData from '../../data/toolsData';
const Tools = () => {
  console.log("props on Tools", toolsData);

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, i) => (
            <div key={`slider-key=${i}`}>
              <p>{item}</p>
            </div>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(toolsData.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(toolsData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }

  return (
    <>
      <h4>TOOLS</h4>
      <PaginatedItems itemsPerPage={6} />
    </>
  );
};

export default Tools;
