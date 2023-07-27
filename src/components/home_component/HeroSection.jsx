import React from 'react'
import HeroTab from './HeroTab'

const HeroSection = () => {
  return <section className="hero_main_section">
    <div className="hero_article">
        <h1 className="hero_title">Cars For Sale</h1>
        <p className="hero_paragraph">Search Millions FromThousands of Auto Dealers</p>
       
    </div>
    <HeroTab />
  
  </section>
}

export default HeroSection;
