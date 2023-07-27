import React from 'react'
import Card1 from './footer/Card1'

const Footer = () => {
  return (
    <footer className="footer_main_section">
      <div className="footer_header_section">
        <h1 className="footer_header_title">ABOUT CARSFORSALE.COM®</h1>
        <p  className="footer_header_sub_title">For over 20 years, Carsforsale.com® has simply been one of the fastest and easiest ways to buy or sell new and used cars online. With millions of vehicles listed from thousands of State-Verified Auto Dealers nationwide, finding your perfect vehicle is a snap. Our goal has always been to make the car buying experience better, faster and more fun! Shopping for your next vehicle on Carsforsale.com® is as easy as search, click and done! Shop millions of new and used cars for sale & find yours.</p>
      </div>

      <Card1 />
  
    </footer>
  )
}

export default Footer
