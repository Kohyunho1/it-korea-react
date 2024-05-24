import React from 'react';

const Item = (props) => {
  return (
    <tr>
      <td>{props.item.name}</td>
      <td>{props.item.price}</td>
    </tr>
  );
};

export default Item;
