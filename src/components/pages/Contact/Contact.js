import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
  return (
    <div>
      <header>
        <h1>Get in Touch</h1>
      </header>
      <div>
        <Container>
          <Row md={12}>
            <Col md={6}>
              <h2>Contact Form</h2>
              <form>
                <div className='form-group'>
                  <div className='row row-cols-md-12'>
                    <label className='col-md-4'>Name:</label>
                    <div className='col-md-8'>
                      <input type="text" name='fullName' className='form-control' />
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <div className='row row-cols-md-12'>
                    <label className='col-md-4'>Email:</label>
                    <div className='col-md-8'>
                      <input type="email" name='email' className='form-control' />
                    </div>
                  </div>
                </div>

                <div className='form-group'>
                  <div className='row row-cols-md-12'>
                    <label className='col-md-4'>Message:</label>
                    <div className='col-md-8'>
                      <textarea type="text" rows="4" name='message' className='form-control' />
                    </div>
                  </div>
                </div>
                <button type="submit" className='btn btn-info'>Send Message</button>
              </form>
            </Col>
            <Col md={6}>
              <p>
                We'd love to hear from you! If you have any inquiries, suggestions, or feedback, please don't hesitate to contact us.
              </p>
              <h2>Contact Information</h2>
              <ul>
                <li>Email: contact@crowndevour.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Food Street, Tasty Town, Delicious Country</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
