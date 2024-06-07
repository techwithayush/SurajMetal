import React, { Fragment, useEffect, useState } from 'react'
import '../style/anglechannel.css'
import InquireForm from './reusable_components/InquireForm';
import ProductCategories from './reusable_components/ProductCategories';
import { Link } from 'react-router-dom';
import angle1 from '/images/images/angle1.png'
import angle2 from '/images/images/angle2.png'
import angle3 from '/images/images/angle4.png'
import angle4 from '/images/images/angle4.png'

function AngleChannel() {


    useEffect(() => {
        document.title = 'Angle-Channel'
    }, [])

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const sheetsDescription = document.querySelector('.bars_rods_description')
            const rect = sheetsDescription.getBoundingClientRect();
            if (rect.y <= 0) {
                setScrolling(true)
            }
            else {
                setScrolling(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Fragment>
            <div className="angle_channel">
                <div className="banner container-lg">
                    <div className="row">
                        <div className="col-md-6 col-12" data-aos='fade-right' data-aos-offset='200' data-aos-duration="1000">
                            <div className="img">
                                <img src={angle1} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12" data-aos='fade-left' data-aos-offset='200' data-aos-duration="1000">
                            <div className='banner_text'>
                                <h6 className='text-danger mb-4'>OUR PRODUCTS</h6>
                                <h2 className='text-primary mb-4'>Angle and Channel & Flat Manufacturer in India</h2>
                                <p>Suraj Metal Corporation is one of the leading manufacturers of angle, channel and flat. We offer an excellent quality stainless angle bar, alloy steel angle bar, titanium angle bar, nickel alloy angle bar. Stainless steel angle is also called stainless steel channel in the market. <br />We offer our customers a wide range of Angles & Channels widely find their applications in different industrial & commercial sectors. These are available in various dimensions of width, leg height, material thickness, and other parameters.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tagline">
                    <div className='tagline_text'>
                        <h1 className='mb-4' data-aos='fade-down' data-aos-offset='200' data-aos-duration="1000">Every Customer are Precious for Us.</h1>
                        <p className='mb-4' data-aos='fade-up' data-aos-offset='200' data-aos-duration="1000">Prompt Response, Excellent Quality, Quick Delivery and Customer Satisfaction really characterize Suraj Metal Corporation. We likewise, produce and represented considerable authority in Stainless Steel Round Bars, All sorts of Fittings and Flanges.</p>
                        <Link to=''>INQUIRE HERE</Link>
                    </div>
                </div>
                <div className='product container-lg '>
                    <div className="row">
                        <div className="col-3">
                            <ProductCategories />
                        </div>
                        <div className='col-md-9 col-12'>
                            <div className={`angle_channel_description ${scrolling && 'scroll'}`}>
                                <h6>We manufacture and export premium quality stainless steel flats, angle, channel & stainless steel round bars, which find application in different industries.</h6>
                                <p>Suraj Metal Corporation is a well-known and reputed Angle, Channel & Flat Bar manufacturer in India. Our Angle, Channel & Flat Bars are available in different materials such as Hastelloy Angle, Channel, & Flat Bar, Monel Angle, Channel, & Flat Bar, Inconel Angle, Channel, & Flat Bar, Titanium Angle, Channel, & Flat Bar, Alloy 20 Angle, Channel, & Flat Bar. Angle, Channel, & Flat Bar at Suraj Metal Corporation are manufactured according to international standards such as ASTM Standard, ASME Standard, ANSI Standard, EU Standard, DIN Standard, IS Standard, ISO Standard, and JIS Standard in India.</p>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={angle2} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={angle3} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={angle4} alt="Image Not Found" />
                                        </div>
                                    </div>
                                </div>
                                <div className='technical_specification'>
                                    <h4 className='mt-4 text-danger'>TECHNICAL SPECIFICATIONS :</h4>
                                    <ul>
                                        <li>Type of material : stainless steel, nickel alloy, titanium, aluminum</li>
                                        <li>Dimensions : EN, DIN, JIS, ASTM, BS, ASME, AISI</li>
                                        <li>Standards : ASTM A 276/A 276M,A 484/A 484M,A 564/A 564M,A 582/A582M,A 638 /A 638M,A705/A705M</li>
                                        <li>Size : angle - 5mm to 9mm, channel - 40mm*20mm~300mm*300mm</li>
                                        <li>Types : Equal angle, Unequal angle, U channel, C channel</li>
                                        <li>Aluminium : 1050,1100, 2017, 7150, 7178, 7575, 2050, 7085, 2011 A92011, 2014A A92014, 2024 A92024, 2219, 5052 A95052, 5083 A95083, 5754, 6061 A96061 A86061, 6063, 6082 A96082, 7071 7020, 7050 A97050, 7075 A97075 A87075, 7175</li>
                                        <li>Titanium : Grade 1, Grade 4, Grade 5(Ti 6Al-4V), Grade 6(Ti 5Al-2.5Sn), Grade 7, Grade 11, Grade 12, 8Ai-1Mo-1V, Grade 9(3Al-2.5V), 6Al-6V-25n, 6Al-2Sn-4Zr-2Mo, 6Al-7Nb, Grade 23(Ti 6AL-4V ELI), Grade 5 ELI</li>
                                    </ul>
                                </div>

                                <div className='uses_application'>
                                    <h4 className='mt-4 text-danger'>USES & APPLICATIONS :</h4>
                                    <ul>
                                        <li>Chemicals Industry</li>
                                        <li>Water supply systems</li>
                                        <li>Heating</li>
                                        <li>Power Plants Industry</li>
                                        <li>Oil and Gas Industry</li>
                                        <li>Paper & Pulp Industry</li>
                                        <li>Plumbing</li>
                                        <li>Food Processing Industry</li>
                                    </ul>
                                </div>
                                <InquireForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AngleChannel