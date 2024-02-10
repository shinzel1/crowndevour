import React, { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import "../../data/css/style.css"
import "../../data/plugins/slick/slick.css"
import "../../data/plugins/themify-icons/themify-icons.css"
import "../../data/plugins/bootstrap/bootstrap.min.css"
import './Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    // Initialize form fields
    name: '',
    email: '',
    message: '',
    // Add more fields as needed
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to JSON file or perform any other desired actions
    saveFormDataToJson(formData);
  };
  const saveFormDataToJson = (data) => {
    // Convert the form data to JSON and save it
    const jsonData = JSON.stringify(data);
    // Use file-saving mechanisms, such as the FileSaver library or server-side logic
    // to save the JSON data to a file
  };

  useEffect(() => {
		const body = document.querySelector('#root');

		body.scrollIntoView({
			behavior: 'smooth'
		}, 500)

	}, []);

  return (
    <section className="section-sm">
      <link rel="canonical" href="https://crowndevour.com/contact" />
      <link rel="preload" href="https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWJ0bbck.woff2" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:600%7cOpen&#43;Sans&amp;display=swap" media="screen" />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-bordered mb-5 d-flex align-items-center">
              <h1 className="h4">Talk To Me Anytime :</h1>
              <ul className="list-inline social-icons ml-auto mr-3 d-none d-sm-block">
              <li className="list-inline-item"><a href="https://www.instagram.com/crowndevour/" target='_blank'><i className="ti-instagram"></i></a>
                </li>
                <li className="list-inline-item"><a href="https://www.facebook.com/crowndevour98" target='_blank'><i className="ti-facebook"></i></a>
                </li>
                <li className="list-inline-item"><a href="https://twitter.com/crowndevour"  target='_blank'><i className="ti-twitter-alt" ></i></a>
                </li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/crowndevour/" target='_blank'><i className="ti-linkedin"></i></a>
                </li>
                {/* <li className="list-inline-item"><a href="" target='_blank'><i className="ti-github"></i></a>
                </li> */}
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
            <form method="POST" onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="name">Your Name (Required)</label>
                <input type="text" name="name" id="name" className="form-control" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label for="email">Your Email Address (Required)</label>
                <input type="email" name="email" id="email" className="form-control" required  value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label for="message">Your Message Here</label>
                <textarea name="message" id="message" className="form-control" value={formData.message} onChange={handleChange}></textarea>
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
