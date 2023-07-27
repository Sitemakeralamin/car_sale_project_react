import React, { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import CarForSale from './CarForSale'
import NewCars from './NewCars'
import Financing from './Financing'
import VehicleHistory from './VehicleHistory'
import FindCarDealers from './FindCarDealers'
import Research from './Research'
import Header from './components/Header'
import Footer from './components/Footer'
import "./App.css"


const App = () => {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<CarForSale />}/>
    <Route path="/new-cars" element={<NewCars />}/>
    <Route path="/vehicle-history" element={<VehicleHistory />}/>
    <Route path="/financing" element={<Financing />}/>
    <Route path="/find-cars-dealer" element={<FindCarDealers />}/>
    <Route path="/research" element={<Research />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
}

export default App
