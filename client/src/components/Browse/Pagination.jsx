import React from 'react'
import {Pagination, PaginationItem} from  "@mui/material";
import { Link, useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const Paginate = ({page}) => {
  const query = useQuery();
  const category = query.get('category');

    const numberOfPages = 4;

  return (
    <Pagination
    count={numberOfPages}
    page={Number(page)}
    variant='outlined'
    color='primary'
    renderItem={(item) => {
      return(
          category?
          <PaginationItem {...item} component={Link} to={`/browse?category=${category}&page=${item.page}`}/>
          :
          <PaginationItem {...item} component={Link} to={`/browse?page=${item.page}`}/>        
      );
    }}
    />
  )
}

export default Paginate