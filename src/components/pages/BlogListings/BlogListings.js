import React from 'react';
import blogPosts from '../../data/BlogPost.json'
import BlogPostCards from '../../commons/blogPostCards/blogPostCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../commons/blogPostCards/blogPostCards.css'
import './BlogListings.css'
import { Link } from 'react-router-dom'
const BlogListings = () => {
  // Sample data for blog listings
  return (
    <div>
      {/* <header className='blogPostHeader'>
        <h1>Blog and Article Listings</h1>
      </header> */}
      <div className='BlogListing centered'>
        <Row xs={1} md={4} className="g-4">
          {blogPosts.map((post, index) => (
            <Col key={index}>
              <Link to={'/blogs/' + post.title} state={{ post: post }}>
                <BlogPostCards key={post.title} data={post} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BlogListings;
