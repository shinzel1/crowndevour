import React from 'react';
// import { useNavigate } from 'react-router-dom';
import imagestes from '../../data/Images/daan-evers-tKN1WXrzQ3s-unsplash.jpg'
const BlogsArticle = ({ data, loc }) => {
    // Sample data for blog listings
    // const navigate = useNavigate();

    // const fetchCategory = (item) => {
    //       if (typeof document !== 'undefined') {
    //           navigate(`/location`, { state: { category: item } });
    //       }
    //   }
    //   const fetchTags = (item) => {
    //       if (typeof document !== 'undefined') {
    //           navigate(`/location`, { state: { tags: item } });
    //       }
    //   }

    return (

        <article className="row mb-3">
            <div className="col-12">
                <div className="post-slider">
                    <img loading="lazy" src={data.image ? data.image : imagestes} className="img-fluid" alt={data.name + "," + loc} />
                </div>
            </div>
            <div className="col-12 mx-auto">
                <h3><span className="post-title">{data?.name}, {(data?.location ? data?.location : loc)}</span></h3>
                <p> <span className=''>{data.shortDescription}</span></p>
                {/* <span className="btn btn-outline-primary">Continue Reading</span> */}
            </div>
        </article>
    );
};

export default BlogsArticle;
