import React from 'react';

const ProductCategory = (props) => {
  return (
    <tr>
      <th colSpan={2}>{props.category}</th>
    </tr>
  );
};

export default ProductCategory;
