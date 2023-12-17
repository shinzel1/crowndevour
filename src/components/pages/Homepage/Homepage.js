import React from 'react';
import './Homepage.css';
import FeaturedLocations from './Sections/featured-locations/featured-locations'
import ImageBanner from '../Homepage/Sections/ImageBanner/image-banner';
import JoinUsBanner from '../Homepage/Sections/join-us-banner/join-us-banner'
import SearchFilter from '../Homepage/Sections/search-filter/search-filter'
import CulinaryJournery from './Sections/culinary-journey/CulinaryJourney';

function Homepage() {
  return (
    <div className="homepage">
      <div>
        <ImageBanner />
      </div>
      <section className="featured-locations">
        <h2>Featured Locations</h2>
        <p>Explore Our Top Picks</p>
        <p>
          Discover handpicked restaurants, cozy cafes, and vibrant thelas in the most exciting culinary destinations. From street food gems to fine dining experiences, these places are a must-visit.
        </p>
        <div>
          <FeaturedLocations />
        </div>
      </section>

      <SearchFilter />

      <section className="cta">
        <h2>Ready to Embark on a Culinary Journey?</h2>
        <p>Discover the Best Food Experiences Here</p>
        <div>
          <CulinaryJournery />
          {/* <JoinUsBanner /> */}
        </div>
      </section>
    </div>
  );
}

export default Homepage;
