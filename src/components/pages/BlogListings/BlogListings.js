import React,{useEffect }  from 'react';
import blogPosts from '../../data/BlogPost.json'
import BlogPostCards from '../../commons/blogPostCards/blogPostCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../commons/blogPostCards/blogPostCards.css'
import './BlogListings.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
      }else{
        window.location.href = "404"
      }
    }
    const body = document.querySelector('#root');
    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)
  }, []);


// print sitemap
  // var str = ""
  // for(var i= 0 ;i<blogPosts.length;i++){
  //   str +="<url><loc>https://crowndevour.com/blogs/"+ blogPosts[i]?.title+"</loc><lastmod>2024-03-19T05:33:05+00:00</lastmod></url>"
  // }
  // console.log(str)

  return (
    <div>
      <h1 className='blogPostHeading'>Read Our Latest Blog Posts!</h1>
      <Helmet>
      <link rel="canonical" href="https://crowndevour.com/blogs" />
        <title>Blog Posts</title>
        <meta name="description" content="Embark on a culinary journey through our handpicked cafes, restaurants, and food stalls! Discover diverse flavors and settings in this gastronomic exploration." />
      </Helmet>
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
