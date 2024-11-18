import React from 'react';

const ArticleCards = ({ data }) => {
	// Sample data for blog listings
	return (
        <article className="curlinaryJourney-article">
        <div className="article-wrapper">
          <figure>
            <img src={data.image} alt={data.name} />
          </figure>
          <div className="article-body">
            <h2>{data.name}</h2>
            <p>
             {data.shortDescription}
            </p>
            <span className="read-more">
              Read more <span className="sr-only">about this is some title</span>
            </span>
          </div>
        </div>
      </article>
	);
};

export default ArticleCards;
