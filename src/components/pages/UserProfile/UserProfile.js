import React from 'react';
import authorImage from '../../data/Images/author.jpg'
import post1 from '../../data/Images/post/post-1.jpg'
import post2 from '../../data/Images/post/post-2.jpg'
import post3 from '../../data/Images/post/post-3.jpg'
import post4 from '../../data/Images/post/post-4.jpg'
import post5 from '../../data/Images/post/post-5.jpg'
import post6 from '../../data/Images/post/post-6.jpg'

const UserProfile = () => {
  // Sample user data
  return (
    <div>
      <section className="section-sm border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-bordered mb-5 d-flex align-items-center">
                <h1 className="h4">CrownDevour</h1>
                {/* <ul className="list-inline social-icons ml-auto mr-3 d-none d-sm-block">
                  <li className="list-inline-item"><span><i className="ti-facebook"></i></span>
                  </li>
                  <li className="list-inline-item"><span><i className="ti-twitter-alt"></i></span>
                  </li>
                  <li className="list-inline-item"><span><i className="ti-github"></i></span>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mb-4 mb-md-0 text-center text-md-left">
              <img loading="lazy" className="rounded-lg img-fluid" src={authorImage}  alt='authorImage'/>
            </div>
            <div className="col-lg-9 col-md-8 content text-center text-md-left">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet vulputate augue. Duis auctor lacus id vehicula gravida. Nam suscipit vitae purus et laoreet. Donec nisi dolor, consequat vel pretium id, auctor in dui. Nam iaculis, neque ac ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet vulputate augue. Duis auctor lacus id vehicula gravida. Nam suscipit vitae purus et laoreet.</p>
              <p>Donec nisi dolor, consequat vel pretium id, auctor in dui. Nam iaculis, neque ac ullamcorper.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet vulputate augue.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title text-center">
                <h2 className="mb-5">Posted by this author</h2>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post6} className="img-fluid" alt="post-thumb" />
                  {/* <img loading="lazy" src={post1} className="img-fluid" alt="post-thumb" />
                  <img loading="lazy" src={post3} className="img-fluid" alt="post-thumb" /> */}
                </div>
                <h3 className="h5"><span className="post-title">Elements That You Can Use To
                  Create A New Post
                  On This Template.</span></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><span>CrownDevour</span>
                  </li>
                  <li className="list-inline-item">Categories : <span className="ml-1">Photography </span>
                  </li>
                  <li className="list-inline-item"> <span className="ml-1">Photo </span> ,<span
                    className="ml-1">Image </span>
                  </li>
                </ul>
                <p>Heading example Here is example of hedings. You can use this heading by following markdownify
                  rules. …</p> <span className="btn btn-outline-primary">Continue
                    Reading</span>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post1} className="img-fluid" alt="post-thumb" />
                </div>
                <h3 className="h5"><span className="post-title">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</span></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><span>John
                    Doe</span>
                  </li>
                  <li className="list-inline-item">Categories : <span className="ml-1">Photography </span>
                  </li>
                  <li className="list-inline-item"> <span className="ml-1">Photo </span> ,<span
                    className="ml-1">Image </span>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <span className="btn btn-outline-primary">Continue Reading</span>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post2} className="img-fluid" alt="post-thumb" />
                  {/* <img loading="lazy" src={post4} className="img-fluid" alt="post-thumb" /> */}
                </div>
                <h3 className="h5"><span className="post-title">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</span></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><span>John
                    Doe</span>
                  </li>
                  <li className="list-inline-item">Categories : <span className="ml-1">Photobooth </span>
                  </li>
                  <li className="list-inline-item"> <span className="ml-1">Booth </span> ,<span
                    className="ml-1">Image </span>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <span className="btn btn-outline-primary">Continue Reading</span>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post3} className="img-fluid" alt="post-thumb" />
                </div>
                <h3 className="h5"><span className="post-title">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</span></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><span>John
                    Doe</span>
                  </li>
                  <li className="list-inline-item">Categories : <span className="ml-1">Videography </span>
                  </li>
                  <li className="list-inline-item"> <span className="ml-1">Video </span> ,<span
                    className="ml-1">Image </span>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <span className="btn btn-outline-primary">Continue Reading</span>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post4} className="img-fluid" alt="post-thumb" />
                  {/* <img loading="lazy" src={post1} className="img-fluid" alt="post-thumb" /> */}
                </div>
                <h3 className="h5"><span className="post-title">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</span></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><span>John
                    Doe</span>
                  </li>
                  <li className="list-inline-item">Categories : <span className="ml-1">Four seasone </span>
                  </li>
                  <li className="list-inline-item"> <span className="ml-1">Seasone </span> ,<span
                    className="ml-1">New </span>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <span className="btn btn-outline-primary">Continue Reading</span>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post5} className="img-fluid" alt="post-thumb" />
                </div>
                <h3 className="h5"><span className="post-title">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</span></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><span>John
                    Doe</span>
                  </li>
                  <li className="list-inline-item">Categories : <span className="ml-1">Newyork city </span>
                  </li>
                  <li className="list-inline-item"> <span className="ml-1">City </span> ,<span
                    className="ml-1">Photo </span>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <span className="btn btn-outline-primary">Continue Reading</span>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <h3 className="h5"><span className="post-title" >Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</span></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><span>John
                    Doe</span>
                  </li>
                  <li className="list-inline-item">Categories : <span className="ml-1">Newyork city </span>
                  </li>
                  <li className="list-inline-item"> <span className="ml-1">City </span> ,<span
                    className="ml-1">Photo </span>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <span className="btn btn-outline-primary">Continue Reading</span>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
