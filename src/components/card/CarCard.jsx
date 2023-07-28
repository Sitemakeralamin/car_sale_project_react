import React from 'react'

const CarCard = () => {
  return <div className="card shadow mt-2">
  <div className="card-header">
  <img src="./images/1.jpg" alt="" className="card_image"/>
      <h1 className="card-title">Car Reviews</h1>
      <h6 className="card-sub-title">2023 Lexus NX Review</h6>
  </div>
  <div className="card-body">
      <p className="card-description">What do our experts think of the 2023 Lexus NX? We look at powertrain,....</p>

  </div>
  {/* <div className="card-footer">
      <button className="btn-submit">see details</button>
  </div> */}
</div>
}

export default CarCard
