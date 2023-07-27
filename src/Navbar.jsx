import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return <nav>
    <div className="header_top">
        <a className="header__top-nav-item">Become a Dealer</a>
        <a className="header__top-nav-item"><span style={{ color:"red",marginRight:"2px" }}>❤</span>Favorites</a>
        <a className="header__top-nav-item">🙎‍♂️<span style={{ color:"red" }}>Sign In</span></a>
    </div>
    <div className="menuIcon">
        <ul>
            <li><NavLink to="/" className="nav-link">Cars For Sale</NavLink></li>
            <li><NavLink to="/new-cars" className="nav-link">New Cars</NavLink></li>
            <li><NavLink to="/vehicle-history" className="nav-link">Vehicle History</NavLink></li>
            <li><NavLink to="/financing" className="nav-link">Financing</NavLink></li>
            <li><NavLink to="/find-cars-dealer" className="nav-link">Find Car Dealers</NavLink></li>
            <li><NavLink to="/research" className="nav-link">Research</NavLink></li>

        </ul>
    </div>
  </nav>
}

export default Navbar
