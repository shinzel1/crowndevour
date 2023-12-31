import React, { useEffect } from 'react';
import './LocationDetail.css';
import { useLocation,Link } from "react-router-dom";
import imagse from "../../data/Images/post/post-1.jpg"
import locationLists from "../../data/CafeResturants.json"


function LocationDetail() {
	const location = useLocation();
	const { loc } = location.state;
	const lastThreeLocations = locationLists.slice(-3)
	useEffect(() => {
		const body = document.querySelector('#root');

		body.scrollIntoView({
			behavior: 'smooth'
		}, 500)

	}, []);
	// you can get this cardId anywhere in the component as per your requirement 
	return (
		<section className="section">
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
								<h3><a className="post-title" href="#">{loc.name}</a></h3>
								<ul className="list-inline post-meta mb-4">
									<li className="list-inline-item"><i className="ti-user mr-2"></i>
										<a href="author.html">John Doe</a>
									</li>
									<li className="list-inline-item">Date : March 15, 2020</li>
									<li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photography </a>
									</li>
									<li className="list-inline-item">Tags : <a href="#!" className="ml-1">Photo </a> ,<a href="#!" className="ml-1">Image </a>
									</li>
								</ul>
								<p> {loc.description}</p>
							</div>
						</article>
					</div>
					<aside className="col-lg-4">
						<div className="widget">
							<h5 className="widget-title"><span>Search</span></h5>
							<form action="/logbook-hugo/search" className="widget-search">
								<input id="search-query" name="s" type="search" placeholder="Type &amp; Hit Enter..." />
								<button type="submit"><i className="ti-search"></i>
								</button>
							</form>
						</div>
						<div className="widget">
							<h5 className="widget-title"><span>Categories</span></h5>
							<ul className="list-unstyled widget-list">
								<li><a href="#!" className="d-flex">Local Eateries
									<small className="ml-auto">(1)</small></a>
								</li>
								<li><a href="#!" className="d-flex">Delhi Specials
									<small className="ml-auto">(2)</small></a>
								</li>
								<li><a href="#!" className="d-flex">Chinese
									<small className="ml-auto">(1)</small></a>
								</li>
								<li><a href="#!" className="d-flex">Thai
									<small className="ml-auto">(2)</small></a>
								</li>
								<li><a href="#!" className="d-flex">italian
									<small className="ml-auto">(1)</small></a>
								</li>
							</ul>
						</div>
						<div className="widget">
							<h5 className="widget-title"><span>Tags</span></h5>
							<ul className="list-inline widget-list-inline">
								<li className="list-inline-item"><a href="#!">Booth</a>
								</li>
								<li className="list-inline-item"><a href="#!">City</a>
								</li>
								<li className="list-inline-item"><a href="#!">Image</a>
								</li>
								<li className="list-inline-item"><a href="#!">New</a>
								</li>
								<li className="list-inline-item"><a href="#!">Photo</a>
								</li>
								<li className="list-inline-item"><a href="#!">Seasone</a>
								</li>
								<li className="list-inline-item"><a href="#!">Video</a>
								</li>
							</ul>
						</div>
						<div className="widget">
							<h5 className="widget-title"><span>Latest Article</span></h5>

							{lastThreeLocations.map((location, index) => (
									<Link to={'/location/' + location.title} state={{ loc: location }}>
										<ul className="list-unstyled widget-list">
											<li className="media widget-post align-items-center">
												<a href="post-elements.html">
													<img loading="lazy" className="mr-3" src={location.image} />
												</a>
												<div className="media-body">
													<h5 className="h6 mb-0"><a href="post-elements.html">{location.name}</a></h5>
													<small>March 15, 2020</small>
												</div>
											</li>
										</ul>
									</Link>
							))}
						</div>
					</aside>
				</div>
			</div>
		</section>
	)
}

export default LocationDetail;
