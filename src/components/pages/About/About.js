import React from 'react';
import authorImage from "../../data/Images/author-full.jpg"

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
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum in urna justo elit turpis risus vitae viverra enim. Augue quis vitae in non nisi, posuere ultrices tempus. Feugiat consequat suspendisse laoreet vitae enim adipiscing cursus. Duis nunc vitae tincidunt sed nibh id. Egestas erat consequat, ornare etiam donec faucibus. Lorem ut enim nunc, senectus adipiscing sed. Lobortis commodo aliquet pulvinar molestie faucibus diam. Semper porttitor justo, et dictum</p>
					<p>Faucibus duis urna, consequat morbi imperdiet pulvinar. Mauris vitae sed aliquet eu tincidunt id. Nulla leo eget erat vel pharetra. Morbi nullam morbi non purus, augue. Massa cras odio ante cursus a mauris. Volutpat faucibus feugiat feugiat euismod congue ridiculus. Et ipsum euismod nulla et aenean diam duis. Sem molestie est mauris sit. Et eleifend odio</p>
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
