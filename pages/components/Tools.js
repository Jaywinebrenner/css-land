
import React, {useEffect, useState} from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPaginate from 'react-paginate';


const Tools = ({props}) => {
    // console.log("PROPS ON TOOOLS", props[0].acf.tool);
    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    function Items({ currentItems }) {
      return (
        <>
          {currentItems &&
            currentItems.map((item) => (
              <div>
                <p>{item}</p>
              </div>
            ))}
        </>
      );
    }
    
    function PaginatedItems({ itemsPerPage }) {
      // We start with an empty list of items.
      const [currentItems, setCurrentItems] = useState(null);
      const [pageCount, setPageCount] = useState(0);
      // Here we use item offsets; we could also use page offsets
      // following the API or data you're working with.
      const [itemOffset, setItemOffset] = useState(0);
      useEffect( ()  =>  {
        var allTools = props[0].acf.tool.map(function(item) {
            return item['tool'];
          });

        console.log("ALL TOOLS", allTools);
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(allTools.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allTools.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);
    
      // Invoke when user click to request another page.
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % props[0].acf.tool.length;
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
        <div className="chevron-tools-icon-wrapper">
        {/* <FontAwesomeIcon className="chevron-tools-icon" icon={faChevronRight} /> */}
        </div>
        <PaginatedItems itemsPerPage={5} />
        {/* <ul>
        <li>
        <li>React-Native</li>
        <li>ReactJS / Redux</li>
        <li>VueJs</li>
        <li>C#</li>
        <li>Umbraco</li>
        <li>ASP.NET</li>
        <li>Razor</li>
        <li>Ruby / Rails</li>
        <li>PHP</li>
        <li>Custom WordPress development</li>
        <li>Javascript / ES6</li>
        <li>JQuery</li>
        <li>AWS</li>
        <li>WordPress</li>
        <li>Firebase</li>
        <li>SQL databases</li>
        <li>CSS / SCSS</li>
        <li>HTML</li>
        <li>Bootstrap</li>
        <li>Git / Github</li>
        <li>Domain Models</li>
        <li>Google Suite</li>
        <li>Microsoft Office 360</li>
        <li>Adobe Premiere</li>
        <li>Adobe After Effects</li>
        <li>Adobe Photoshop</li>
        <li>Final Cut Pro 7 / X</li>
        <li>Reason / Ableton</li>
        <li>Pro Tools</li>
        <li>Figma</li>
        <li>Asana / Slack / Trello / Jira</li>
        </li>
        </ul> */}
    </>

  );
};

  



  export default Tools;