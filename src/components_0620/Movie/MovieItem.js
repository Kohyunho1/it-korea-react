import React from 'react';
import './Movie.css';

const MovieItem = ({ title, year, poster }) => {
  return (
    <div className="card">
      <div className="img-gradient"></div>
      <img src={poster} className="movie-img" />
      <div className="text-wrap">
        <h1>{title}</h1>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default MovieItem;
