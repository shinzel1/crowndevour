import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import "../../data/css/style.css"
import "../../data/plugins/slick/slick.css"
import "../../data/plugins/themify-icons/themify-icons.css"
import "../../data/plugins/bootstrap/bootstrap.min.css"
import './Contact.css'
const Contact = () => {
  return (
    <section className="section-sm">
      <link rel="preload" href="https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWJ0bbck.woff2" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:600%7cOpen&#43;Sans&amp;display=swap" media="screen" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-bordered mb-5 d-flex align-items-center">
              <h1 className="h4">Talk To Me Anytime :</h1>
              <ul className="list-inline social-icons ml-auto mr-3 d-none d-sm-block">
                <li className="list-inline-item"><a href="#"><i className="ti-facebook"></i></a>
                </li>
                <li className="list-inline-item"><a href="#"><i className="ti-twitter-alt"></i></a>
                </li>
                <li className="list-inline-item"><a href="#"><i className="ti-linkedin"></i></a>
                </li>
                <li className="list-inline-item"><a href="#"><i className="ti-github"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content mb-5">
              <h1 id="ask-us-anything-br-or-just-say-hi">Ask Us Anything <br /> Or just Say Hi,</h1>
              <p>Rather than just filling out a form, Sleeknote also offers help to the user
                <br />with links directing them to find additional information or take popular actions.</p>
              <h4 className="mt-5">Hate Forms? Write Us Email</h4>
              <p><i className="ti-email mr-2 text-primary"></i><a href="mailto:crowndevour@gmail.com">crowndevour@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <form method="POST" action="#">
              <div className="form-group">
                <label for="name">Your Name (Required)</label>
                <input type="text" name="name" id="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label for="email">Your Email Address (Required)</label>
                <input type="email" name="email" id="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label for="message">Your Message Here</label>
                <textarea name="message" id="message" className="form-control"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Now</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;