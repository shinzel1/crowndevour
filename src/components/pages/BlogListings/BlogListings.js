import React, { useEffect, useState } from 'react';
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
import { IconButton, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const BlogListings = () => {
  // Sample data for blog listings
  var [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredLocations] = useState(blogPosts);
  const location = useLocation();
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("keyId");
  const searchQu = new URLSearchParams(search).get("search");
  const handleSearch = (val, filterVal) => {
    setSearchQuery(val)
    var query = val.toLowerCase();
    if (val?.trim() === "") {
      searchQuery = val
    } else if (searchQuery !== "") {
      query = searchQuery.toLowerCase().trim();
    }
    const filtered = blogPosts.filter((blog) => {
      const name = blog?.name?.toLowerCase();
      const shortDescription = blog?.shortDescription?.toString()?.toLowerCase();
      const description = blog?.description?.toString()?.toLowerCase();
      const aboutTheLocation = blog?.aboutTheLocation?.toString()?.toLowerCase();
      const sections = JSON.stringify(blog?.sections)?.toString()?.toLowerCase();
      const locationName = blog?.location?.toLowerCase();
      const tags = blog?.tags?.toString()?.toLowerCase()
      if (filterVal === "tags") {
        if (tags !== null) { return tags?.includes(query); }
      } else {
        const str = sections + " " + name + " " + shortDescription + " " + description + " " + locationName + " " + tags + " " + aboutTheLocation + " "
        return str?.includes(query)
        // return name?.includes(query) || shortDescription?.includes(query) || description?.includes(query) || locationName?.includes(query) || tags?.includes(query) || aboutTheLocation?.includes(query) || sections?.includes(query);
      }
    });
    setFilteredLocations(filtered);
  };

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

    setTimeout(() => {
      if (searchQu !== null && searchQu !== "null") {
        var searchBarBlogs = document.getElementById('searchBarBlogs')
        searchBarBlogs.value = searchQu
        setSearchQuery(searchQu)
        handleSearch(searchQu, "")
      } else if (location?.state?.value) {
        var searchBarBlogs = document.getElementById('searchBarBlogs')
        searchBarBlogs.value = location?.state?.value
        setSearchQuery(location?.state?.value)
        handleSearch(location?.state?.value, "")
      } else if (location?.state?.category) {
        var searchBarBlogs = document.getElementById('searchBarBlogs')
        searchBarBlogs.value = location?.state?.category
        setSearchQuery(location?.state?.category)
        handleSearch(location?.state?.category, "category")
      } else if (location?.state?.tags) {
        var searchBarBlogs = document.getElementById('searchBarBlogs')
        searchBarBlogs.value = location?.state?.tags
        setSearchQuery(location?.state?.tags)
        handleSearch(location?.state?.tags, "tags")
      } else {
        setSearchQuery("")
      }
    }, 1000);
    // print Location sitemap
    // var str = ""
    // for(var i= 0 ;i<filteredLocations.length;i++){
    //   str +="<url><loc>https://crowndevour.com/location/"+ filteredLocations[i]?.title+"</loc><lastmod>2024-09-03</lastmod></url>"
    // }
    // console.log(str)
  }, []);
  const navigate = useNavigate();

  const fetchTags = (item) => {
    if (typeof document !== 'undefined') {
      navigate(`/location`, { state: { tags: item } });
    }
  }
  // var str = ""
  // for(var i= 0 ;i<filteredBlogs.length;i++){
  //   str +="<url><loc>https://crowndevour.com/blogs/"+ filteredBlogs[i]?.title+"</loc><lastmod>2024-09-03</lastmod></url>"
  // }
  // console.log(str)
  var data =
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "url": "https://crowndevour.com/blogs",
    "name": "crowndevour Blogs",
    "description": "Read Our Latest Blog Posts",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://crowndevour.com/blogs?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
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
  for (var i = 0; i < filteredBlogs.length; i++) {
    var restaurant = {}
    restaurant["@type"] = "ListItem"
    restaurant["position"] = i + 1
    restaurant["name"] = filteredBlogs[i].name
    restaurant["description"] = filteredBlogs[i].shortDescription
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

      <div className='centerDiv padding-5'>
        <TextField
          variant="outlined"
          className='searchBar'
          id='searchBarBlogs'
          // InputProps={{
          //   endAdornment: (
          //     <IconButton color="primary">
          //       <SearchIcon />
          //     </IconButton>
          //   ),
          // }}
          type="text"
          placeholder="Search Through Blogs"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>


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
          {filteredBlogs.reverse().map((post, index) => (
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
