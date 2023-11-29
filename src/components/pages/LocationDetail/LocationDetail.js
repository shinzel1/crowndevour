import React from 'react';
import './LocationDetail.css';
import { useLocation } from "react-router-dom";
import imagse from "../../data/Images/post/post-1.jpg"
import { useEffect } from 'react'


function LocationDetail() {
	const location = useLocation();
	const { loc } = location.state;
	let selectedCardId = localStorage.getItem("selectedCard");
	// you can get this cardId anywhere in the component as per your requirement 
	return (
<section class="section">
<div class="container">
	<div class="row">
		<div class="col-lg-8  mb-5 mb-lg-0">
			<article class="row mb-5">
				<div class="col-12">
					<div class="post-slider">
						<img loading="lazy" src={imagse} class="img-fluid" alt="post-thumb" />
						{/* <img loading="lazy" src="images/post/post-1.jpg" class="img-fluid" alt="post-thumb"/>
				<img loading="lazy" src="images/post/post-3.jpg" class="img-fluid" alt="post-thumb"/> */}
					</div>
				</div>
				<div class="col-12 mx-auto">
					<h3><a class="post-title" href="post-elements.html">{loc.name}</a></h3>
					<ul class="list-inline post-meta mb-4">
						<li class="list-inline-item"><i class="ti-user mr-2"></i>
							<a href="author.html">John Doe</a>
						</li>
						<li class="list-inline-item">Date : March 15, 2020</li>
						<li class="list-inline-item">Categories : <a href="#!" class="ml-1">Photography </a>
						</li>
						<li class="list-inline-item">Tags : <a href="#!" class="ml-1">Photo </a> ,<a href="#!" class="ml-1">Image </a>
						</li>
					</ul>
					<p> {loc.description}</p>
				</div>
			</article>
		</div>
		<aside class="col-lg-4">
			<div class="widget">
				<h5 class="widget-title"><span>Search</span></h5>
				<form action="/logbook-hugo/search" class="widget-search">
					<input id="search-query" name="s" type="search" placeholder="Type &amp; Hit Enter..." />
					<button type="submit"><i class="ti-search"></i>
					</button>
				</form>
			</div>
			<div class="widget">
				<h5 class="widget-title"><span>Categories</span></h5>
				<ul class="list-unstyled widget-list">
					<li><a href="#!" class="d-flex">Four seasone
						<small class="ml-auto">(1)</small></a>
					</li>
					<li><a href="#!" class="d-flex">Newyork city
						<small class="ml-auto">(2)</small></a>
					</li>
					<li><a href="#!" class="d-flex">Photobooth
						<small class="ml-auto">(1)</small></a>
					</li>
					<li><a href="#!" class="d-flex">Photography
						<small class="ml-auto">(2)</small></a>
					</li>
					<li><a href="#!" class="d-flex">Videography
						<small class="ml-auto">(1)</small></a>
					</li>
				</ul>
			</div>
			<div class="widget">
				<h5 class="widget-title"><span>Tags</span></h5>
				<ul class="list-inline widget-list-inline">
					<li class="list-inline-item"><a href="#!">Booth</a>
					</li>
					<li class="list-inline-item"><a href="#!">City</a>
					</li>
					<li class="list-inline-item"><a href="#!">Image</a>
					</li>
					<li class="list-inline-item"><a href="#!">New</a>
					</li>
					<li class="list-inline-item"><a href="#!">Photo</a>
					</li>
					<li class="list-inline-item"><a href="#!">Seasone</a>
					</li>
					<li class="list-inline-item"><a href="#!">Video</a>
					</li>
				</ul>
			</div>
			<div class="widget">
				<h5 class="widget-title"><span>Latest Article</span></h5>
				<ul class="list-unstyled widget-list">
					<li class="media widget-post align-items-center">
						<a href="post-elements.html">
							<img loading="lazy" class="mr-3" src={imagse} />
						</a>
						<div class="media-body">
							<h5 class="h6 mb-0"><a href="post-elements.html">Elements That You Can Use To Create A New Post On
								This Template.</a></h5>
							<small>March 15, 2020</small>
						</div>
					</li>
				</ul>
				<ul class="list-unstyled widget-list">
					<li class="media widget-post align-items-center">
						<a href="post-details-1.html">
							<img loading="lazy" class="mr-3" src={imagse} />
						</a>
						<div class="media-body">
							<h5 class="h6 mb-0"><a href="post-details-1.html">Cheerful Loving Couple Bakers Drinking Coffee</a>
							</h5>
							<small>March 14, 2020</small>
						</div>
					</li>
				</ul>
				<ul class="list-unstyled widget-list">
					<li class="media widget-post align-items-center">
						<a href="post-details-2.html">
							<img loading="lazy" class="mr-3" src={imagse} />
						</a>
						<div class="media-body">
							<h5 class="h6 mb-0"><a href="post-details-2.html">Cheerful Loving Couple Bakers Drinking Coffee</a>
							</h5>
							<small>March 14, 2020</small>
						</div>
					</li>
				</ul>
			</div>
		</aside>
	</div>
</div>
</section>

		// <div>
		// {loc.name}
		// {loc.location}
		// {loc.description}
		//  </div>
	)
}

export default LocationDetail;
