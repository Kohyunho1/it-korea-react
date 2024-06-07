import React from 'react';

//results : 검색 결과 (배열임)
const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, index) => (
        <div className="search-result" key={index}>
          {result.name}
        </div>
      ))}
    </div>
  );
};

export default SearchResultList;
