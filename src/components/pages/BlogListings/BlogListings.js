import React,{useEffect }  from 'react';
import blogPosts from '../../data/BlogPost.json'
import BlogPostCards from '../../commons/blogPostCards/blogPostCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../commons/blogPostCards/blogPostCards.css'
import './BlogListings.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const BlogListings = () => {
  // Sample data for blog listings
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("keyId");

  useEffect(() => {
    // Get the element by ID
    if (id !== null && id !== "null") {
      const element = document.getElementById(id);
      // Trigger a click event on the element
      if (element) {
        element.click();
      }
    }
  }, []);


  return (
    <div>
      <div className='BlogListing centered'>
        <Row xs={1} md={4} className="g-4">
          {blogPosts.map((post, index) => (
            <Col key={index}>
              <Link to={'/blogs/' + post.title} state={{ post: post }}>
                <BlogPostCards data={post} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BlogListings;
