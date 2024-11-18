import React, { useEffect } from 'react';
import './BlogPostDetail.css';
import { useLocation, Link } from "react-router-dom";
import BlogLists from "../../data/BlogPost.json"
import SchemaOrg from '../../commons/Schema/Schema';
import { useNavigate } from 'react-router-dom';
import BlogsArticle from '../../commons/blogsArticle/BlogsArticle';
import { Helmet } from 'react-helmet';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import restaurantImage from '../../data/Images/restaurant.avif'

function BlogPostDetail() {
	const location = useLocation();
	var { post } = ""
	var category = ["Continental", "Pizza", "Italian", "Burger", "Fast Food", "Rolls", "Mexican", "Beverages", "Sushi", "North Indian", "Chinese", "Mughlai", "Casual Dining", "Coffee", "Cafes", "Live Music", "Art & Culture"]
	var cuisine_tags = [
		"Italian", "Pasta", "Pizza", "Risotto", "Tiramisu", "Caprese Salad",
		"Mexican", "Tacos", "Enchiladas", "Guacamole", "Salsa", "Chiles Rellenos",
		"Asian", "Chinese", "Japanese", "Thai", "Indian", "Sushi", "Curry", "Stir-fry",
		"Mediterranean", "Greek", "Hummus", "Falafel", "Tabbouleh", "Kebabs",
		"Middle Eastern", "Lebanese", "Turkish", "Shawarma", "Baba Ganoush", "Kofta",
		"French", "Croissants", "Quiche", "Coq au Vin", "Ratatouille", "Crème Brûlée",
		"American", "Burgers", "BBQ", "Mac and Cheese", "Apple Pie", "Pancakes",
		"Latin American", "Brazilian", "Argentinian", "Empanadas", "Ceviche", "Tamales",
		"Caribbean", "Jamaican", "Cuban", "Ackee and Saltfish", "Plantains", "Rice and Beans",
		"African", "Moroccan", "Ethiopian", "Tagine", "Injera", "Bobotie"
	]
	if (location.state != null) {
		post = location.state.post;
	} else if (location.pathname.split('/').slice(-1).length > 0) {
		var idex = location.pathname.split('/').slice(-1)[0]
		post = BlogLists.filter(locatione => locatione.title == idex)[0]
		if (post == null) {
			window.location.href = "/404"
		}
	}
	const lastThreeBlogs = BlogLists.slice(-3)?.reverse()
	useEffect(() => {
		const body = document.querySelector('#root');

		body.scrollIntoView({
			behavior: 'smooth'
		}, 500)

	}, []);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		// 👇️ redirect to /contacts
		if (typeof document !== 'undefined') {
			navigate(`/location`, { state: { value: document.getElementById('search-query').value } });
		}
	}
	const fetchCategory = (item) => {
		if (typeof document !== 'undefined') {
			navigate(`/location`, { state: { category: item } });
		}
	}
	const fetchTags = (item) => {
		if (typeof document !== 'undefined') {
			navigate(`/location`, { state: { tags: item } });
		}
	}

	var itemListElement = []
	for (var i = 0; i < post?.sections?.length; i++) {
		var restaurant = {}
		restaurant["@type"] = "ListItem"
		restaurant["position"] = i + 1
		restaurant["name"] = post?.sections[i].name + "," + post?.location
		restaurant["description"] = post?.sections[i]?.shortDescription
		itemListElement.push(restaurant)
	}
	var blogSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": post?.name + " , " + post?.location,
		"description": post?.shortDescription,
		"author": {
			"@type": "Person",
			"name": "Shinzel"
		},
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://crowndevour.com/blogs/" + post.title
		},
		"keywords": post?.tags?.toString()
	}

	var schemaData = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		"name": post?.name,
		"description": post.shortDescription,
		"about": {
			"@type": "Place",
			"name": post.location,
		},
		"numberOfItems": post?.sections?.length,
		"itemListElement": itemListElement,
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": "https://crowndevour.com/blogs/" + post.title
		},
		"image": post?.imageSrc || post?.image,
		"keywords": post?.tags?.toString()
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
			},
			{
				"@type": "ListItem",
				"position": 2,
				"item": {
					"id": "https://crowndevour.com/blogs/" + post.title,
					"name": post.name,
					"url": "https://crowndevour.com/blogs/" + post.title
				}
			}
		]
	}


	// you can get this cardId anywhere in the component as per your requirement 
	return (
		<section className="section">
			<div className='container mb-2 breadcrumbs'>
				<Breadcrumb>
					<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
					<Breadcrumb.Item href="/blogs">Blogs</Breadcrumb.Item>
					<Breadcrumb.Item active>{post?.name}</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			<SchemaOrg data={blogSchema} />
			<SchemaOrg data={schemaData} />
			<SchemaOrg data={breadcrumbsList} />
			<Helmet>
				<meta name="robots" content="NOODP,NOYDIR" />
				<link rel="canonical" href={"https://crowndevour.com/blogs/" + post.title} />
				<title>{post?.name}</title>
				<meta name="description" content={post?.description} />
				<meta property="og:title" content={post?.name} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={"https://crowndevour.com/blogs/" + post.title} />
				<meta property="og:image" content={post?.imageSrc} />
				<meta property="og:description" content={post.shortDescription} />
				<meta property="og:site_name" content={post?.name} />
			</Helmet>
			<div className="container">
				<div className="row">
					<div className="col-lg-8  mb-5 mb-lg-0">
						<article className="row mb-5">
							<div className="col-12">
								<div className="post-slider">
									<img loading="lazy" src={post?.imageSrc} className="img-fluid" alt={post?.name} />
								</div>
							</div>
							<div className="col-12 mx-auto">
								<h1><span className="post-title">{post?.name}</span></h1>
								<ul className="list-inline post-meta mb-4">
									<li className="list-inline-item"><i className="ti-user mr-2"></i>
										<span>{post?.author?.name}</span>
									</li>
									{/* <li className="list-inline-item">Categories : <span className="ml-1"> {post?.tags}</span>
									</li> */}
									<li className="list-inline-item">
										{post?.tags?.slice(0, 3)?.map((item) => (
											<span className="ml-1" onClick={() => fetchTags(item)}>{item} </span>
										))}
									</li>
								</ul>
								<div style={{ textAlign: 'left' }}>
									<section className='blogSection'>
										<p>
											{post?.description}
										</p>
									</section>
									<section className='blogSection'>
										<h2>About the Location</h2>
										<p>
											{post?.aboutTheLocation}
										</p>
									</section>
									{/* <section className='blogSection'>
										<h2>Local Food Experiences</h2>
										<ul>
											{post?.localFoodExperiences?.map((sect, index) => (
												<div>
													<li><b>{sect.name}</b></li>
													<p>{sect.description}</p>
												</div>
											))}
										</ul>
									</section> */}
									<section className='blogSection'>
										<h2>Must-Try Dishes</h2>
										<div className='container'>
											<div className='row'>
												{post?.mustTryDishes?.map((item, index) => (
													<div className="col-lg-4 col-sm-4 mb-4">
														<div className="card">
															<div className="card-image">
																<img src={item.image ? item?.image : restaurantImage} />
															</div>
															<div className="card-text">
																{/* <p className="card-meal-type">Breakfast/Eggs</p> */}
																<h3 className="card-title">{item?.name}</h3>
																{/* <p className="card-body">{item.description}</p> */}
															</div>
															{/* <div className="card-price">$56</div> */}
														</div>
													</div>
												))}
											</div>
										</div>
									</section>
									<section className='blogSection'>
										<h2>Available outlets near {post?.location}</h2>

										<div className="container">
											<div className="row">
												<div className="col-lg-12">
													<div className="title text-center">
														<h2 className="mb-5">Posted by this author</h2>
													</div>
												</div>
												{post?.sections?.map((location, index) => (
													<div>
														{/* <Link to={'/location/' + location.title} state={{ loc: location }}> */}
														<BlogsArticle data={location} loc={post?.location} />
														{/* </Link> */}
													</div>
												))}
											</div>
										</div>
									</section>
									<section className='blogSection'>
										<h2>Tips for Foodies</h2>
										<ul>
											{post?.tipsForFoodies?.map((sect, index) => (
												<li>{sect}</li>
											))}
										</ul>
									</section>
									<section className='blogSection'>
										<h2>Personal Recommendations</h2>
										<p>
											{post?.personalRecommendations}
										</p>
									</section>
									<section className='blogSection'>
										<h2>Conclusion</h2>
										<p>
											{post?.conclusion}
										</p>
									</section>
									<section className='blogSection'>
										<h2>
											Tags:
										</h2>
										<li className="list-inline-item">
											{post?.tags?.map((item) => (
												<span className="btn btn-outline-dark m-1" onClick={() => fetchTags(item)}>{item} </span>
											))}
										</li>
									</section>
								</div>
							</div>
						</article>
					</div>
					<aside className="col-lg-4">
						<div className='widget'>
							<iframe src={post?.locationUrl} width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
						<div className="widget">
							<h5 className="widget-title"><span>Search</span></h5>
							<form action="/logbook-hugo/search" className="widget-search">
								<input id="search-query" name="s" type="search" placeholder="Type &amp; Hit Enter..." />
								<button type="submit" onClick={(e) => handleSubmit(e)}><i className="ti-search"></i>
								</button>
							</form>
						</div>
						<div className="widget">
							<h5 className="widget-title"><span>Latest Article</span></h5>

							{lastThreeBlogs.map((location, index) => (
								<Link to={'/blogs/' + location?.title}>
									<ul className="list-unstyled widget-list">
										<li className="media widget-post align-items-center">
											<span>
												<img loading="lazy" className="mr-3" src={location?.imageSrc} alt={location?.name} />
											</span>
											<div className="media-body">
												<h5 className="h6 mb-0"><span>{location?.name}</span></h5>
												<small>{location?.date}</small>
											</div>
										</li>
									</ul>
								</Link>
							))}
						</div>
						<div className="widget">
							<h5 className="widget-title"><span>Categories</span></h5>
							<ul className="list-unstyled widget-list">
								{category.slice(0, 3).map((item, index) => (
									<li><span className="d-flex" onClick={() => fetchCategory(item)}>{item}
										<small className="ml-auto">({index})</small>
									</span>
									</li>
								))}
							</ul>
						</div>
						<div className="widget">
							<h5 className="widget-title"><span>Tags</span></h5>
							<ul className="list-inline widget-list-inline">
								{cuisine_tags.map((item, index) => (
									<li className="list-inline-item" onClick={() => fetchTags(item)}><span>{item}</span>
									</li>
								))}
							</ul>
						</div>

					</aside>
				</div>
			</div>
		</section>
	)
}

export default BlogPostDetail;
