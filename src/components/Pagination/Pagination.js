import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';

import './Pagination.css' 


function landingPagination() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <Pagination className='pagination'>
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>

      <Pagination.Item className='pagination'>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
    </div>
  );
}

export default landingPagination;