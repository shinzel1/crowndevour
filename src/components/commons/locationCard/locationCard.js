import React from 'react';
import { Helmet } from 'react-helmet';

const locationCard = ({data }) => {
	// Sample data for blog listings
	return (
    
		<article className="mb-5" id={data.title}>
      <Helmet>
       {/* <link rel="canonical" href="https://crowndevour.com/#/location" /> */}
        {/* <title>search cafe and restaurants</title> */}
        <meta name="description" content={data.name} />
      </Helmet>
                <div className="post-slider slider-sm blogPostCardImage">
                  <img loading="lazy" src={data.image} className="img-fluid" alt="post-thumb" />
                  {/* <img loading="lazy" src={post1} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={post3} className="img-fluid" alt="post-thumb" /> */}
                </div>
                <h3 className="h5"><a className="post-title" href="post-elements.html">{data.name}</a></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">{data.author}</a>
                  </li>
                  <li className="list-inline-item">Date : March 15, 2020</li>
                  <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photography </a>
                  </li>
                  <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Photo </a> ,<a href="#!"
                    className="ml-1">Image </a>
                  </li>
                </ul>
                <p>{data.description}</p> <a href="post-elements.html" className="btn btn-outline-primary">Continue
                    Reading</a>
              </article>
	);
};

export default locationCard;
