import React, { Fragment, useEffect } from 'react'
import '../style/homepage.css';
import { FaTruckMoving, FaStar } from "react-icons/fa6";
import { IoDiamondSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../public/images/homePageImages/image.png'
import img3 from '../../public/images/homePageImages/image3.png'
import img2 from '../../public/images/homePageImages/image2.png'
import img4 from '../../public/images/homePageImages/image4.png'
import img5 from '../../public/images/homePageImages/image6.png'
import img8 from '../../public/images/homePageImages/image8.png'
import sheet from '../../public/images/product_images/sheets.png'
import pipe from '../../public/images/product_images/pipes.png'
import valves from '../../public/images/product_images/valves.png'
import flanges from '../../public/images/product_images/flanges.png'
import fittings from '../../public/images/product_images/fittings.png'
import fasteners from '../../public/images/product_images/fasteners.png'
import dairyvalves from '../../public/images/product_images/dairyvalves.png'
import angle from '../../public/images/product_images/angel.png'
import rods from '../../public/images/product_images/rods.png'
import patta from '../../public/images/product_images/patta.png'
import pvdsheets from '../../public/images/product_images/pvdsheets.png'
import sspipes from '../../public/images/product_images/sspipes.png'
import bestquality from '../../public/images/logo_images/bestquality.png'
import iso from '../../public/images/logo_images/iso.png'
import msme from '../../public/images/logo_images/msme.png'
import makeIndia from '../../public/images/logo_images/makeIndia.png'
import { FaRupeeSign } from 'react-icons/fa';

import app_img_1 from '../../public/images/application_images/image1.png'
import app_img_2 from '../../public/images/application_images/image2.png'
import app_img_3 from '../../public/images/application_images/image3.png'
import app_img_4 from '../../public/images/application_images/image4.png'
import app_img_5 from '../../public/images/application_images/image5.png'




function HomaPage() {

    useEffect(() => {
        document.title = 'Home-Page'
    }, [])

    return (
        <Fragment>
            <div className='homepage' >
                <section className='homepage_image'>
                    <Swiper
                        centeredSlides={true}
                        autoplay={
                            {
                                delay: 6000,
                                disableOnInteraction: false
                            }
                        }
                        modules={[Autoplay]}
                        className='swiper'
                    >
                        <SwiperSlide>
                            <div className='overflow-hidden'>
                                <img className='img' src={img1} alt="Image Not Found!" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='overflow-hidden'>
                                <img className='img' src={img2} alt="Image Not Found!" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='overflow-hidden'>
                                <img className='img' src={img3} alt="Image Not Found!" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className='homepage_text' data-aos='fade-down' data-aos-duration="3000">
                        <h4 className='mb-3'>WELCOME TO RITEX METAL</h4>
                        <h2 className='mb-4'>Production from strategy to delivery, on time everytime.</h2>
                        <p className='mb-3'>Quick delivery and fast service as per the customer's requirement.</p>
                        <button className='btn' type='button'><span style={{ position: 'relative', zIndex: '1' }}>{`Know more ->`}</span></button>
                    </div>
                </section>
                <div className='homepage_bottom_card' data-aos='fade-left' data-aos-duration="1000">
                    <div className='row'>
                        <div className='col-4'>
                            <FaTruckMoving className='fs-2 text-primary' />
                            <h5 className='ms-3'>On-Time Delivery <br /> Across India</h5>
                        </div>
                        <div className='col-4'>
                            <FaTruckMoving className='fs-2 text-primary' />
                            <h5 className='ms-3'>After Sales & Support <br />
                                24X7</h5>
                        </div>
                        <div className='col-4'>
                            <FaTruckMoving className='fs-2 text-primary' />
                            <h5 className='ms-3'>Professional Team <br />
                                Approach</h5>
                        </div>
                    </div>
                </div>
                <section className='who_we_are container-lg'>
                    <div className='row gx-5 d-flex align-items-center' >
                        <div className='col-md-5 col-12 ' data-aos='fade-right' data-aos-offset="200" data-aos-duration="1000">
                            <h5>WHO WE ARE</h5>
                            <h2>We Have a culture that inspires Our Clients to work smart, together.</h2>
                            <h6>Ritex Metal Corporation is one of the Leading Brand name as a Manufacturer, Suppliers, Stockiest and Distributors in Premium Range of Ferrous and Non Ferrous Industrial Raw Materials in Ahmedabad, Gujarat & India.</h6>
                            <p>We are Dealing in All Types of Industrial Raw Materials such as Sheets, Plates, Coils, Pipes & Tubes, Bars, Wires & Rods, Angles, channels & Flats, Industrial Flanges and Fittings, Industrial Valves, Dairy Valves, Industrial Fittings, Fasteners and Custom Fabrication Services with Stainless Steel & Mild Steel etc.</p>
                            <div className='rating row text-center'>
                                <div className='col-6'>
                                    <h1>4.7+</h1>
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    <h4>Review Customer</h4>
                                    <p>We Have Lots of Satisfied Cutsomer List in Our Bucket.</p>
                                </div>
                                <div className='col-6'>
                                    <h1>A+</h1>
                                    <span>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </span>
                                    <h4>Products Range</h4>
                                    <p>The Complete Solutions in Industrial Raw Materials Range.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7 col-12 ' data-aos='fade-left' data-aos-offset="200" data-aos-duration="1000">
                            <div className='img_div'>
                                <img src={img4} alt="Image Not Found." />
                                <h3 >15+ <br /> <span className='fs-5'>Years Of Experience</span></h3>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='about_us ' data-aos='fade-left' >
                    <div className='about_us_text' >
                        <h2>Connecting Businesses, Ideas, And People For Greater Impact</h2>
                        <p>We Provide the best quality products of industrial raw material products in our industry.</p>
                        <button type='button' className=' btn ps-5 pe-5'><span style={{ position: 'relative', zIndex: '1' }}>About Us</span></button>
                    </div>
                    <div className='about_us_bottom' >
                        <div className='row' style={{display:'flex',alignItems:'center'}}>
                            <div className='col-4'>
                                <h2 style={{ fontWeight: '650', color: 'red' }}>We Are Ready To Serve You Differently.</h2>
                            </div>
                            <div className='col-5'>
                                <p className='text-justify'>Our Products are highly demanded in the market by various industries. Modern accessories manufacture our products, and the materials used by our team are qualitative. Thus it retains the high scale properties needed for today's latest applications.</p>
                            </div>
                            <div className='col-3 text-center'>
                                <h2 style={{ fontWeight: '650', color: 'blue' }}>100% <br /><span style={{ fontSize: '16px', color: 'black' }}>Genuine Products</span></h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='what_we_offer container-lg'>
                    <div className='row' style={{display:'flex',alignItems:'center'}}>
                        <div className='col-12 col-md-6' data-aos='fade-right' data-aos-duration="1000" >
                            <div>
                                <h6 style={{ color: 'red', fontWeight: '650' }}>WHAT WE OFFER</h6>
                                <h2 className='text-primary' style={{ fontSize: '40px' }}>Developing solutions for the future.</h2>
                            </div>
                        </div>
                        <div className='col-12 col-md-6' data-aos='fade-left' data-aos-duration="1000">
                            <p style={{ textAlign: 'justify' }}>Established in the year 2022, RITEX METAL CORPORATION is a notable Supplier, Wholesaler, Importer, Exporter, and Stockist of a massive selection of Stainless Steel, Carbon Steel, Duplex and Super Duplex Steel, and High Nickel alloys Products. Our products comprise Sheets, Plates, Coils, Round Bar, Wire, Wire Mesh, Pipes, Pipe Fittings, Forged Fittings, Pipes & Tubes, Industrial Valves, Industrial Flanges & Fittings, Industrial Fittings, SS Fasteners etc.</p>
                        </div>
                    </div>
                    <div className='row  product_images mt-5'>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3' data-aos='fade-right' data-aos-duration="1000">

                            <a href="" className="card">
                                <img src={sheet} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">SHEETS, PLATES & COILS</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3' data-aos='fade-down' data-aos-offset='300' data-aos-duration="1000">
                            <a href="" className="card">
                                <img src={pipe} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">PIPES AND TUBES</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3' data-aos='fade-down' data-aos-offset='300' data-aos-duration="1000">
                            <a href="" className="card">
                                <img src={valves} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">INDUSTRIAL VALVES</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3' data-aos='fade-left' data-aos-duration="1000">
                            <a href="" className="card">
                                <img src={flanges} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">INDUSTRIAL FLANGES</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3' data-aos='fade-right' data-aos-duration="1000">
                            <a href="" className="card">
                                <img src={fittings} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">INDUSTRIAL FITTINGS</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3' data-aos='fade-right' data-aos-duration="1000">
                            <a href="" className="card">
                                <img src={fasteners} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">SS FASTENERS</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3' data-aos='fade-left' data-aos-duration="1000">
                            <a href="" className="card">
                                <img src={dairyvalves} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">DAIRY VALVES</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        <div className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3' data-aos='fade-left' data-aos-duration="1000">
                            <a href="" className="card">
                                <img src={angle} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">ANGLE, CHANNEL & FLATS</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        {/* <div className='col-3'>
                            <a href="" className="card">
                                <img src={rods} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">BARS, WIRES & RODS</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        <div className='col-3'>
                            <a href="" className="card">
                                <img src={patta} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">SS CIRCLES, PATTI & PATTA</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        <div className='col-3'>
                            <a href="" className="card">
                                <img src={pvdsheets} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">PVD DECORATIVE SHEETS</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div>
                        <div className='col-3'>
                            <a href="" className="card">
                                <img src={sspipes} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <div className="card__header-text">
                                            <h3 className="card__title">SS HANDRAIL PIPES</h3>
                                        </div>
                                    </div>
                                    <p className="card__description">Available Range in MS and SS With All Standards and Sizes..</p>
                                    <button type='button' className='card_button'>Learn more</button>
                                </div>
                            </a>
                        </div> */}
                    </div>
                </section>
                <section className='why_choose_us container-lg'>
                    <div className='text-center' data-aos='fade-down' data-aos-duration="2000">
                        <h6 style={{ color: 'red', fontWeight: '650' }}>WHY CHOOSE US</h6>
                        <h2 className='text-primary' style={{ fontSize: '40px' }}>We Believe in Hardwork and customer satisfactory Results</h2>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-6 bg-light' data-aos='fade-right' data-aos-offset='200' data-aos-duration="2000">
                            <div className='img'>
                                <img src={img5} alt="Image Not Found" />
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={0}
                                    loop={true}
                                    autoplay={
                                        {
                                            delay: 2000,
                                            disableOnInteraction: false
                                        }
                                    }
                                    modules={[Autoplay]}
                                    className='logo_slider'
                                >
                                    <SwiperSlide>
                                        <div className='logo_slider'>
                                            <img className='img' src={bestquality} alt="Image Not Found!" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='logo_slider'>
                                            <img className='img' src={iso} alt="Image Not Found!" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='logo_slider'>
                                            <img className='img' src={msme} alt="Image Not Found!" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='logo_slider'>
                                            <img className='img' src={makeIndia} alt="Image Not Found!" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 p-4' data-aos='fade-left' data-aos-offset='200' data-aos-duration="2000">
                            <div className='row g-4'>
                                <div className='col-sm-6 col-12 text-center' >
                                    <div className='p-2 pt-5 pb-5' style={{ boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.229)', borderRadius: '10px' }}>
                                        <IoDiamondSharp className='icon' style={{ fontSize: '60px', color: 'red' }} />
                                        <h5 className='text-primary'>100% Genuine Products</h5>
                                        <p >Ex suspendisse semper si sociosqu platea accumsan adipiscing diam maecenas consectetur at</p>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-12 text-center'>
                                    <div className='p-2 pt-5 pb-5' style={{ boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.229)', borderRadius: '10px' }}>
                                        <FaTruckMoving className='icon' style={{ fontSize: '60px', color: 'red' }} />
                                        <h5 className='text-primary'>On-Time Delivery
                                        </h5>
                                        <p >Ex suspendisse semper si sociosqu platea accumsan adipiscing diam maecenas consectetur at</p>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-12 text-center'>
                                    <div className='p-2 pt-5 pb-5' style={{ boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.229)', borderRadius: '10px' }}>
                                        <RiTeamFill className='icon' style={{ fontSize: '60px', color: 'red' }} />
                                        <h5 className='text-primary'>50+ Expert Team</h5>
                                        <p >Ex suspendisse semper si sociosqu platea accumsan adipiscing diam maecenas consectetur at</p>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-12 text-center'>
                                    <div className='p-2 pt-5 pb-5' style={{ boxShadow: '0px 0px 20px 2px rgba(0, 0, 0, 0.229)', borderRadius: '10px' }}>
                                        <FaRupeeSign className='icon' style={{ fontSize: '60px', color: 'red' }} />
                                        <h5 className='text-primary'>Competitive Price Range</h5>
                                        <p >Ex suspendisse semper si sociosqu platea accumsan adipiscing diam maecenas consectetur at</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='abilities container-lg'>
                    <div>
                        <h2 className='text-danger text-center mb-4' data-aos='fade-down' data-aos-offset='200' data-aos-duration="2000">ABILITEIS</h2>
                        <div className='row '>
                            <div className='col-12 col-sm-6 col-md-3' data-aos='fade-right' data-aos-offset='200' data-aos-duration="2000">
                                <div className="custom_card">
                                    <div className="box">
                                        <div className="percent">
                                            <svg>
                                                <circle cx="70" cy="70" r="70"></circle>
                                                <circle style={{ strokeDasharray: 430 }} cx="70" cy="70" r="70"></circle>
                                            </svg>
                                            <div className="num">
                                                <h2>87<span>%</span></h2>
                                            </div>
                                        </div>
                                        <h2 className="text">Business Growth</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-3' data-aos='fade-down' data-aos-offset='200' data-aos-duration="2000">
                                <div className="custom_card">
                                    <div className="box">
                                        <div className="percent">
                                            <svg>
                                                <circle cx="70" cy="70" r="70"></circle>
                                                <circle style={{ strokeDasharray: 360 }} cx="70" cy="70" r="70"></circle>
                                            </svg>
                                            <div className="num">
                                                <h2>72<span>%</span></h2>
                                            </div>
                                        </div>
                                        <h2 className="text">Business Plan Project</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-3' data-aos='fade-up' data-aos-offset='200' data-aos-duration="2000">
                                <div className="custom_card">
                                    <div className="box">
                                        <div className="percent">
                                            <svg>
                                                <circle cx="70" cy="70" r="70"></circle>
                                                <circle style={{ strokeDasharray: 437 }} cx="70" cy="70" r="70"></circle>
                                            </svg>
                                            <div className="num">
                                                <h2>89<span>%</span></h2>
                                            </div>
                                        </div>
                                        <h2 className="text">Tax Project</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-3' data-aos='fade-left' data-aos-offset='200' data-aos-duration="2000">
                                <div className="custom_card">
                                    <div className="box">
                                        <div className="percent">
                                            <svg>
                                                <circle cx="70" cy="70" r="70"></circle>
                                                <circle style={{ strokeDasharray: 310 }} cx="70" cy="70" r="70"></circle>
                                            </svg>
                                            <div className="num">
                                                <h2>63<span>%</span></h2>
                                            </div>
                                        </div>
                                        <h2 className="text">Project Manager</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='application_page text-center container-lg'>
                    <h2 className='text-danger' data-aos='fade-down' data-aos-offset='200' data-aos-duration="1000">APPLICATIONS</h2>
                    <p data-aos='fade-right' data-aos-offset='200' data-aos-duration="1000">Our Products Are Highly Demanded In The Market By Various Industries. Modern Accessories Manufacture Our Products, And The Materials Used By Our Team Are Qualitative. Thus It Retains The High Scale Properties Needed For Today's Latest Applications.</p>
                    <div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            loop={true}
                            breakpoints={{
                                576:{
                                    slidesPerView:2                                  
                                },
                                767:{
                                    slidesPerView:3
                                },
                                992:{
                                    slidesPerView:4
                                }
                            }}
                            autoplay={
                                {
                                    delay: 3000,
                                    disableOnInteraction: false
                                }
                            }
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className='application_swiper'
                        >
                            <SwiperSlide>
                                <div className='application_image' data-aos='fade-right' data-aos-duration="1000">
                                    <img src={app_img_1} alt="Image Not Found!" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='application_image' data-aos='fade-up' data-aos-duration="1000">
                                    <img src={app_img_2} alt="Image Not Found!" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='application_image' data-aos='fade-down' data-aos-duration="1000">
                                    <img src={app_img_3} alt="Image Not Found!" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='application_image' data-aos='fade-up' data-aos-duration="1000">
                                    <img src={app_img_4} alt="Image Not Found!" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='application_image' data-aos='fade-left' data-aos-duration="1000">
                                    <img src={app_img_5} alt="Image Not Found!" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className='contact_us container-lg'>
                    <div className='row'>
                        <div className="col-md-6 col-12" data-aos='fade-right' data-aos-offset='200' data-aos-duration="1000" >
                            <div className='img' >
                                <img src={img8} alt="Image Not Found" />
                                <div className='img_text'>
                                    <h5>GET IN TOUCH</h5>
                                    <h2>Contact our Sales</h2>
                                    <p>We are always Ready To Help You, If You Required Any Kind Of Help Kindly Fill The Form Our Executive Contact you Asap.</p>
                                    <hr />
                                    <h4>info@ritexmetal.com</h4>
                                    <h4>+91 97266 45523</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mt-3 mt-md-0" data-aos='fade-left' data-aos-offset='200' data-aos-duration="1000">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14690.850507577583!2d72.65323785044829!3d22.99759261705727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87cf76479217%3A0xbe50540453c71a8c!2sVastral%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1714127555321!5m2!1sen!2sin" width="100%" height="500" style={{ border: 0, }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </section>
            </div >
        </Fragment >
    )
}

export default HomaPage




