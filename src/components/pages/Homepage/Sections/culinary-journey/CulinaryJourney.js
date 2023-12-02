import React from 'react';
import '../culinary-journey/CulinaryJourney.css'
import ArticleCards from '../../../../commons/articlesCards/articlesCards';
import CitiesPosts from '../../../../data/CitiesPost.json'
import { Link } from 'react-router-dom';

function CulinaryJournery() {
  return (
    <section className="articles CulinaryJournery">
      {CitiesPosts.map((location) => (
        <Link to={'/location/' + location.title} state={{ loc: location }}>
          <ArticleCards data={location} />
        </Link>
      ))}
    </section>
  )
}
export default CulinaryJournery