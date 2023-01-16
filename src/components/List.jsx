import React from "react";
import { useState } from "react";
import Item from "./Item";
import { nanoid } from "nanoid";
import ReactPaginate from "react-paginate";

export default function List({ itemsPerPage, value, list, openModal }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = list.data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(list.data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % list.data?.length;
    setItemOffset(newOffset);
  };

  function createItem(item) {
    return (
      <Item
        key={nanoid()}
        style={item.color}
        year={item.year}
        name={item.name}
        id={item.id}
        onClick={openModal}
      />
    );
  }

  const fullList = currentItems && currentItems.map((item) => createItem(item));

  function filter() {
    return list.data
      ?.filter((item) => item.id == value)
      .map((item) => createItem(item));
  }

  return (
    <div className="listContainer">
      {value != "" ? filter() : fullList}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
