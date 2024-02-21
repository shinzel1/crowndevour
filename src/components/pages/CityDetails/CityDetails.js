import React, { useEffect } from 'react';
import './CityDetails';
import { useLocation, Link } from "react-router-dom";
import imagse from "../../data/Images/post/post-1.jpg"
import locationLists from "../../data/CafeResturants.json"
import SchemaOrg from '../../commons/Schema/Schema';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
					<img loading="lazy" src={item} className="img-fluid" alt="post-thumb" />
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
		
			<Helmet>
			<SchemaOrg data={loc} />
			<link rel="canonical" href={"https://crowndevour.com/CityDetails/" + loc.title} />
				<title>{loc.name}</title>
			</Helmet>
			<div className="container">
				<div className="row">
					<div className="col-lg-8  mb-5 mb-lg-0">
						<article className="row mb-5">
							<div className="col-12">
								<div className="post-slider">
									<img loading="lazy" src={loc.image} className="img-fluid" alt="post-thumb" />
								</div>
							</div>
							<div className="col-12 mx-auto">
								<h1><a className="post-title" href="#">{loc.name}</a>
									<Button variant="primary" className='menu' onClick={() => setModalShow(true)}>
										<RestaurantMenuIcon />
									</Button>
								</h1>
								<ul className="list-inline post-meta mb-4">
									<li className="list-inline-item"><i className="ti-user mr-2"></i>
										<a href="author.html">Shinzel</a>
									</li>
									<li className="list-inline-item">Date : March 15, 2020</li>
									<li className="list-inline-item">Categories :
										{loc?.category?.map((item, index) => (
											<a href="#!" className="ml-1" onClick={() => fetchCategory(item)}>{item}</a>
										))}
									</li>
									<li className="list-inline-item">Tags :
										{loc?.tags?.map((item, index) => (
											<a href="#!" className="ml-1" onClick={() => fetchTags(item)}>{item}</a>
										))}
									</li>
									<li className="list-inline-item"><span>Rating : <Rating name="size-medium" defaultValue={4} readOnly /></span>
									</li>
								</ul>
								<MyVerticallyCenteredModal
									show={modalShow}
									onHide={() => setModalShow(false)}
								/>

								<div className='description'>
                                {loc?.description}
									{loc?.sections?.map((item, index) => (
										<p>{item}</p>
									))}
								</div>								
							</div>
						</article>
					</div>
					<aside className="col-lg-4">
						<div className='widget'>
							<iframe src={loc.locationUrl} width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
											<a href="#">
												<img loading="lazy" className="mr-3" src={location.image} alt='image' />
											</a>
											<div className="media-body">
												<h5 className="h6 mb-0"><a href="#">{location.name}</a></h5>
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
									<li><a href="#!" className="d-flex" onClick={() => fetchCategory(item)}>{item}
										<small className="ml-auto">({index})</small>
									</a>
									</li>
								))}
							</ul>
						</div>
						<div className="widget">
							<h5 className="widget-title"><span>Tags</span></h5>
							<ul className="list-inline widget-list-inline">
								{cuisine_tags.map((item, index) => (
									<li className="list-inline-item" onClick={() => fetchTags(item)}><a href="#!">{item}</a>
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
