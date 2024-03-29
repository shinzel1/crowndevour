import React from 'react';

const BlogPostCards = ({ data }) => {
	// Sample data for blog listings
	return (
	
		<article className="mb-5" id={data.title}>
              <div className="post-slider slider-sm blogPostCardImage">
                <img loading="lazy" src= {data.imageSrc} className="img-fluid image" alt="post-thumb" />
                {/* <img loading="lazy" src={post1} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={post3} className="img-fluid" alt="post-thumb" /> */}
              </div>
              <h3 className="h5"><a className="post-title" href={'/blogs/' + data.title}>{data.name}</a></h3>
              <ul className="list-inline post-meta mb-2">
                <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">Shinzel</a>
                </li>
                <li className="list-inline-item">Date : March 15, 2020</li>
                <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photography </a>
                </li>
                <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Photo </a> ,<a href="#!"
                  className="ml-1">Image </a>
                </li>
              </ul>
              <p> <span className='introduction'>{data.description}</span></p> 
              <a href={'/blogs/' + data.title} className="btn btn-outline-primary">Continue Reading</a>
            </article>
	);
};

export default BlogPostCards;
