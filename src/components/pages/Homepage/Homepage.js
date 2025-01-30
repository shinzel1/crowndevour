import React from 'react';
import './Homepage.css';
import FeaturedLocations from './Sections/featured-locations/featured-locations'
import ImageBanner from '../Homepage/Sections/ImageBanner/image-banner';
import SearchFilter from '../Homepage/Sections/search-filter/search-filter'
import CulinaryJournery from './Sections/culinary-journey/CulinaryJourney';
import { Helmet } from 'react-helmet';
import SchemaOrg from '../../commons/Schema/Schema';
import Logo from '../../data/Images/WholeImage.png'
import { Link } from "react-router-dom";
import blogPosts from '../../data/BlogPost.json'
import locationLists from "../../data/CafeRestaurants.json"
import LocationCards from '../../commons/locationCard/locationCard'
import BlogPostCards from '../../commons/blogPostCards/blogPostCards';


function Homepage() {
  var { loc } = ""
  var data =
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://crowndevour.com",
    "name": "crowndevour",
    "description": "Crowndevour Delivers the Finest Dining Experience Across Top Cafes and Restaurants - Delhi, NCR, Gurugram, and Noida",
    "publisher": {
      "@type": "Organization",
      "name": "Crowndevour",
      "logo": {
        "@type": "ImageObject",
        "url": { Logo }
      }
    },
    "location": "New Delhi"
  }

  var itemListElement = []
  for (var i = 0; i < locationLists.length; i++) {
    var restaurant = {}
    restaurant["@type"] = "Restaurant"
    restaurant["name"] = locationLists[i].name
    restaurant["image"] = locationLists[i].image
    restaurant["cuisine"] = locationLists[i].tags?.toString()
    locationLists[i]?.overview ? (restaurant["description"] = locationLists[i]?.overview ) : (restaurant["description"] = locationLists[i]?.shortDescription )
    itemListElement.push(restaurant)
  }

  var schemaList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": itemListElement
  }

  for (var i = 0; i < blogPosts.length; i++) {
    var restaurant = {}
    restaurant["@type"] = "ListItem"
    restaurant["position"] = i + 1
    restaurant["name"] = blogPosts[i].name
    restaurant["description"] = blogPosts[i].shortDescription
    itemListElement.push(restaurant)
  }

  var schemaBlogList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": itemListElement
  }
  return (
    <div className="homepage">
      <SchemaOrg data={data} />
      <SchemaOrg data={schemaList} />
      <SchemaOrg data={schemaBlogList} />
      <Helmet>
        <meta name="robots" content="NOODP,NOYDIR" />
        <link rel="canonical" href="https://crowndevour.com" />
        <meta name="description"
          content="Crowndevour Delivers the Finest Dining Experience Across Top Cafes and Restaurants - Delhi, NCR, Gurugram, and Noida" />
        <title>CROWNDEVOUR : Finest Dining Experience for Top Cafes and Restaurants</title>
        <meta property="og:title" content="CROWNDEVOUR : Finest Dining Experience for Top Cafes and Restaurants" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crowndevour.com" />
        <meta property="og:image" content={Logo} />
        <meta property="og:description" content="Crowndevour Delivers the Finest Dining Experience Across Top Cafes and Restaurants - Delhi, NCR, Gurugram, and Noida" />
        <meta property="og:site_name" content="Crowndevour" />
      </Helmet>
      <div>
        <ImageBanner />
      </div>
      <div className=''>
        <SearchFilter />
      </div>
      <section className="featured-locations container">
        <div>
          <FeaturedLocations />
        </div>
      </section>

      <section>
        <div className='container'>
          <div className="margin-top-3rem">
            <span className="fine-dining-checkpoint float-left">Recent Dining Checkpoints</span>
            <a className='text-Checkout float-right' href='/location'>Checkout for more</a>
          </div>
          <section className="">
            <div className="container">
              <hr id="two" data-symbol="✈"></hr>
              <div className="row">
                {locationLists.slice(-3)?.reverse().map((location, index) => (
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <span className='blog-article'>
                      <LocationCards data={location} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>


          <div className="margin-top-3rem">
            <span className="fine-dining-checkpoint float-left">Latest Blogs</span>
            <a className='text-Checkout float-right' href='/blogs'>Checkout for more</a>
          </div>
          <section className="">
            <div className="container">
              <hr id="two" data-symbol="✈"></hr>
              <div className="row">
                {blogPosts.slice(-3)?.reverse().map((post, index) => (
                  <div className="col-lg-4 col-sm-6 mb-4">
                    <span className='blog-article'>
                      <BlogPostCards data={post} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
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
