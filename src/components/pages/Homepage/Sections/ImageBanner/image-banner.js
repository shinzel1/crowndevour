import React from 'react';
import './image-banner.css'
import p1 from '../../../../data/Images/Banners/jen-p-FoG8lotg7AA-unsplash.jpg'
import p2 from '../../../../data/Images/Banners/zoe-EqgySSNO2kw-unsplash.jpg'
import p3 from '../../../../data/Images/Banners/monika-grabkowska-jsgJtBOR6jY-unsplash.jpg'
import p4 from '../../../../data/Images/Banners/chad-montano-eeqbbemH9-c-unsplash.jpg'
import p5 from '../../../../data/Images/Banners/nadine-primeau-n4RrgczkLJM-unsplash.jpg'

function ImageBanner(){
    return(<div className="container imageBanner">
    <h1 className="title">Crowndevour</h1>
    <h1 className="title title-large"> Welcome to Crowndevour, where you can discover the best places to eat out and enjoy street food in various cities.</h1>
    <div id="img-1" className="img-container">   
      <img className="img" src={p1}/>
    </div>
    
    {/* <div className="img-container second-animation">    
      <img className="img" src="https://wallpapershome.com/images/pages/pic_v/13886.jpg"/>
    </div> */}
    
    <div className="img-container fourth-animation">    
      <img className="img nba" src={p3}/>
    </div>
  
    <div className="img-container fifth-animation">    
      <img className="img" src={p4}/>
    </div>  
    <div className="img-container third-animation">    
      <img className="img" src={p2}/>
    </div>
    
    {/* <div id="img-6" className="img-container sixth-animation">    
      <img className="img" src="http://orig15.deviantart.net/3c71/f/2016/121/9/4/reaper_wallpaper__overwatch__by_prollgurke-da0wf9m.png"/>
    </div>   */}
      
    <div id="img-7" className="img-container seventh-animation">    
      <img className="img" src={p5}/>
    </div>
  </div>);
}
export default ImageBanner;