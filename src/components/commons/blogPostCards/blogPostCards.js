import React from 'react';

const BlogPostCards = ({ data }) => {
	// Sample data for blog listings
	return (
		<article className='blog-article'>
			<div className="blog-article-wrapper">
				<figure>
					<img src={data.imageSrc} alt="" />
				</figure>
				<div className="blog-article-body">
					<h2>{data.title}</h2>
					<p>
						{data.description}
					</p>
					<a href="#" className="read-more">
						Read more <span className="sr-only">{data.highlight}</span>
					</a>
				</div>
			</div>
		</article>
	);
};

export default BlogPostCards;
