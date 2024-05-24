import React from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';

const ProductTable = (props) => {
  const rows = [];
  let lsatCategory = null;

  props.product.forEach((i) => {
    if (i.category != lsatCategory) {
      rows.push(<ProductCategoryRow category={i.category}></ProductCategoryRow>);
    }
    lsatCategory = i.category;
    rows.push(<ProductRow item={i}></ProductRow>);
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
