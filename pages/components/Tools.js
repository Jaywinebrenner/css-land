
import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';

const Tools = ({props}) => {
  console.log("props on Tools", props && props)

    function Items({ currentItems }) {
      return (
        <>
          {currentItems &&
            currentItems.map((item, i) => (
              <div key={`slider-key=${i}`} >
                <p>{item}</p>
              </div>
            ))}
        </>
      );
    }
    
    function PaginatedItems({ itemsPerPage }) {
      const [currentItems, setCurrentItems] = useState(null);
      const [pageCount, setPageCount] = useState(0);
      const [itemOffset, setItemOffset] = useState(0);
      useEffect( ()  =>  {
        var allTools = props && props.tool.map(function(item) {
            return item['tool'];
          });
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(allTools && allTools.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allTools && allTools.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);
    

      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % props.tool.length;
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

        <PaginatedItems itemsPerPage={9} />
    </>

  );
};

export default Tools;