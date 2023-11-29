import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import post1 from '../../data/Images/post/post-1.jpg'
import post2 from '../../data/Images/post/post-2.jpg'
import post3 from '../../data/Images/post/post-3.jpg'
import post4 from '../../data/Images/post/post-4.jpg'
import post5 from '../../data/Images/post/post-5.jpg'
import post6 from '../../data/Images/post/post-6.jpg'
import './ThelasNearLocation.css'
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const ThelasNearLocation = () => {
  const [show, setShow] = useState(false);
  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const { } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBZlJjEYPVmZ5s2GvwJE45TblJf4YZQQkM"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds({center});
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])



  return (
    <div>
      <div className='addIcon' onClick={() => setShow(true)}>
        <Fab color="primary" aria-label="add" >
          <AddIcon />
        </Fab>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                title
              </Form.Label>
              <Col sm="10">
                <Form.Control type="title" placeholder="title" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                description
              </Form.Label>
              <Col sm="10">
                <Form.Control type="description" placeholder="description" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                location
              </Form.Label>
              <Col sm="10">
                <Form.Control type="location" placeholder="location" />
              </Col>
            </Form.Group>

            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{center}}
              zoom={10}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              { /* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>

          </Form>
        </Modal.Body>
      </Modal>
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
                <h3 className="h5"><a className="post-title" href="post-elements.html">Elements That You Can Use To
                  Create A New Post
                  On This Template.</a></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John
                    Doe</a>
                  </li>
                  <li className="list-inline-item">Date : March 15, 2020</li>
                  <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photography </a>
                  </li>
                  <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Photo </a> ,<a href="#!"
                    className="ml-1">Image </a>
                  </li>
                </ul>
                <p>Heading example Here is example of hedings. You can use this heading by following markdownify
                  rules. …</p> <a href="post-elements.html" className="btn btn-outline-primary">Continue
                    Reading</a>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post1} className="img-fluid" alt="post-thumb" />
                </div>
                <h3 className="h5"><a className="post-title" href="post-details-1.html">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</a></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John
                    Doe</a>
                  </li>
                  <li className="list-inline-item">Date : March 14, 2020</li>
                  <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photography </a>
                  </li>
                  <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Photo </a> ,<a href="#!"
                    className="ml-1">Image </a>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <a href="post-details-1.html" className="btn btn-outline-primary">Continue Reading</a>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post2} className="img-fluid" alt="post-thumb" />
                  {/* <img loading="lazy" src={post4} className="img-fluid" alt="post-thumb" /> */}
                </div>
                <h3 className="h5"><a className="post-title" href="post-details-2.html">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</a></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John
                    Doe</a>
                  </li>
                  <li className="list-inline-item">Date : March 14, 2020</li>
                  <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Photobooth </a>
                  </li>
                  <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Booth </a> ,<a href="#!"
                    className="ml-1">Image </a>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <a href="post-details-2.html" className="btn btn-outline-primary">Continue Reading</a>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post3} className="img-fluid" alt="post-thumb" />
                </div>
                <h3 className="h5"><a className="post-title" href="post-details-2.html">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</a></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John
                    Doe</a>
                  </li>
                  <li className="list-inline-item">Date : March 14, 2020</li>
                  <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Videography </a>
                  </li>
                  <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Video </a> ,<a href="#!"
                    className="ml-1">Image </a>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <a href="post-details-2.html" className="btn btn-outline-primary">Continue Reading</a>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post4} className="img-fluid" alt="post-thumb" />
                  {/* <img loading="lazy" src={post1} className="img-fluid" alt="post-thumb" /> */}
                </div>
                <h3 className="h5"><a className="post-title" href="post-details-1.html">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</a></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John
                    Doe</a>
                  </li>
                  <li className="list-inline-item">Date : March 14, 2020</li>
                  <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Four seasone </a>
                  </li>
                  <li className="list-inline-item">Tags : <a href="#!" className="ml-1">Seasone </a> ,<a href="#!"
                    className="ml-1">New </a>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <a href="post-details-1.html" className="btn btn-outline-primary">Continue Reading</a>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <div className="post-slider slider-sm">
                  <img loading="lazy" src={post5} className="img-fluid" alt="post-thumb" />
                </div>
                <h3 className="h5"><a className="post-title" href="post-details-1.html">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</a></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John
                    Doe</a>
                  </li>
                  <li className="list-inline-item">Date : March 14, 2020</li>
                  <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Newyork city </a>
                  </li>
                  <li className="list-inline-item">Tags : <a href="#!" className="ml-1">City </a> ,<a href="#!"
                    className="ml-1">Photo </a>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <a href="post-details-1.html" className="btn btn-outline-primary">Continue Reading</a>
              </article>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <article className="mb-5">
                <h3 className="h5"><a className="post-title" href="post-details-2.html">Cheerful Loving Couple Bakers
                  Drinking
                  Coffee</a></h3>
                <ul className="list-inline post-meta mb-2">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i><a href="author.html">John
                    Doe</a>
                  </li>
                  <li className="list-inline-item">Date : March 14, 2020</li>
                  <li className="list-inline-item">Categories : <a href="#!" className="ml-1">Newyork city </a>
                  </li>
                  <li className="list-inline-item">Tags : <a href="#!" className="ml-1">City </a> ,<a href="#!"
                    className="ml-1">Photo </a>
                  </li>
                </ul>
                <p>It’s no secret that the digital industry is booming. From exciting startups to global brands,
                  …</p> <a href="post-details-2.html" className="btn btn-outline-primary">Continue Reading</a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThelasNearLocation;
