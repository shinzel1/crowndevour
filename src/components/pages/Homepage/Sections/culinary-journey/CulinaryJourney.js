import React from 'react';
import '../culinary-journey/CulinaryJourney.css'
import ArticleCards from '../../../../commons/articlesCards/articlesCards';
import CitiesPosts from '../../../../data/CitiesPost.json'
import { Link } from 'react-router-dom';
import SchemaOrg from '../../../../commons/Schema/Schema';



function CulinaryJournery() {

  var itemListElement = []
  for (var i = 0; i < CitiesPosts.length; i++) {
    var city = {}
    city["@type"] = "ListItem"
    city["position"] = i + 1
    city["name"] = CitiesPosts[i].title
    city["description"] = CitiesPosts[i].shortDescription
    itemListElement.push(city)
  }

  var schemaBlogList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": itemListElement
  }

  return (
    <section className="articles CulinaryJournery">
      <SchemaOrg data={schemaBlogList} />
      {CitiesPosts.slice(0, 3).map((location, index) => (
        <Link to={'/city/' + location.title} state={{ loc: location }} key={location.title + "CurlinaryJourney" + index}>
          <ArticleCards data={location} key={location.title + "CurlinaryJourney" + index} />
        </Link>
      ))}
    </section>
  )
}
export default CulinaryJournery