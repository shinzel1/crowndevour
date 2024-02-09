import React from 'react';
import './image-banner.css'
function ImageBanner(){
    return(<div className="container imageBanner">
    <h2 className="title">Crowndevour</h2>
    <h2 className="title title-large"> Welcome to Crowndevour, where you can discover the best places to eat out and enjoy street food in various cities.</h2>
    <div id="img-1" className="img-container">   
      <img className="img" src="https://github.com/shinzel1/crowndevour/blob/main/src/components/data/Images/Banners/jen-p-FoG8lotg7AA-unsplash.jpg?raw=true" alt='image' />
    </div>
    
    {/* <div className="img-container second-animation">    
      <img className="img" src="https://wallpapershome.com/images/pages/pic_v/13886.jpg" alt='image'/>
    </div> */}
    
    <div className="img-container fourth-animation">    
      <img className="img nba" src="https://github.com/shinzel1/crowndevour/blob/main/src/components/data/Images/Banners/monika-grabkowska-jsgJtBOR6jY-unsplash.jpg?raw=true" alt='image'/>
    </div>
  
    <div className="img-container fifth-animation">    
      <img className="img" src="https://github.com/shinzel1/crowndevour/blob/main/src/components/data/Images/Banners/chad-montano-eeqbbemH9-c-unsplash.jpg?raw=true" alt='image'/>
    </div>  
    <div className="img-container third-animation">    
      <img className="img" src="https://github.com/shinzel1/crowndevour/blob/main/src/components/data/Images/Banners/zoe-EqgySSNO2kw-unsplash.jpg?raw=true" alt='image'/>
    </div>
    
    {/* <div id="img-6" className="img-container sixth-animation">    
      <img className="img" src="http://orig15.deviantart.net/3c71/f/2016/121/9/4/reaper_wallpaper__overwatch__by_prollgurke-da0wf9m.png" alt="image"/>
    </div>   */}
      
    <div id="img-7" className="img-container seventh-animation">    
      <img className="img" src="https://github.com/shinzel1/crowndevour/blob/main/src/components/data/Images/Banners/nadine-primeau-n4RrgczkLJM-unsplash.jpg?raw=true" alt='image'/>
    </div>
  </div>);
}
export default ImageBanner;