import React from 'react';
import ProductCategory from './ProductCategory';
import Item from './Item';

//props : 부모에게 전달받은 데이터(특징: 수정 불가능, only read)
const ProductTable = (props) => {
  const rows = [];
  let lastCategory = null;

  props.product.forEach((i) => {
    if (i.category != lastCategory) {
      rows.push(<ProductCategory category={i.category} key={i.category}></ProductCategory>); //컴포넌트를 배열에 담기
    }
    lastCategory = i.category;
    rows.push(<Item item={i} key={i.name}></Item>);
  });
  return (
    <table>
      <thead>
        <tr>
          <th>상품</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
