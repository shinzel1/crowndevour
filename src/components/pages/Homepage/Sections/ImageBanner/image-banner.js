import React from 'react';
import './image-banner.css'
function ImageBanner() {
  return (
    <div className="imageBanner">
      <h2 className="title">Crowndevour</h2>
      <h2 className="title title-large"> Welcome to Crowndevour, where you can discover the best places to eat out and enjoy street food in various cities.</h2>
      
      <div id="img-1" className="img-container">
        <img className="img" src="https://raw.githubusercontent.com/shinzel1/crowndevour/latest-update/public/images/banner/image1.webp" alt='image' />
      </div>
      <div className="img-container fourth-animation">
        <img className="img nba" src="https://raw.githubusercontent.com/shinzel1/crowndevour/latest-update/public/images/banner/image2.webp" alt='image' />
      </div>
      <div className="img-container fifth-animation">
        <img className="img" src="https://raw.githubusercontent.com/shinzel1/crowndevour/latest-update/public/images/banner/image3.webp" alt='image' />
      </div>
      <div className="img-container third-animation">
        <img className="img" src="https://raw.githubusercontent.com/shinzel1/crowndevour/latest-update/public/images/banner/image4.webp" alt='image' />
      </div>
      <div id="img-7" className="img-container seventh-animation">
        <img className="img" src="https://raw.githubusercontent.com/shinzel1/crowndevour/latest-update/public/images/banner/image5.webp" alt='image' />
      </div>
    </div>);
}
export default ImageBanner;