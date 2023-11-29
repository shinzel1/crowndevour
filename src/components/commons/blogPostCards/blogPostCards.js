import React from 'react';

const BlogPostCards = ({ data }) => {
	// Sample data for blog listings
	return (
		// <article className='blog-article'>
		// 	<div className="blog-article-wrapper">
		// 		<figure>
		// 			<img src={data.imageSrc} alt="" />
		// 		</figure>
		// 		<div className="blog-article-body">
		// 			<h2>{data.title}</h2>
		// 			<p>
		// 				{data.description}
		// 			</p>
		// 			<a href="#" className="read-more">
		// 				Read more <span className="sr-only">{data.highlight}</span>
		// 			</a>
		// 		</div>
		// 	</div>
		// </article>
		<article className="mb-5">
              <div className="post-slider slider-sm">
                <img loading="lazy" src= {data.imageSrc} className="img-fluid" alt="post-thumb" />
                {/* <img loading="lazy" src={post1} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={post3} className="img-fluid" alt="post-thumb" /> */}
              </div>
              <h3 className="h5"><a className="post-title" href="post-elements.html">{data.title}</a></h3>
              <ul className="list-inline post-meta mb-2">
                <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John
                  Doe</a>
                </li>
                <li className="list-inline-item">Date : March 15, 2020</li>
                <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photography </a>
                </li>
                <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Photo </a> ,<a href="#!"
                  className="ml-1">Image </a>
                </li>
              </ul>
              <p>Heading example Here is example of hedings. You can use this heading by following markdownify
                rules. …</p> <a href="post-elements.html" className="btn btn-outline-primary">Continue
                  Reading</a>
            </article>
	);
};

export default BlogPostCards;
