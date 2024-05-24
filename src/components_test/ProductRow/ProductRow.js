import React from 'react';

const ProductRow = (props) => {
  const border = {
    border: '1px solid red',
  };
  return (
    <tr>
      <td style={border}>{props.item.name}</td>
      <td style={border}>{props.item.price}</td>
    </tr>
  );
};

export default ProductRow;
