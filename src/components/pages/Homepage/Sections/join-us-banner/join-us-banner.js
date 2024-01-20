import React from 'react';
import './join-us-banner.css'
import image1 from '../../../../data/Images/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg'
import Button from 'react-bootstrap/Button';
function JoinUsBanner(){
    return(

        <div className="container joinUsBanner centered shadowDiv border-radius1rem margin-top-4rem">
           <div className="banner">
              <div className="content">
                 <div className="content-wrapper">
                   <div className="headline">
                   Join us in exploring the world of flavors. Whether you're a foodie, an adventurer, or just looking for a delightful meal, your culinary adventure begins now.
                   </div>   
                   <div className='marginB'>

                   </div>
                   <Button variant="outline-primary"  size="lg" className='JoinUsButton'>Join Us</Button>{' '}
     
                  {/* <a href="https://www.netlify.com" className="btn outline-primary">
                    
                  </a> */}
                </div>
             </div>
             <div className="illo">
                <img className='image' src={image1} alt='image'/>
               image1
             </div>
          </div>
        </div>

    );
}
export default JoinUsBanner;