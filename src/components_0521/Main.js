import React from 'react';
import ProductTable from './ProductTable';
import './Main.css';

const Main = () => {
  const PRODUCTS = [
    { category: '돼지고기', price: '$13.99', stocked: true, name: '삼겹살' },
    { category: '돼지고기', price: '$9.99', stocked: true, name: '목살' },
    { category: '소고기', price: '$55.99', stocked: false, name: '등심' },
    { category: '소고기', price: '$79.99', stocked: true, name: '안심' },
  ];
  return (
    <div>
      {/* 부모컴포넌트에서 자식컴포넌트로 데이터 전달하기 */}
      <ProductTable product={PRODUCTS}></ProductTable>
    </div>
  );
};

export default Main;
