import React from 'react';
import authorImage from "../../data/Images/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg"

const About = () => {
  return (
    <section className="section-sm">
	<div className="container">
		<div className="row">
			<div className="col-12">
				<div className="title-bordered mb-5 d-flex align-items-center">
					<h1 className="h4">Hi, I Am Crowndevour</h1>
					<ul className="list-inline social-icons ml-auto mr-3 d-none d-sm-block">
						<li className="list-inline-item"><a href="#"><i className="ti-facebook"></i></a>
						</li>
						<li className="list-inline-item"><a href="#"><i className="ti-twitter-alt"></i></a>
						</li>
						<li className="list-inline-item"><a href="#"><i className="ti-linkedin"></i></a>
						</li>
						<li className="list-inline-item"><a href="#"><i className="ti-github"></i></a>
						</li>
					</ul>
				</div>
				<img src={authorImage} className="img-fluid w-100 mb-4 rounded-lg" alt="author"/>
				<div className="content">
					<p>As a passionate food blogger with a deep love for travel, diverse activities, and exploring unique menus, my journey is a vibrant tapestry woven with the colors of diverse cuisines and the aromas of countless destinations. Embarking on this culinary adventure has not only been a gastronomic delight but also a journey of self-discovery, cultural exploration, and the pursuit of the perfect bite.</p>
					<p>My love affair with food began in my hometown, where the kitchen was a magical realm of flavors and stories. From the comforting aromas of homemade bread to the sizzling sounds of spices hitting a hot pan, each dish was a portal to a different world. However, it wasn't until I combined my love for food with my passion for travel that my culinary exploration truly took flight.</p>
					<p>One of the most thrilling aspects of being a food blogger who loves to travel is the opportunity to dive into the heart of a city's culinary scene. Whether wandering through the bustling streets of Bangkok, strolling along the charming lanes of Paris, or exploring the vibrant markets of Marrakech, each destination offers a culinary tale waiting to be told.</p>
					<p>As a food blogger who loves to travel, I understand the importance of embracing food as a cultural ambassador. Each destination has its own culinary identity, and I strive to capture that essence in every blog post. Whether it's the tantalizing street food stalls of Mexico City or the cozy cafes tucked away in the alleys of Istanbul, I aim to transport my readers to these gastronomic havens.</p>
					<p>In the ever-evolving world of food blogging, I find joy in experimenting with flavors, documenting my culinary escapades, and sharing the beauty of global cuisines. It's a journey that goes beyond the confines of a kitchen; it's a celebration of life, culture, and the endless possibilities that unfold when a fork meets a plate.</p>
					<p>So, join me on this delectable journey – a journey where every meal is an adventure, every destination is a flavor, and every blog post is a love letter to the diverse and delicious world we live in. Together, let's savor the richness of life, one bite at a time.</p>

					<div className="quote"> <i className="ti-quote-left"></i>
						<div>
							<p>Life is a series of natural and spontaneous changes. Don’t resist them – that only create sorrow. Let reality changes be reality. Let things flow naturally way they like.</p> <span className="quote-by"> -CrownDevour</span>
						</div>
					</div>
					<hr/>
				</div>
			</div>
		</div>
	</div>
</section>
  );
};

export default About;
