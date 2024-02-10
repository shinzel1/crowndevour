import React from 'react';
import Logo from '../../data/Images/WholeImage.png'
import '../Footer/Footer.css'

function Footer() {

   function scrollToTop() {
      if (typeof document !== 'undefined') {
      const body = document.querySelector('#root');
      body.scrollIntoView({
         behavior: 'smooth'
      }, 500)
   }
   }


   return (
      <div className='shadowDiv'>
         <footer className="section-sm pb-0 border-top border-default">
            <div className="container">
               <div className="row justify-content-between">
                  <div className="col-md-3 mb-4">
                     <a className="mb-4 d-block " href="#">
                        <img className="img-fluid footerLogoImage" src={Logo} alt="Crowndevour" />
                        <ul className="list-inline social-icons ml-auto mr-3 d-none d-sm-block">
                           <li className="list-inline-item"><a href="https://www.instagram.com/crowndevour/" target='_blank'><i className="ti-instagram"></i></a>
                           </li>
                           <li className="list-inline-item"><a href="https://www.facebook.com/crowndevour98/" target='_blank'><i className="ti-facebook"></i></a>
                           </li>
                           <li className="list-inline-item"><a href="https://twitter.com/crowndevour/" target='_blank'><i className="ti-twitter-alt" ></i></a>
                           </li>
                           <li className="list-inline-item"><a href="https://www.linkedin.com/in/crowndevour/" target='_blank'><i className="ti-linkedin"></i></a>
                           </li>
                           <li className="list-inline-item"><a href="https://in.pinterest.com/crowndevour/" target='_blank'><i className="ti-pinterest"></i></a>
                           </li>
                           <li className="list-inline-item"><a href="https://www.youtube.com/@crowndevour6493/" target='_blank'><i className="ti-youtube"></i></a>
                           </li>
                           {/* <li className="list-inline-item"><a href="" target='_blank'><i className="ti-github"></i></a>
                </li> */}
                        </ul>
                     </a>
                     {/* <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p> */}
                  </div>
                  <div className="col-lg-2 col-md-3 col-6 mb-4">
                     <h6 className="mb-4">Quick Links</h6>
                     <ul className="list-unstyled footer-list">
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        {/* <li><a href="/terms-conditions">Terms Conditions</a></li> */}
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
                           <input type="email" className="form-control" placeholder="Your Email Address" />
                        </div>
                        <button className="btn btn-primary btn-block rounded" type="submit">Subscribe now</button>
                     </form>
                  </div>
               </div>
               <div className="scroll-top">
                  <a href="#" onClick={scrollToTop} id="scrollTop"><i className="ti-angle-up"></i></a>
               </div>
               <div className="text-center">
                  <p className="content">&copy; 2023 - Crowndevour</p>
               </div>
            </div>
         </footer>

         <script type="text/javascript" src="plugins/jQuery/jquery.min.js"/>
         <script type="text/javascript" src="plugins/bootstrap/bootstrap.min.js" async/>
         <script type="text/javascript" src="plugins/slick/slick.min.js"/>
         <script type="text/javascript" src="js/script.js"/>
      </div>
   );
}

export default Footer;