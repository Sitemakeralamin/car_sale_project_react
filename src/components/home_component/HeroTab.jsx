import React from 'react'

const HeroTab = () => {
  return (
    <>
     <div class="warpper">
     <a href="" className="advanced">Advanced Search ⏩</a>
    <input type="radio" id="one" name="group" className="radio" checked/>
    <input type="radio" id="two" name="group" className="radio" />
    <input type="radio" id="three" name="group" className="radio" />
    <div className="tabs">
        <label className="tab" id="one-tab" htmlFor="one">Make/Model</label>
        <label className="tab" id="two-tab" htmlFor="two">Body Style</label>
        <label className="tab" id="three-tab" htmlFor="three">Payment</label>
    </div>
   
    <div className="panels">
  <div className="panel" id="one-panel">
    <div className="panel-title">Why Learn CSS?</div>
    <p>Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art!</p>
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