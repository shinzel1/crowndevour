import React from 'react';
import Navbar from '../../commons/Navbar/Navbar';
function Footer() {
    return (
      <div className='shadowDiv'>
        <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        </div>
    
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">facebook</li>
          <li className="ms-3">insta</li>
          <li className="ms-3">Facebook</li>
        </ul>
      </footer>
    </div>
      </div>
    );
  }
  
  export default Footer;