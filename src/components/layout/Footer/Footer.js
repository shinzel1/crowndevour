import React from 'react';
import Logo from '../../data/Images/WholeImage.png'
import '../Footer/Footer.css'

function Footer() {
    return (
      <div className='shadowDiv'>
        <footer className="section-sm pb-0 border-top border-default">
      <div className="container">
         <div className="row justify-content-between">
            <div className="col-md-3 mb-4">
               <a className="mb-4 d-block " href="/crowndevour">
                  <img className="img-fluid footerLogoImage" src={Logo} alt="Crowndevour" />
               </a>
               {/* <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p> */}
            </div>
            <div className="col-lg-2 col-md-3 col-6 mb-4">
               <h6 className="mb-4">Quick Links</h6>
               <ul className="list-unstyled footer-list">
                  <li><a href="/crowndevour/about">About</a></li>
                  <li><a href="/crowndevour/contact">Contact</a></li>
                  <li><a href="/crowndevour/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/crowndevour/terms-conditions">Terms Conditions</a></li>
               </ul>
            </div>

            <div className="col-lg-2 col-md-3 col-6 mb-4">
               <h6 className="mb-4">Social Links</h6>
               <ul className="list-unstyled footer-list">
               <li><a href="https://www.instagram.com/crowndevour/" target='_blank'>instagram</a></li>
                  <li><a href="https://www.facebook.com/crowndevour98" target='_blank'>facebook</a></li>
                  <li><a href="https://twitter.com/crowndevour" target='_blank'>twitter</a></li>
                  <li><a href="https://www.linkedin.com/in/crowndevour/" target='_blank'>linkedin</a></li>
               </ul>
            </div>

            <div className="col-md-3 mb-4">
               <h6 className="mb-4">Subscribe Newsletter</h6>
               <form className="subscription" action="javascript:void(0)" method="post">
                  <div className="position-relative">
                     <i className="ti-email email-icon"></i>
                     <input type="email" className="form-control" placeholder="Your Email Address"/>
                  </div>
                  <button className="btn btn-primary btn-block rounded" type="submit">Subscribe now</button>
               </form>
            </div>
         </div>
         <div className="scroll-top">
            <a href="javascript:void(0);" id="scrollTop"><i className="ti-angle-up"></i></a>
         </div>
         <div className="text-center">
            <p className="content">&copy; 2023 - Crowndevour</p>
         </div>
      </div>
   </footer>

   <script src="plugins/jQuery/jquery.min.js"></script>
   <script src="plugins/bootstrap/bootstrap.min.js" async></script>
   <script src="plugins/slick/slick.min.js"></script>
   <script src="js/script.js"></script>
      </div>
    );
  }
  
  export default Footer;