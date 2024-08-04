import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagestes from '../../data/Images/daan-evers-tKN1WXrzQ3s-unsplash.jpg'
const BlogsArticle = ({ data }) => {
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

        <article className="row mb-5">
            <div className="col-12">
                <div className="post-slider">
                    <img loading="lazy" src={data.image ? data.image : imagestes} className="img-fluid" alt="post-thumb" />
                </div>
            </div>
            <div className="col-12 mx-auto">
                <h3><span className="post-title">{data.name}</span></h3>
                <ul className="list-inline post-meta mb-2">
                    <li className="list-inline-item"><i className="ti-user mr-2"></i><span>{data.author}</span>
                    </li>
                    <li className="list-inline-item">Date : March 15, 2020</li>
                    <li className="list-inline-item">
                        Categories :
                        {data?.category?.slice(0, 3).map((item) => (
                            <span className="ml-1" onClick={() => fetchCategory(item)}>{item}</span>
                        ))}
                    </li>
                    <li className="list-inline-item">Tags :

                        {data?.tags?.slice(0, 3).map((item) => (
                            <span className="ml-1" onClick={() => fetchTags(item)}>{item} </span>
                        ))}

                    </li>
                </ul>
                <p> <span className=''>{data.shortDescription}</span></p> <span className="btn btn-outline-primary">Continue Reading</span>
            </div>
        </article>
    );
};

export default BlogsArticle;
