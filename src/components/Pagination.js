import React from "react";
import ReactPaginate from 'react-paginate';

import styles from "./style/Pagination.module.scss"



function Pagination({onChangePage}) {

    return(
      <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={event => onChangePage(event.selected + 1)}
      pageRangeDisplayed={12}
      pageCount={12}
      renderOnZeroPageCount={null}
    />
    )
}

export default Pagination