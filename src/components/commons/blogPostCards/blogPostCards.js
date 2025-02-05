import React from 'react';
import { useNavigate } from 'react-router-dom'

const BlogPostCards = ({ data }) => {
  // Sample data for blog listings
  const navigate = useNavigate();
  const fetchTags = (item) => {
    if (typeof document !== 'undefined') {
      navigate(`/location`, { state: { tags: item } });
    }
  }
  var image = ""

  if (data?.imageSrc != undefined) { image = (data.imageSrc).replace("s680-w680-h510", "s300") }


  return (
    <article className="mb-5 post-card" id={data.title}>
      <div className="post-slider slider-sm blogPostCardImage">
        <img loading="lazy" src={image} className="img-fluid image" alt={data.name} />
      </div>
      <div className='p-2'>
        <h3 className="h5"><a className="post-title" href={'/blogs/' + data.title}>{data.name}</a></h3>
        <ul className="list-inline post-meta mb-2">
          <li className="list-inline-item">
            {data?.tags?.slice(0, 3)?.map((item, i) => (
              <span className="ml-1" onClick={() => fetchTags(item)}>{item}</span>
            ))}
          </li>
        </ul>
        <p><span className='introduction'>{(data.shortDescription)?.substring(0, 220)}</span></p>
      </div>
    </article>
  );
};

export default BlogPostCards;
