import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import post1 from '../../data/Images/post/post-1.jpg'
import post2 from '../../data/Images/post/post-2.jpg'
import post3 from '../../data/Images/post/post-3.jpg'
import post4 from '../../data/Images/post/post-4.jpg'
import './ThelasNearLocation.css'
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import LocationLists from '../../data/ThelasNearMe.json'
import LocationCards from '../../commons/locationCard/locationCard'

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
    const bounds = new window.google.maps.LatLngBounds({ center });
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
              center={{ center }}
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

            {LocationLists.map((post) => (
              <Link to={'/location/' + post.title} state={{ loc: post }}>
                <div className="col-lg-4 col-sm-6 mb-4">
                  <LocationCards data={post} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThelasNearLocation;
