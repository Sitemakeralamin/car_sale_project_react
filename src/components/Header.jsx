import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from '../Navbar'

const Header = () => {
  return <header>
    <div className="header_logo">
      <NavLink to="/">
        <img src="./images/logo.png" alt="" className="logo" />
        </NavLink>
      <h4 className="header__tagline">Search Millions<br/><span className="text-danger">Find Yours</span><br/><small>Welcome to Carsforsale.com<sup>®</sup></small></h4>     
 
    </div>
    <Navbar />
  </header>
}

export default Header
