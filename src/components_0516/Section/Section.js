import React from 'react';
import './Section.css';
import ImgList from '../ImgList/ImgList';

const Section = () => {
  let imageCount = 4;
  return (
    <div>
      <section className="gallery">
        <h1>COFFEE class</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam tempora praesentium natus perspiciatis iusto nesciunt doloremque maiores obcaecati ad, iure id,
          voluptas ipsa harum unde. Vitae necessitatibus deleniti non?
        </p>
        <ImgList imageCount={imageCount}></ImgList>
      </section>
    </div>
  );
};

export default Section;
