import React, { useEffect } from 'react';
import './LocationDetail.css';
import { useLocation, Link } from "react-router-dom";
import foodItemImage from "../../data/Images/cafe/kaffee-meister-_tc92wGVf60-unsplash.jpg"
import locationLists from "../../data/CafeRestaurants.json"
import SchemaOrg from '../../commons/Schema/Schema';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Breadcrumb } from 'react-bootstrap';
import blogPosts from '../../data/BlogPost.json'
import LocationCards from '../../commons/locationCard/locationCard'
import BlogPostCards from '../../commons/blogPostCards/blogPostCards';


var menuImage = [];
function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Menu
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{menuImage?.map((item, index) => (
					<img loading="lazy" src={item} className="img-fluid" alt="menu" />
				))}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}


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
		loc = locationLists.filter(locatione => locatione.title == idex)[0]
		if (loc == null) {
			window.location.href = "/404"
		}
	}
	var bestInMenu = []
	if (loc.bestInMenu) {
		bestInMenu = loc.bestInMenu
	}
	menuImage = loc.menuImage
	const lastThreeLocations = locationLists.slice(-3)
	const [modalShow, setModalShow] = React.useState(false);
	useEffect(() => {
		const body = document.querySelector('#root');

		body.scrollIntoView({
			behavior: 'smooth'
		}, 500)
	}, []);
	const categoryArr = loc.category
	// const categoryArr = loc.category?.toString()?.split(' ')?.join(',')?.split(',')
	var filteredData = locationLists.filter((location) => {
		const name = location?.name?.toLowerCase();
		const description = location?.description?.toString()?.toLowerCase();
		const locationName = location?.location?.toLowerCase();
		const category = location?.category?.toString()?.toLowerCase()
		const tags = location?.tags?.toString()?.toLowerCase()
		const text = name + description + locationName + category + tags
		for (var i = 0; i < categoryArr?.length; i++) {
			if (loc?.title != location?.title)
				return text?.includes(categoryArr[i].toLowerCase().trim())
		}
	})

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

	var MenuItemList = []
	for (var i = 0; i < loc?.bestInMenu?.length; i++) {
		var MenuItem = {}
		MenuItem["@type"] = "MenuItem"
		MenuItem["name"] = loc?.bestInMenu[i]?.name
		MenuItemList.push(MenuItem)
	}

	var schemaData = {
		"@context": "https://schema.org",
		"@type": "Restaurant",
		"name": loc?.name,
		"image": loc?.imageSrc || loc?.image,
		"description": loc?.shortDescription,
		"address": {
			"@type": "PostalAddress",
			"streetAddress": loc?.location,
			"addressCountry": "IN"
		},
		"menu": MenuItemList,
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": loc?.rating,
			"bestRating": "5",
			"ratingCount": "1"
		},
		// "servesCuisine": "Punjabi",
		// "priceRange": "$",
		"url": "https://crowndevour.com/location/" + loc?.title,
		"additionalType": "https://schema.org/IndianRestaurant",
		"keywords": loc?.tags?.toString(),
		// "specialty": "Punjabi Cuisine",
		"highlights": loc.highlights?.toString()
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
					"id": "https://crowndevour.com/location",
					"name": "locations",
					"url": "https://crowndevour.com/location"
				}
			},
			{
				"@type": "ListItem",
				"position": 2,
				"item": {
					"id": "https://crowndevour.com/location/" + loc.title,
					"name": loc.name,
					"url": "https://crowndevour.com/location/" + loc.title
				}
			}
		]
	}

	return (
		<section className="section">
			<div className='container mb-2 breadcrumbs'>
				<Breadcrumb>
					<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
					<Breadcrumb.Item href="/location">Locations</Breadcrumb.Item>
					<Breadcrumb.Item active>{loc?.name}</Breadcrumb.Item>
				</Breadcrumb>
			</div>
			<SchemaOrg data={schemaData} />
			<SchemaOrg data={breadcrumbsList} />
			<HelmetProvider>
				<Helmet>
					<meta name="robots" content="NOODP,NOYDIR" />
					<link rel="canonical" href={"https://crowndevour.com/location/" + loc.title} />
					<title>{loc?.name + ", " + loc?.location}</title>
					<meta name="description" content={loc?.name + ", " + loc?.location + " , " + "View reviews, menu, contact, location, and for more"} />
					<meta property="og:title" content={loc?.name + ", " + loc?.location} />
					<meta property="og:type" content="website" />
					<meta property="og:url" content={"https://crowndevour.com/location/" + loc.title} />
					<meta property="og:image" content={loc?.imageSrc} />
					<meta property="og:description" content={loc?.name + ", " + loc?.location + " , " + "View reviews, menu, contact, location, and for more"} />
					<meta property="og:site_name" content={loc?.name} />
				</Helmet>
			</HelmetProvider>
			<div className="container">
				<div className="row">
					<div className="col-lg-8  mb-5 mb-lg-0">
						<article className="row mb-5">
							<div className="col-12">
								<div className="post-slider">
									<img loading="lazy" src={loc.image} className="img-fluid" alt={loc.name} />
								</div>
							</div>
							<div className="col-12 mx-auto">
								<h1><span className="post-title">{loc.name}</span>
									<Button variant="primary" className='menu' onClick={() => setModalShow(true)}>
										<RestaurantMenuIcon />
									</Button>
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
									<li className="list-inline-item"><span>Rating : <Rating name="size-medium" defaultValue={loc?.rating} readOnly /></span>
									</li>
								</ul>
								<MyVerticallyCenteredModal
									show={modalShow}
									onHide={() => setModalShow(false)}
								/>
								<div className='description text-left'>
									<p>{loc.shortDescription}</p>
								</div>

								<div className='description text-left'>
									{loc?.description?.map((item, index) => (
										<p>{item}</p>
									))}
								</div>
								<h2 style={{ textAlign: "left" }}>Best In Menu</h2>
								<div className='container'>
									<div className='row'>
										{bestInMenu.map((item, index) => (
											<div className="col-lg-4 col-sm-4 mb-4">
												<div className="card">
													<div className="card-image">
														<img src={item.image ? item?.image : foodItemImage} />
													</div>
													<div className="card-text">
														{/* <p className="card-meal-type">Breakfast/Eggs</p> */}
														<h2 className="card-title">{item.name}</h2>
														{/* <p className="card-body">{item.description}</p> */}
													</div>
													{/* <div className="card-price">$56</div> */}
												</div>
											</div>
										))}
									</div>
								</div>

								<section className='blogSection'>
									<div className='container'>
										<div className="margin-top-3rem">
											<span className="fine-dining-checkpoint float-left">Similar Dining Checkpoints</span>
											<a className='text-Checkout float-right' href='/location'>Checkout for more</a>
										</div>
										<section className="">
											<div className="container">
												<hr id="two" data-symbol="✈"></hr>
												<div className="row">
													{filteredData.slice(-3)?.reverse().map((location, index) => (
														<div className="col-lg-4 col-sm-6 mb-4">
															<span className='blog-article'>
																<LocationCards data={location} />
															</span>
														</div>
													))}
												</div>
											</div>
										</section>


										<div className="margin-top-3rem">
											<span className="fine-dining-checkpoint float-left">Latest Blogs</span>
											<a className='text-Checkout float-right' href='/blogs'>Checkout for more</a>
										</div>
										<section className="">
											<div className="container">
												<hr id="two" data-symbol="✈"></hr>
												<div className="row">
													{blogPosts.slice(-3)?.reverse().map((post, index) => (
														<div className="col-lg-4 col-sm-6 mb-4">
															<span className='blog-article'>
																<BlogPostCards data={post} />
															</span>
														</div>
													))}
												</div>
											</div>
										</section>
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
						</article>
					</div>
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
									<li className="list-inline-item btn btn-outline-dark " onClick={() => fetchTags(item)}><span>{item}</span>
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
