import React from 'react';
import '../culinary-journey/CulinaryJourney.css'
import ArticleCards from '../../../../commons/articlesCards/articlesCards';
import CitiesPosts from '../../../../data/CitiesPost.json'
import { Link } from 'react-router-dom';

function CulinaryJournery() {
  return (
    <section className="articles CulinaryJournery">
      {CitiesPosts.map((location,index) => (
        <Link to={'/city/' + location.title} state={{ loc: location }} key={location.title+"CurlinaryJourney" + index}>
          <ArticleCards data={location} key={location.title+"CurlinaryJourney" + index} />
        </Link>
      ))}
    </section>
  )
}
export default CulinaryJournery