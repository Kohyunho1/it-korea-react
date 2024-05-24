import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

const FilterableProductTable = (props) => {
  return (
    <div>
      <SearchBar></SearchBar>
      <ProductTable product={props.product}></ProductTable>
    </div>
  );
};

export default FilterableProductTable;
