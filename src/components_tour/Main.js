import React from 'react';
import './Main.css';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import EventSection from './Section/EventSection/EventSection';
import ExploreSection from './Section/ExploreSection/ExploreSection';
import ToursSection from './Section/ToursSection/ToursSection';
import Footer from './Footer/Footer';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <EventSection></EventSection>
      <ExploreSection></ExploreSection>
      <ToursSection></ToursSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;
