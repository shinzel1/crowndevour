import React from 'react';
import { useNavigate } from 'react-router-dom';

function LocationCard({ data }) {
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
  var image = ""
  if (data?.image != undefined) { image = (data.image).replace("s680-w680-h510", "s300") }
  return (
    <span className="blog-article">
      <article className='post-card' id={data.title}>
        <div className="post-slider slider-sm blogPostCardImage">
          <img loading="lazy" src={(image!="") ? image : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="img-fluid image" alt={data.name} />
        </div>
        <div className='p-2'>
          <h3 className="h5"><a className="post-title" href={"/location/" + data.title}>{data.name}</a></h3>
          <ul className="list-inline post-meta mb-2">
            <li className="list-inline-item">
              {data?.category?.slice(0, 3).map((item) => (
                <span className="ml-1" onClick={() => fetchCategory(item)}>{item}</span>
              ))}
            </li>
            <li className="list-inline-item">
              {data?.tags?.slice(0, 3).map((item) => (
                <span className="ml-1" onClick={() => fetchTags(item)}>{item} </span>
              ))}
            </li>
          </ul>
          <p>{(data?.overview ? data?.overview : data?.shortDescription)?.substring(0, 220)}...</p>
        </div>
      </article>
    </span>
  );
};

export default LocationCard;
