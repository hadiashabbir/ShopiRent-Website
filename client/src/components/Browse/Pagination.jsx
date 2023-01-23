import React from "react";

import { Pagination, PaginationItem } from "@mui/material";

import { Link, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Paginate = ({ page }) => {
  const query = useQuery();
  const category = query.get("category");
  const subCategory = query.get('subcategory')
  const highlight = query.get('highlight')
  const brand = query.get('brand')
  const size = query.get('size')
  const color = query.get('color')
  const sleeve = query.get('sleeve')
  const weather = query.get('weather')
  const bodyType = query.get('bodytype')

  const numberOfPages = 4;

  return (
    <Pagination
      count={numberOfPages}
      page={Number(page)}
      variant="outlined"
      color="primary"
      renderItem={(item) => {
        return (
          <PaginationItem
            {...item}
            component={Link}
            to={`/browse?category=${category}&subcategory=${subCategory}&page=${item.page}&color=${color}&size=${size}&highlight=${highlight}&brand=${brand}&weather=${weather}&sleeve=${sleeve}&bodytype=${bodyType}`}
          />
        );
      }}
    />
  );
};

export default Paginate;
