import React from 'react'
import HeroSection from './components/home_component/HeroSection';
import SecondSectionUlLIst from './components/SecondSectionUlLIst';
import Wrapper from './components/Wrapper'
import CarCard from './components/card/CarCard';

const CarForSale = () => {
  return (
    <>
    <HeroSection />
    <div className="second_section">
      <div className="second_head">
        <h1 className="second_title">CARS FOR SALE BY BRAND</h1>
        <p className="second_paragraph">Start your search by choosing one of the most popular makes like Chevrolet, Ford or Honda. Shop millions. Find yours!
        </p>
      </div>
      <div className="second_section_content">
          <SecondSectionUlLIst />
          <SecondSectionUlLIst />          
          <SecondSectionUlLIst />
          <SecondSectionUlLIst />
          <SecondSectionUlLIst />
          <SecondSectionUlLIst />
          </div>
        
    </div>
    <div className="third_section">
    <div className="third_section_head">
        <h1 className="third_section_title">🔥TRENDING CAR NEWS & EXPERT REVIEWS</h1>
        <p className="third_section_paragraph">Stay informed with our expert, in-depth car reviews and breaking auto news.
        </p>
        <a href="" className="third_section_a">See All Expert Reviews ⏩</a>
      </div>
      <div className="card_wrap">
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      </div>
    </div>
    
      
    </>
  )
}

export default CarForSale;