import React, { Fragment, useEffect } from 'react'
import '../style/companyProfile.css'
import { Link } from 'react-router-dom'
import { FaProductHunt } from "react-icons/fa";
import { FaPeopleGroup ,FaSalesforce } from "react-icons/fa6";
import banner from '../../public/images/companyProfile/banner.png'
import image1 from '../../public/images/companyProfile/image1.png'

function CompanyProfile() {

    useEffect(()=>{
        document.title = 'Compnay-Profile'
    },[])

    return (
        <Fragment>
            <div className='company'>
                <div className='banner' data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000" >
                    <div className='img'>
                        <img src={banner} alt="Image Not Found" />
                        <div className='text'>
                            <h2 data-aos='fade-down' data-aos-offset='200'  data-aos-duration="1000">Company Profile</h2>
                            <nav aria-label="breadcrumb" data-aos='fade-up' data-aos-offset='200'  data-aos-duration="1000">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Company Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="about container-md">
                    <div className="row">
                        <div className="col-lg-6 col-12" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='about_text'>
                                <h6 className='text-danger mb-4'>ABOUT SURAJ METAL</h6>
                                <h2 className='mb-4'>Company Overview</h2>
                                <p>Since 2007, we have focused on providing Suraj Metal Corporation with goods of the highest calibre while treating our customers, employees, and the environment with respect. We work diligently to fulfil the request's needs while keeping a strict eye on the client. All Metal Industries' goods come with a stylish in-class lead time and a never-ending support squad of diligent experts. We Have Selected A Special Position For Ourselves Within The Community As Well As Among Our Guests In The Domestic As Well As International Requests By Developing Ourselves With Time.
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12' data-aos='fade-left' data-aos-offset='200'  data-aos-duration="1000">
                            <div className="img">
                                <img src={image1} alt="Image Not Found" />
                                <div>
                                    <h2>15+ <br /><span>Years Experience</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='quality text-center'>
                    <h6>INDUSTRIES & PRODUCTION</h6>
                    <h2 className='mb-5'>Let's Experience Exclusive Quality</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-12" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='quality_text'>
                                <FaProductHunt className='icon' />
                                <h5>Best Product Quality</h5>
                                <p>In our sector, we offer the highest-quality industrial raw material products.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12" data-aos='fade-down' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='quality_text'>
                                <FaPeopleGroup className='icon' />
                                <h5>Smart Support 24-7</h5>
                                <p>We offer customer support around-the-clock. Regarding our products, we cater to every...</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12" data-aos='fade-left' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='quality_text'>
                                <FaSalesforce className='icon' />
                                <h5>After-Sale Support</h5>
                                <p>In all of India, we have a Dedicated Team for Customer Support in Sales Support.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='owner container-md'>
                    <div className="row">
                        <div className=" col-12 text-center" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                              <h6>MEET OUR TEAM</h6>
                              <h2>The Dream Is Made Possible By Teamwork.</h2>
                              <p>Consequat and blandit, habitant vivamus viverra cursus vehicula.</p>  
                        </div>
                        <div className='col-lg-4 col-sm-6 col-12 ' data-aos='fade-down' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='img'>
                                <img src={image1} alt="Image Not Found" />
                                <h5 className='text-primary'>MR. SURESH CHOUDHARY</h5>
                                <h6>Founder</h6>
                            </div>
                        </div>
                        <div className=' col-lg-4 col-sm-6 col-12 ' data-aos='fade-up' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='img'>
                                <img src={image1} alt="Image Not Found" />
                                <h5 className='text-primary'>MR. SURESH CHOUDHARY</h5>
                                <h6>Founder</h6>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 col-12 ' data-aos='fade-left' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='img'>
                                <img src={image1} alt="Image Not Found" />
                                <h5 className='text-primary'>MR. SURESH CHOUDHARY</h5>
                                <h6>Founder</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CompanyProfile