import React from 'react';

const ArticleCards = ({ data }) => {
	// Sample data for blog listings
	return (
        <article className="curlinaryJourney-article">
        <div className="article-wrapper">
          <figure>
            <img src={data.image} alt="image" />
          </figure>
          <div className="article-body">
            <h2>{data.name}</h2>
            <p>
             {data.highlights}
            </p>
            <a href="#" className="read-more">
              Read more <span className="sr-only">about this is some title</span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg> */}
            </a>
          </div>
        </div>
      </article>
	);
};

export default ArticleCards;
