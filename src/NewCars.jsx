import React from 'react'
import HeroSection2 from './components/home_component/HeroSection2'


const NewCars = () => {
  return (
    <>
      <HeroSection2 />
      <div className="gap"></div>
      <div className="container">
        <div className="row">
          <h3 className="text-center mb-4">Your Top Source for Available New Cars</h3>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <img src="./images/research.svg" alt="" className="img_size"/>
                <p>Search and compare features on millions of new cars added daily.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <img src="./images/drop.svg" alt="" className="img_size"/>
                <p>Shop all new car makes and models available today at proven dealerships.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <img src="./images/just.svg" alt="" className="img_size"/>
                <p>Be informed with real-time pricing guides for new cars, trucks, SUVs and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewCars
