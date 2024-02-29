import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

function LocationCard({ data }){
  // Sample data for blog listings
  const navigate = useNavigate();

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

  return (

    <article className="mb-5" id={data.title}>
      <Helmet>
        {/* <link rel="canonical" href="https://crowndevour.com/location" /> */}
        {/* <title>search cafe and restaurants</title> */}
        <meta name="description" content={data.name} />
      </Helmet>
      <div className="post-slider slider-sm blogPostCardImage">
        <img loading="lazy" src={data.image} className="img-fluid" alt="post-thumb" />
        {/* <img loading="lazy" src={post1} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={post3} className="img-fluid" alt="post-thumb" /> */}
      </div>
      <h3 className="h5"><a className="post-title" href={"/location/"+data.title}>{data.name}</a></h3>
      <ul className="list-inline post-meta mb-2">
        <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">{data.author}</a>
        </li>
        <li className="list-inline-item">Date : March 15, 2020</li>
        <li className="list-inline-item">
          Categories :
          {data?.category?.slice(0, 3).map((item) => (
            <a href="#" className="ml-1" onClick={() => fetchCategory(item)}>{item}</a>
          ))}
        </li>
        <li className="list-inline-item">Tags :
        
        {data?.tags?.slice(0, 3).map((item) => (
          <a href="#" className="ml-1" onClick={() => fetchTags(item)}>{item} </a>
          ))}
         
        </li>
      </ul>
      <p>{data.shortDescription}</p> <a href={'/location/' + data.title} className="btn btn-outline-primary">Continue
        Reading</a>
    </article>
  );
};

export default LocationCard;
