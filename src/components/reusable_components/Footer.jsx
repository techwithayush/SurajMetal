import React, { Fragment } from 'react'
import '../../style/reusable_components_css/footer.css'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { IoHome } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

function Footer() {
    return (
        <Fragment>
            <div className='bg-dark'>
                <div className='footer container-xl'>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-12">
                            <img src="" alt="Image Not Found" />
                            <p className='text-justify'>Our Products Are Highly Demanded In The Market By Various Industries. Modern Accessories Manufacture Our Products, And The Materials Used By Our Team Are Qualitative.</p>
                            <div className='footer_social_icon'>
                                <FaFacebookSquare className='fsi' />
                                <FaInstagram className='fsi' />
                                <FaTwitterSquare className='fsi' />
                                <FaLinkedin className='fsi' />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <h4 className='text-primary'>Products</h4>
                            <div className='row'>
                                <div className="col-6">
                                    <li>SHEEST,PLATES & COILS</li>
                                    <li>PIPES AND TUBES</li>
                                    <li>INDUSTRIAL VALVES</li>
                                    <li>INDUSTRIAL FLANGES</li>
                                </div>
                                <div className="col-6">
                                    <li>SS FASTENERS</li>
                                    <li>DAIRY VALVES</li>
                                    <li>IANGLE, CHANNEL & FLATS</li>
                                    <li>BARS, WIRES & RODS</li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 col-12">
                            <h4 className='text-primary'>Company</h4>
                            <li>Company Overview</li>
                            <li>Our Goals</li>
                            <li>Certificates</li>
                        </div>
                        {/* <div className="col-lg-3 col-6 get_in_touch">
                            <div>
                                <IoHome className='icon' />
                                <div className='div'>
                                    <h6>Our Office</h6>
                                    <p >C-4, Janak Ahmedabad, Gujarat 380023
                                    </p>
                                </div>
                            </div>
                            <div>
                                <MdAddCall className='icon' />
                                <div>
                                    <h6>Need help? Call us</h6>
                                    <p>+919726645523</p>
                                </div>
                            </div>
                            <div>
                                <IoIosMail className='icon' />
                                <div>
                                    <h6>Need help? Mail us</h6>
                                    <h6>info@ritexmetal.com</h6>
                                    <p>ritexmetal@gmail.com</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <hr />
                <div className='footer_second container-xl'>
                    <p>Copyright © {new Date().getFullYear()}, All rights reserved. Powered by Ritex Metal Corporation.</p>
                    <p>Design & Developed by <Link to='https://www.linkedin.com/in/ayush-namdhar-8ba009216/' target='_blank' className='text-danger'>Ayush Namdhar</Link> </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer