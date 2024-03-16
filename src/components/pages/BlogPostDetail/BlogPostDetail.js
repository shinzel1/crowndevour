import React, { useEffect } from 'react';
import './BlogPostDetail.css';
import { useLocation, Link } from "react-router-dom";
import imagse from "../../data/Images/post/post-1.jpg"
import BlogLists from "../../data/BlogPost.json"
import SchemaOrg from '../../commons/Schema/Schema';
import { useNavigate } from 'react-router-dom';
import LocationCards from '../../commons/locationCard/locationCard'
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
	}
	const lastThreeBlogs = BlogLists.slice(-3)
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
			<SchemaOrg data={post} />
			<div className="container">
				<div className="row">
					<div className="col-lg-8  mb-5 mb-lg-0">
						<article className="row mb-5">
							<div className="col-12">
								<div className="post-slider">
									<img loading="lazy" src={post.imageSrc} className="img-fluid" alt="post-thumb" />
									{/* <img loading="lazy" src="images/post/post-1.jpg" className="img-fluid" alt="post-thumb" />
							<img loading="lazy" src="images/post/post-3.jpg" className="img-fluid" alt="post-thumb"/> */}
								</div>
							</div>
							<div className="col-12 mx-auto">
								<h1><a className="post-title" href="#">{post?.name}</a></h1>
								<ul className="list-inline post-meta mb-4">
									<li className="list-inline-item"><i className="ti-user mr-2"></i>
										<a href="author.html">{post?.author?.name}</a>
									</li>
									<li className="list-inline-item">Date : March 15, 2020</li>
									<li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photography </a>
									</li>
									<li className="list-inline-item">Tags :
										{post?.tags?.slice(0, 3)?.map((item) => (
											<a href="#!" className="ml-1" onClick={() => fetchTags(item)}>{item} </a>
										))}
									</li>
								</ul>
								<div style={{ textAlign: 'left' }}>
									<section className='blogSection'>
										<p>
											{post.introduction}
										</p>
									</section>
									<section className='blogSection'>
										<h2>About the Location</h2>
										<p>
											{post.aboutTheLocation}
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
											{post.personalRecommendations}
										</p>
									</section>
									<section className='blogSection'>
										<h2>Conclusion</h2>
										<p>
											{post.conclusion}
										</p>
									</section>
									<section className='blogSection'>
										<h2>
											Tags:
										</h2>
										<li className="list-inline-item">Tags :
											{post?.tags?.slice(0, 3).map((item) => (
												<a href="#" className="ml-1" onClick={() => fetchTags(item)}>{item} </a>
											))}
										</li>
									</section>
									<section className='blogSection'>
										<h2>Must-Try Dishes</h2>
										<div className='container'>
											<div className='row'>
												{post?.mustTryDishes?.map((item, index) => (
													<div className="col-lg-4 col-sm-4 mb-4">
														<div className="card">
															<div className="card-image">
																<img src={item.image} />
															</div>
															<div className="card-text">
																{/* <p className="card-meal-type">Breakfast/Eggs</p> */}
																<h3 className="card-title">{item.name}</h3>
																<p className="card-body">{item.description}</p>
															</div>
															{/* <div className="card-price">$56</div> */}
														</div>
													</div>
												))}
											</div>
										</div>
									</section>
									<section className='blogSection'>
										<h2>Cafes and Resturants Near Location</h2>

										<div className="container">
											<div className="row">
												<div className="col-lg-12">
													<div className="title text-center">
														<h2 className="mb-5">Posted by this author</h2>
													</div>
												</div>
												{post?.sections?.map((location, index) => (
													<div className="col-lg-4 col-sm-6 mb-4">
														{/* <Link to={'/location/' + location.title} state={{ loc: location }}> */}
															<LocationCards data={location} />
														{/* </Link> */}
													</div>
												))}
											</div>
										</div>
									</section>
								</div>
							</div>
						</article>
					</div>
					<aside className="col-lg-4">
						<div className='widget'>
							<iframe src={post?.locationUrl} width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
								<Link to={'/location/' + location.title} state={{ loc: location }}>
									<ul className="list-unstyled widget-list">
										<li className="media widget-post align-items-center">
											<a href="#">
												<img loading="lazy" className="mr-3" src={location.imageSrc} alt='image' />
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

export default BlogPostDetail;
