import React from 'react';
import './Homepage.css';
import FeaturedLocations from './Sections/featured-locations/featured-locations'
import ImageBanner from '../Homepage/Sections/ImageBanner/image-banner';
import JoinUsBanner from '../Homepage/Sections/join-us-banner/join-us-banner'
import SearchFilter from '../Homepage/Sections/search-filter/search-filter'
import CulinaryJournery from './Sections/culinary-journey/CulinaryJourney';
import { Helmet } from 'react-helmet';
function Homepage() {
  return (
    <div className="homepage">
       <Helmet>
       <link rel="canonical" href="https://crowndevour.com" />
      </Helmet>
      <div>
        <ImageBanner />
      </div>
      <div className=''>
        <SearchFilter />
      </div>
      <section className="featured-locations">
        <h2>Featured Locations</h2>
        {/* <p>Explore Our Top Picks</p> */}
        <h6>
          Discover handpicked restaurants, cozy cafes, and vibrant thelas in the most exciting culinary destinations. From street food gems to fine dining experiences, these places are a must-visit.
        </h6>
        <div>
          <FeaturedLocations />
        </div>
      </section>
      <section className="cta">
        <h2>Explore Cafes and Restaurants Across Cities</h2>
        <h6>Indulge in a global culinary adventure as you explore cafes and restaurants, each city a unique chapter in the flavorful story of urban gastronomy.</h6>
        <div>
          <CulinaryJournery />
          {/* <JoinUsBanner /> */}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
