import React, { useEffect } from 'react';
import blogPosts from '../../data/BlogPost.json'
import BlogPostCards from '../../commons/blogPostCards/blogPostCards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../commons/blogPostCards/blogPostCards.css'
import './BlogListings.css'
import { Link, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Logo from '../../data/Images/WholeImage.png'
import SchemaOrg from '../../commons/Schema/Schema';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

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
      } else {
        window.location.href = "404"
      }
    }
    const body = document.querySelector('#root');
    body.scrollIntoView({
      behavior: 'smooth'
    }, 500)
  }, []);
  const navigate = useNavigate();

  const fetchTags = (item) => {
    if (typeof document !== 'undefined') {
      navigate(`/location`, { state: { tags: item } });
    }
  }
  // var str = ""
  // for(var i= 0 ;i<blogPosts.length;i++){
  //   str +="<url><loc>https://crowndevour.com/blogs/"+ blogPosts[i]?.title+"</loc><lastmod>2024-09-03</lastmod></url>"
  // }
  // console.log(str)
  var data =
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "url": "https://crowndevour.com/blogs",
    "name": "crowndevour Blogs",
    "description": "Read Our Latest Blog Posts",
    "publisher": {
      "@type": "Organization",
      "name": "Crowndevour",
      "logo": {
        "@type": "ImageObject",
        "url": { Logo }
      }
    },
    "location": "New Delhi"
  }

  var breadcrumbsList = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 0,
        "item": {
          "id": "https://crowndevour.com",
          "name": "Home",
          "url": "https://crowndevour.com"
        }
      },
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "id": "https://crowndevour.com/blogs",
          "name": "blogs",
          "url": "https://crowndevour.com/blogs"
        }
      }
    ]
  }

  var itemListElement = []
  for (var i = 0; i < blogPosts.length; i++) {
    var restaurant = {}
    restaurant["@type"] = "ListItem"
    restaurant["position"] = i + 1
    restaurant["name"] = blogPosts[i].name
    restaurant["description"] = blogPosts[i].shortDescription
    itemListElement.push(restaurant)
  }

  var schemaList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": itemListElement
  }


  return (
    <div>
      <h1 className='blogPostHeading'>Read Our Latest Blog Posts!</h1>
      <div className='container mb-2 breadcrumbs'>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <SchemaOrg data={data} />
      <SchemaOrg data={breadcrumbsList} />
      <SchemaOrg data={schemaList} />
      <Helmet>
        <meta name="robots" content="NOODP,NOYDIR" />
        <link rel="canonical" href="https://crowndevour.com/blogs" />
        <title>Blog Posts</title>
        <meta name="description" content="Help yourself fiding handpicked cafes, restaurants, and food stalls! Discover diverse flavors and settings in this gastronomic exploration." />
      </Helmet>
      <div className='BlogListing centered container'>
        <Row xs={1} md={3} className="g-3">
          {blogPosts.reverse().map((post, index) => (
            <Col key={index} className=''>
              <Link to={'/blogs/' + post.title} state={{ post: post }} className='blog-article'>
                <BlogPostCards key={"blogsCards" + index} data={post} />
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BlogListings;
