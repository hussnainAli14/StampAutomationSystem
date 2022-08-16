import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
    return (
        
            <footer className="text-center text-lg-start text-white footer ">
        <section className="d-flex justify-content-between p-4 section-style">

            <div className="me-5">
                <span>Get connected with us on social networks:</span>
            </div>

            <div>
                <Link to="/facebook" className="text-white me-4">
                    <FaFacebookF />
                </Link>
                <Link to="/twitter" className="text-white me-4">
                    <FaTwitter />
                </Link>

                <Link to="/insta" className="text-white me-4">
                    <FaInstagram />
                </Link>
                <Link to="/li" className="text-white me-4">
                    <GrLinkedinOption />
                </Link>

            </div>

        </section>

        <section >
            <div className="container text-center text-md-start mt-5">

                <div className="row mt-3">

                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold">Stamp Automation System</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto hr-style"/>
                        <p className='p-tag'>
                            Here to ease you to make stamp paper of any kind at home.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">

                        <h6 className="text-uppercase fw-bold">Products</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto hr-style" />
                        <p className='p-tag'>
                            <Link to="/main" className="text-white link">Home</Link>
                        </p>
                        <p className='p-tag'>
                            <Link to="/about" className="text-white link">About Us</Link>
                        </p>
                        <p className='p-tag'>
                            <Link to="/templates" className="text-white link">Templates</Link>
                        </p>
                        {/* <p className='p-tag'> 
                            <Link to="/" className="text-white link">Bootstrap Angular</Link>
                        </p> */}
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">

                        <h6 className="text-uppercase fw-bold">Useful links</h6>
                        <hr className="mb-4 mt-0 d-inline-block mx-auto hr-style"/>
                        <p className='p-tag'>
                            <Link to="/terms" className="text-white link">Terms And Conditions</Link>
                        </p>
                        <p className='p-tag'>
                            <Link to="/privacy" className="text-white link">Privacy Policy</Link>
                        </p>
                        <p className='p-tag'>
                            <Link to="/cookie" className="text-white link">Cookie Policy</Link>
                        </p>
                        {/* <p>
                            <Link to="/" className="text-white link">Help</Link>
                        </p> */}
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">

                        <h6 className="text-uppercase fw-bold">Contact</h6>
                        <hr
                            className="mb-4 mt-0 d-inline-block mx-auto hr-style"

                        />
                        {/* <p className='p-tag'><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p> */}
                        <p className='p-tag'><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                        <p className='p-tag'><i className="fas fa-phone mr-3"></i> 0340-0919652</p>
                        <p className='p-tag'><i className="fas fa-print mr-3"></i> 0300-5258887</p>
                    </div>

                </div>

            </div>
        </section>



        <div
            className="text-center p-3 copyright-style"

        >
            © 2022 Copyright:
            <Link className="text-white link" to="/">StampAutomationSystem.com</Link>

        </div>
        </footer>
        
    )


}
export default Footer;