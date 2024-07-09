import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import instagram from '../../assets/icons/instagram-logo.svg';
import x from '../../assets/icons/icon-twitterx.svg';
import facebook from '../../assets/icons/icons-facebook.svg';
import youtube from '../../assets/icons/icons-de-youtube.svg';
import './footer.css';

const FooterCp = () => {
    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">About Us</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contact</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-dark">Email</a></li>
                            <li><a href="#!" className="text-dark">Phone</a></li>
                            <li><a href="#!" className="text-dark">Address</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <a href="#!" className="me-2"><img src={facebook} alt="Facebook" className="footer-icon" /></a>
                        <a href="#!" className="me-2"><img src={x} alt="Twitter" className="footer-icon" /></a>
                        <a href="#!" className="me-2"><img src={instagram} alt="Instagram" className="footer-icon" /></a>
                        <a href="#!" className="me-2"><img src={youtube} alt="YouTube" className="footer-icon" /></a>
                    </div>
                </div>
            </div>
            <div className="text-center p-3 bg-dark text-white">
                © 2023 Copyright:
                <a className="text-white" href="https://yourwebsite.com/">YourWebsite.com</a>
            </div>
        </footer>
    );
};

export default FooterCp;
