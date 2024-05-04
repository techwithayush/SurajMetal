import React, { Fragment, useState } from 'react'
import '../../style/reusable_components_css/header.css'
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaPhone, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Header() {

    return (
        <Fragment>
            <div className='header_one'>
                <span style={{ fontSize: '12px' }}>The Leading Brand Name as a Manufacturer, Stiockiest & Suppliers of Industrial Raw Materials in India.</span>
                <div className='email_details'>
                    <div>
                        <MdEmail />
                        <a href="mailto:ayushnamdhar@gmail.com">ayushnamdhar@gmail.com</a>
                    </div>
                    <span className='me-2'>|</span>
                    <div>
                        <FaLocationDot />
                        <a>vastral,Ahmedabad</a>
                    </div>
                </div>
                <div className='social_media_icons'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                </div>
            </div>
            <div className='header_two '>
                <nav className="navbar container-xl navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className='navbar_dropdown' >
                                    <input type="checkbox" id="toggle-dropdown" className="toggle-checkbox" />
                                    <label style={{display:'flex',alignItems:'center'}} className="dropbtn" htmlFor='toggle-dropdown'>ABOUT COMPANY&nbsp;<BiSolidDownArrow /></label>
                                    <div className={`dropdown_menu`} >
                                        <Link to="/company-profile">Company Overview</Link>
                                        <Link to="/our-goals">Our Goals</Link>
                                        <Link to="/certificates">Certificates</Link>
                                    </div>
                                </li>
                                <li className='navbar_dropdown' >
                                    <input type="checkbox" id="toggle-dropdown2" className="toggle-checkbox" />
                                    <label className="dropbtn" htmlFor='toggle-dropdown2' style={{display:'flex',alignItems:'center'}}>OUR PRODUCTS&nbsp;<BiSolidDownArrow /></label>
                                    <div className={`dropdown_menu`}>
                                        <Link to="/sheets-plates-coils">SHEETS, PLATES & COILS</Link>
                                        <Link to="/pipes-tubes">PIPES AND TUBES</Link>
                                        <Link to='/industrial-valves'>INDUSTRIAL VALVES</Link>
                                        <Link to='/industrial-flanges'>INDUSTRIAL FLANGES</Link>
                                        <Link to="">INDUSTRIAL FITTINGS</Link>
                                        <Link to="/ss-fasteners">SS FASTENERS</Link>
                                        <Link to="/dairy-valves">DAIRY VALVES</Link>
                                        <Link to="/angle-channel">IANGLE, CHANNEL & FLATS</Link>
                                        <Link to="/bars-wires-rods">BARS, WIRES & RODS</Link>
                                        <a href="#">SS CIRCLES, PATTI & PATTA</a>
                                        <a href="#">PVD DECORATIVE SHEETS</a>
                                        <a href="#">SS HANDRAIL PIPES</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="application">APPLICATIONS</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">NEWS & UPDATES</a>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/contact">CONTACT US</Link>
                                </li>
                            </ul>
                            <div className='need_help'>
                                <FaPhone className='me-3' style={{ fontSize: '30px' }} />
                                <a href="tel:+91 6352617503"> Need Help?<br />8200172854</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Header