import React, { useEffect } from 'react';
import './LocationDetail.css';
import { useLocation, Link } from "react-router-dom";
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
			<Modal.Body className="p-0">
				<img
					loading="lazy"
					src={props.item}
					className="img-fluid w-100 h-100"
					alt={"menuImage"}
					style={{ objectFit: 'contain' }}
				/>
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
		"Italian", "Pasta", "Pizza", "Mexican", "Tacos",
		"Asian", "Chinese", "Japanese", "Thai", "Indian", "Sushi", "Curry",
		"Mediterranean", "Greek", "Hummus", "Falafel", "Tabbouleh", "Kebabs",
		"Middle Eastern", "Lebanese", "Turkish", "Shawarma", "Kofta",
		"French", "Croissants", "American", "Burgers", "BBQ", "Mac and Cheese", "Pancakes",
		"Latin American", "Brazilian", "Argentinian",
		"Caribbean", "Jamaican", "Cuban",
		"African"
	]
	if (location.state !== null) {
		loc = location.state.loc;
	} else if (location.pathname.split('/').slice(-1).length > 0) {
		var idex = location.pathname.split('/').slice(-1)[0]
		loc = locationLists.filter(locatione => locatione.title === idex)[0]
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
	const [imageShow, setImageShow] = React.useState("");
	useEffect(() => {
		const body = document.querySelector('#root');

		body.scrollIntoView({
			behavior: 'smooth'
		}, 500)
	}, []);
	const categoryArr = loc.category
	// const categoryArr = loc.category?.toString()?.split(' ')?.join(',')?.split(',')
	var filteredLocations = locationLists.filter((location) => {
		const name = location?.name?.toLowerCase();
		const description = location?.description?.toString()?.toLowerCase();
		const locationName = location?.location?.toLowerCase();
		const category = location?.category?.toString()?.toLowerCase()
		const tags = location?.tags?.toString()?.toLowerCase()
		const text = name + description + locationName + category + tags
		for (var i = 0; i < categoryArr?.length; i++) {
			if (loc?.title !== location?.title)
				return text?.includes(categoryArr[i].toLowerCase().trim())
		}
	})
	var filteredBlogs = blogPosts.filter((blog) => {
		const name = blog?.name?.toLowerCase();
		const description = blog?.description?.toString()?.toLowerCase();
		const blogName = blog?.location?.toLowerCase();
		const category = blog?.category?.toString()?.toLowerCase()
		const sections = JSON.stringify(blog?.sections)?.toLowerCase()
		const tags = blog?.tags?.toString()?.toLowerCase()
		const text = name + description + blogName + category + tags + sections
		for (var i = 0; i < categoryArr?.length; i++) {
			if (loc?.title !== blog?.title)
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

	var schemaData = {}

	schemaData["@context"] = "https://schema.org"
	schemaData["@type"] = "Restaurant"
	schemaData["name"] = loc?.name
	schemaData["image"] = loc?.imageSrc || loc?.image
	loc?.overview ? (schemaData["description"] = loc?.overview) : (schemaData["description"] = loc?.shortDescription)
	schemaData["address"] = {
		"@type": "PostalAddress",
		"streetAddress": loc?.location,
		"addressCountry": "IN"
	}
	schemaData["menu"] = MenuItemList
	schemaData["aggregateRating"] = {
		"@type": "AggregateRating",
		"ratingValue": loc?.rating,
		"bestRating": "5",
		"ratingCount": "1"
	}
	// schemaData["servesCuisine"] =Punjabi
	if (loc?.additional_info?.price_for_two) {
		schemaData["priceRange"] = loc?.additional_info?.price_for_two
	}
	schemaData["url"] = "https://crowndevour.com/location/" + loc?.title
	// schemaData["additionalType"] = loc?.name
	schemaData["additionalType"] = "https://schema.org/IndianRestaurant"
	schemaData["keywords"] = loc?.tags?.toString()
	schemaData["highlights"] = loc.highlights?.toString()
	// schemaData["specialty"] = "Punjabi Cuisine"
	schemaData["name"] = loc?.name

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
	const handleOpenModal = (item) => {
		setModalShow(true);
		setImageShow(item);
	};

	return (
		<section className="section">
			<div className='container mb-2 breadcrumbs'>
				<Breadcrumb>
					<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
					<Breadcrumb.Item href="/location">Restaurants</Breadcrumb.Item>
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
					<meta name="description" content={loc?.name + " " + loc?.location + " , " + "View reviews, menu, contact, location, and for more"} />
					<meta property="og:title" content={loc?.name + " " + loc?.location} />
					<meta property="og:type" content="website" />
					<meta property="og:url" content={"https://crowndevour.com/location/" + loc.title} />
					<meta property="og:image" content={loc?.imageSrc} />
					<meta property="og:description" content={loc?.name + " " + loc?.location + " , " + "View reviews, menu, contact, location, and for more"} />
					<meta property="og:site_name" content={loc?.name} />
				</Helmet>
			</HelmetProvider>
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
									{(loc?.additional_info !== undefined && loc?.additional_info !== "") ?
										<li className="list-inline-item">
											<span><strong>Timing :</strong> {loc?.additional_info?.timing}</span>
											<span><strong> Price for Two :</strong> {loc?.additional_info?.price_for_two}</span>
										</li>
										: ""}
									<li className="list-inline-item"><span> <strong>Rating :</strong> <Rating name="size-medium" defaultValue={loc?.rating} readOnly /> {loc?.rating}</span>
									</li>

								</ul>
								<MyVerticallyCenteredModal
									show={modalShow}
									onHide={() => { setModalShow(false); }} item={imageShow}
								/>
								{(loc?.overview !== undefined && loc?.overview !== "")
									? <div className='full-detailed-section'>
										<div className="sections">
											<h4><strong>Overview</strong></h4>
											<p>{loc?.overview}</p>
										</div>
										<hr className='hr-divider'></hr>
										<div className="sections">
											<h4><strong>Menu</strong></h4>
											<div className='container-box'>
												<div className="">
													{menuImage?.map((item, index) => (
														<div className="box" style={{
															backgroundImage: "url(" + item + ")",
															backgroundPosition: 'center',
															backgroundSize: 'cover',
															backgroundRepeat: 'no-repeat'
														}}
															onClick={() => handleOpenModal(item)}
														>
														</div>
													))}
												</div>
											</div>
										</div>
										<hr className='hr-divider'></hr>
										<div className="sections">
											<h4><strong>Ambiance</strong></h4>
											<p>{loc?.ambiance?.description}</p>
											<ul>
												{loc?.ambiance?.features?.map((item, index) => (
													<li key={index}>{item}</li>
												))}
											</ul>
										</div>
										<hr className='hr-divider'></hr>

										<div className="sections">
											<h4><strong>Cuisine</strong></h4>
											<p>{loc?.cuisine?.description}</p>
											<ul className='cuisine-list'>
												{Object.entries(loc?.cuisine?.menu_sections).map(([key, value]) => (
													<li key={key}><strong>{key.replaceAll('_', ' ').toString()} :</strong> {value}</li>
												))}
											</ul>
										</div>
										<hr className='hr-divider'></hr>
										<div className="sections">
											<h4><strong>Must-Try Dishes</strong></h4>
											<ul>
												{loc?.must_try?.map((item, index) => (
													<li key={index}>{item}</li>
												))}
											</ul>
										</div>
										<hr className='hr-divider'></hr>
										<div className="sections">
											<h4><strong>Service</strong></h4>
											<ul className='cuisine-list'>
												{Object.entries(loc?.service).map(([key, value]) => (
													<li key={key}><strong>{key.replaceAll('_', ' ').toString()} :</strong> {value}</li>
												))}
											</ul>
										</div>
										<hr className='hr-divider'></hr>
										<div className="sections">
											<h4><strong>Why Visit {loc?.name}?</strong></h4>
											<ul>
												{loc?.reasons_to_visit?.map((item, index) => (
													<li key={index}>{item}</li>
												))}
											</ul>
										</div>
										<hr className='hr-divider'></hr>
										<div className="sections">
											<h4><strong>Tips for Visitors</strong></h4>
											<ul className='cuisine-list'>
												{Object.entries(loc?.tips_for_visitors).map(([key, value]) => (
													<li key={key}><strong>{key.replaceAll('_', ' ').toString()} :</strong> {value}</li>
												))}
											</ul>
										</div>
									</div>
									: <div className='brief-details'>
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
																<img src={item.image} />
															</div>
															<div className="card-text">
																<h2 className="card-title">{item.name}</h2>
															</div>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								}
								<section className='blogSection float-left text-left'>
									<h4><strong>Tags</strong></h4>
									<li className="list-inline-item">
										{loc?.tags?.map((item) => (
											<span className="btn btn-outline-dark m-1" onClick={() => fetchTags(item)}>{item}</span>
										))}
									</li>
								</section>
								<section className='blogSection float-left text-left'>
									<h4><strong>Categories</strong></h4>
									<li className="list-inline-item">
										{loc?.category?.map((item) => (
											<span className="btn btn-outline-dark m-1" onClick={() => fetchCategory(item)}>{item}</span>
										))}
									</li>
								</section>
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
													{filteredLocations.slice(-3)?.reverse()?.map((location, index) => (
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
													{filteredBlogs.slice(-3)?.reverse().map((post, index) => (
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
							</div>
						</article>
					</div>
					<aside className="col-lg-4">
						<div className="widget">
							<h5 className="widget-title"><span>Find Restaurant</span></h5>
							<form action="/logbook-hugo/search" className="widget-search">
								<input id="search-query" name="s" type="search" placeholder="Search..." />
								<button type="submit" onClick={(e) => handleSubmit(e)}><i className="ti-search"></i>
								</button>
							</form>
						</div>
						<div className='widget'>
							<iframe src={loc.locationUrl} width="400" height="300" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
						{(loc?.location_details !== undefined && loc?.location_details !== "") ?

							<div className='widget'>
								<div className="sections">
									<p><strong>Address:</strong> {loc?.location_details?.address}</p>
									{(loc?.location_details?.nearest_metro !== undefined && loc?.location_details?.nearest_metro !== "") ?
										<p><strong>Nearest Metro:</strong> {loc?.location_details?.nearest_metro}</p>
										: ""}
									<p><strong>Parking:</strong> {loc?.location_details?.parking}</p>
								</div>
							</div> : ""}
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
