import React, { useEffect, useState } from 'react'


const HeroTab = () => {

  const [checkedData,setChecked] =useState(false);
  
  useEffect(()=>{
    setChecked(true);
  },[])
  return (
    <>
     <div className="container warpper">
     
    <input type="radio" id="one" name="group" className="radio"  readOnly checked/>
    <input type="radio" id="two" name="group" className="radio" />
    <input type="radio" id="three" name="group" className="radio" />
    
    <div className="tabs">
        <label className="tab" id="one-tab" htmlFor="one">Make/Model</label>
        <label className="tab" id="two-tab" htmlFor="two">Body Style</label>
        <label className="tab" id="three-tab" htmlFor="three">Payment</label>
        <a href="" className="advanced">Advanced Search ⏩</a>
    </div>
   
    <div className="panels">     
   
  <div className="panel" id="one-panel">
    <div className="row">
 <div className="col-md-3">
 <select className="form-select">
  <option >Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 </div>

 <div className="col-md-3">
 <select className="form-select">
  <option >Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 </div>
 <div className="col-md-3">
 <select className="form-select" aria-label="Default select example">
  <option >Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 </div>
 <div className="col-md-3">
 <select className="form-select" aria-label="Default select example">
  <option >Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 </div>
 <div className="col-md-3 mt-4">
 <select className="form-select" aria-label="Default select example">
  <option >Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 </div>
 <div className="col-md-3 mt-4">
 <select className="form-select" aria-label="Default select example">
  <option >Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 </div>
 <div className="col-md-6 mt-4">
 <button type="button" className="btn btn-danger w-100">Find Yours</button>
 </div>
  </div>
  </div>
  <div className="panel" id="two-panel">
    <div className="panel-title">Take-Away Skills</div>
    <p>You will learn many aspects of styling web pages! You’ll be able to set up the correct file structure, edit text and colors, and create attractive layouts. With these skills, you’ll be able to customize the appearance of your web pages to suit your every need!</p>
  </div>
  <div className="panel" id="three-panel">
    <div className="panel-title">Note on Prerequisites</div>
    <p>We recommend that you complete Learn HTML before learning CSS.</p>
  </div>
  </div>
     </div>
    </>
  )
}

export default HeroTab;