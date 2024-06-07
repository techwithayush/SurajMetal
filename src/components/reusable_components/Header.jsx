import React, { Fragment, useState } from 'react'
import '../../style/reusable_components_css/header.css'
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaPhone, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidDownArrow } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import SM from '/images/SM.png'

function Header() {

    return (
        <Fragment>
            <div className='header_one'>
                <span style={{ fontSize: '12px' }}>The Leading Brand Name as a Manufacturer, Stiockiest & Suppliers of Industrial Raw Materials in India.</span>
                <div className='email_details'>
                    <div>
                        <MdEmail />
                        <NavLink href="mailto:info@surajmetal.com">info@surajmetal.com</NavLink>
                    </div>
                    <span className='me-2'>|</span>
                    <div>
                        <FaLocationDot />
                        <a>Rakhiyal,Ahmedabad</a>
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
                        <NavLink className="navbar-brand" to="/" style={{backgroundColor:'transparent'}}>
                            <img src={SM} alt="Image Not Found!" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">HOME</NavLink>
                                </li>
                                <li className='navbar_dropdown' >
                                    <input type="checkbox" id="toggle-dropdown" className="toggle-checkbox" />
                                    <label style={{display:'flex',alignItems:'center'}} className="dropbtn" htmlFor='toggle-dropdown'>ABOUT COMPANY&nbsp;<BiSolidDownArrow /></label>
                                    <div className={`dropdown_menu`} >
                                        <NavLink to="/company-profile">Company Overview</NavLink>
                                        <NavLink to="/our-goals">Our Goals</NavLink>
                                        <NavLink to="/certificates">Certificates</NavLink>
                                    </div>
                                </li>
                                <li className='navbar_dropdown' >
                                    <input type="checkbox" id="toggle-dropdown2" className="toggle-checkbox" />
                                    <label className="dropbtn" htmlFor='toggle-dropdown2' style={{display:'flex',alignItems:'center'}}>OUR PRODUCTS&nbsp;<BiSolidDownArrow /></label>
                                    <div className={`dropdown_menu`}>
                                        <NavLink to="/sheets-plates-coils">SHEETS, PLATES & COILS</NavLink>
                                        <NavLink to="/pipes-tubes">PIPES AND TUBES</NavLink>
                                        <NavLink to='/industrial-valves'>INDUSTRIAL VALVES</NavLink>
                                        <NavLink to='/industrial-flanges'>INDUSTRIAL FLANGES</NavLink>
                                        <NavLink to="/ss-fasteners">SS FASTENERS</NavLink>
                                        <NavLink to="/dairy-valves">DAIRY VALVES</NavLink>
                                        <NavLink to="/angle-channel">IANGLE, CHANNEL & FLATS</NavLink>
                                        <NavLink to="/bars-wires-rods">BARS, WIRES & RODS</NavLink>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="application">APPLICATIONS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">CONTACT US</NavLink>
                                </li>
                            </ul>
                            <div className='need_help'>
                                <FaPhone className='me-3' style={{ fontSize: '30px' }} />
                                <a href="tel:+91 95744 45869"> Need Help?<br />95744 45869</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Header