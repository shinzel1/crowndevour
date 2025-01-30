import React, { useEffect } from 'react';
import './CityDetails';
import { useLocation, Link } from "react-router-dom";
import blogPosts from '../../data/BlogPost.json'
import locationLists from "../../data/CafeRestaurants.json"
import cityList from "../../data/CitiesPost.json"
import SchemaOrg from '../../commons/Schema/Schema';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import LocationCards from '../../commons/locationCard/locationCard'
import { Helmet } from 'react-helmet';
import BlogPostCards from '../../commons/blogPostCards/blogPostCards';
import Logo from '../../data/Images/WholeImage.png'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function LocationDetail() {
	const location = useLocation();
	var { loc } = ""
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
		loc = location.state.loc;
	} else if (location.pathname.split('/').slice(-1).length > 0) {
		var idex = location.pathname.split('/').slice(-1)[0]
		loc = cityList.filter(locatione => locatione.title == idex)[0]
		if (loc == null) {
			window.location.href = "/404"
		}
	}
	const lastThreeLocations = locationLists.slice(-3)
	const [modalShow, setModalShow] = React.useState(false);
	useEffect(() => {
		const body = document.querySelector('#root');

		body.scrollIntoView({
			behavior: 'smooth'
		}, 500)
	}, []);
	var query = loc.name.toLowerCase()
	var filteredLocations = locationLists.filter((location) => {
		const name = location?.name?.toLowerCase();
		const description = location?.description?.toString()?.toLowerCase();
		const locationName = location?.location?.toLowerCase();
		const category = location?.category?.toString()?.toLowerCase()
		const tags = location?.tags?.toString()?.toLowerCase()
		return name?.includes(query) || description?.includes(query) || locationName?.includes(query) || category?.includes(query) || tags?.includes(query);
	});
	var filteredBlogs = blogPosts.filter((post) => {
		const name = post?.name?.toLowerCase();
		const description = post?.description?.toString()?.toLowerCase();
		const locationName = post?.location?.toLowerCase();
		const category = post?.category?.toString()?.toLowerCase()
		const tags = post?.tags?.toString()?.toLowerCase()
		return name?.includes(query) || description?.includes(query) || locationName?.includes(query) || category?.includes(query) || tags?.includes(query);
	});

	var data =
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"url": "https://crowndevour.com/city/" + loc.name,
		"name": loc.name,
		"description": loc.shortDescription,
		"publisher": {
			"@type": "Organization",
			"name": "Crowndevour",
			"logo": {
				"@type": "ImageObject",
				"url": { Logo }
			}
		},
		"keywords": loc?.tags?.toString(),
		"image": loc?.toString(),

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
					"id": "https://crowndevour.com/city/" + loc.name,
					"name": loc.name,
					"url": "https://crowndevour.com/city/" + loc.name
				}
			}
		]
	}

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

	// you can get this cardId anywhere in the component as per your requirement 
	return (
		<section className="section">
			<div className='container mb-2 breadcrumbs'>
				<Breadcrumb>
					<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
					<Breadcrumb.Item active>{loc?.name}</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			<SchemaOrg data={data} />
			<SchemaOrg data={breadcrumbsList} />
			<Helmet>
				<meta name="robots" content="NOODP,NOYDIR" />
				<link rel="canonical" href={"https://crowndevour.com/city/" + loc.title} />
				<title>{loc.name}</title>
			</Helmet>
			<div className="container">
				<div className="row">
					<div className="col-lg-8  mb-5 mb-lg-0">
						<article className="row mb-5">
							<div className="col-12">
								<div className="post-slider rounded">
									<img loading="lazy" src={loc.image} className="img-fluid" alt={loc.name} />
								</div>
							</div>
							<div className="col-12 mx-auto">
								<h1><span className="post-title">{loc.name}</span>
								</h1>
								<ul className="list-inline post-meta mb-4">
									<li className="list-inline-item"><i className="ti-user mr-2"></i>
										<span>Shinzel</span>
									</li>
									<li className="list-inline-item">Categories :
										{loc?.category?.map((item, index) => (
											<span className="ml-1" onClick={() => fetchCategory(item)}>{item}</span>
										))}
									</li>
									<li className="list-inline-item"><span>Rating : <Rating name="size-medium" defaultValue={4} readOnly /></span>
									</li>
								</ul>
								<div className='description'>
									{loc?.description}
									{loc?.sections?.map((item, index) => (
										<p>{item}</p>
									))}
								</div>
								<div>
									<div className="margin-top-3rem">
										<span className="fine-dining-checkpoint float-left">Fine Dining Checkpoints</span>
										<a className='text-Checkout float-right' href='/location'>Checkout for more</a>
									</div>
									<section className="">
										<div className="container">
											<hr id="two" data-symbol="✈"></hr>
											<div className="row">
												{filteredLocations.slice(-3).reverse().map((location, index) => (
													<div className="col-lg-4 col-sm-6 mb-4">
														<Link to={'/location/' + location.title} state={{ loc: location }}>
															<LocationCards data={location} />
														</Link>
													</div>
												))}
											</div>
										</div>
									</section>


									<div className="margin-top-3rem">
										<span className="fine-dining-checkpoint float-left">Related Blogs</span>
										<a className='text-Checkout float-right' href='/blogs'>Checkout for more</a>
									</div>
									<section className="">
										<div className="container">
											<hr id="two" data-symbol="✈"></hr>
											<div className="row">
												{filteredBlogs.slice(-3).reverse().map((post, index) => (
													<div className="col-lg-4 col-sm-6 mb-4">
														<Link to={'/blogs/' + post.title} state={{ post: post }}>
															<BlogPostCards data={post} />
														</Link>
													</div>
												))}
											</div>
										</div>
									</section>
									<section className='blogSection float-left text-left'>
										<h2>
											Tags:
										</h2>
										<li className="list-inline-item">
											{loc?.tags?.map((item) => (
												<span className="btn btn-outline-dark m-1" onClick={() => fetchTags(item)}>{item}</span>
											))}
										</li>
									</section>
								</div>
							</div>
						</article>
					</div>
					{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
					<aside className="col-lg-4">
						<div className='widget'>
							<iframe src={loc.locationUrl} width="400" height="300" style={{ border: 0 }} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

							{lastThreeLocations.map((location, index) => (
								<Link to={'/location/' + location.title} state={{ loc: location }}>
									<ul className="list-unstyled widget-list">
										<li className="media widget-post align-items-center">
											<span>
												<img loading="lazy" className="mr-3" src={location.image} alt={location.name} />
											</span>
											<div className="media-body">
												<h5 className="h6 mb-0"><span>{location.name}</span></h5>
												<small>{location.date}</small>
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

export default LocationDetail;
