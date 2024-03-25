import React from 'react';
import { useNavigate } from 'react-router-dom';
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

        <article class="row mb-5">
            <div class="col-12">
                <div class="post-slider">
                    <img loading="lazy" src={data.image ? data.image : "https://source.unsplash.com/random/480×330?cafe&orientation=landscape"} class="img-fluid" alt="post-thumb" />
                </div>
            </div>
            <div class="col-12 mx-auto">
                <h3><a className="post-title" href={'/location/' + data.name}>{data.name}</a></h3>
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
                <p> <span className=''>{data.shortDescription}</span></p> <a href={'/location/' + data.name} className="btn btn-outline-primary">Continue Reading</a>
            </div>
        </article>
    );
};

export default BlogsArticle;
