import React, { Fragment, useEffect, useState } from 'react'
import '../style/indValves.css'
import { Link } from 'react-router-dom'
import ProductCategories from './reusable_components/ProductCategories'
import InquireForm from './reusable_components/InquireForm'
import ind_val1 from '/images/images/ind_valve1.png'
import ind_val2 from '/images/images/ind_valve2.png'
import ind_val3 from '/images/images/ind_valve3.png'
import ind_val4 from '/images/images/ind_valve4.png'



function IndValves() {

    useEffect(()=>{
        document.title = 'Industrial-Valves'
    },[])

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const sheetsDescription = document.querySelector('.ind_valve_description')
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
            <div className="ind_valves">
                <div className="banner container-lg">
                    <div className="row">
                        <div className="col-md-6 col-12" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                            <div className="img">
                                <img src={ind_val1} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12" data-aos='fade-left' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='banner_text'>
                                <h6 className='text-danger mb-4' >OUR PRODUCTS</h6>
                                <h2 className='text-primary mb-4'>Flanges Manufacturer, Supplier and Dealer in Ahmedabad, India</h2>
                                <p>Ritex Metal Corporation is a leading Flanges Manufacturer in Ahmedabad, India. We manufacture a wide selection of Flanges, SS Flanges, and Industrial Pipe Flanges from 12″NB to 48″NB. In order to connect pipes to other piping systems like tees, elbows, reducers, valves, and other piping equipment Flanges are frequently used as connectors in piping systems.Our qualitative range of Flanges is exclusively designed for several piping applications of various industries Such as steel factories, chemical industries, petrochemical industry, fire protection systems, etc. We have types of flanges that include Socket Weld Flanges, Slip-On Flanges, Threaded Flanges, Blind Flanges, and more. Flanges are designed and developed in accordance with the IQS (International Quality Standards). We also offer customized Flanges as per the customer's requirement..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tagline">
                    <div className='tagline_text'>
                        <h1 className='mb-4' data-aos='fade-down' data-aos-offset='200'  data-aos-duration="1000">Every Customer are Precious for Us.</h1>
                        <p className='mb-4' data-aos='fade-up' data-aos-offset='200'  data-aos-duration="1000">Prompt Response, Excellent Quality, Quick Delivery and Customer Satisfaction really characterize Ritex Metal Corporation. We likewise, produce and represented considerable authority in Stainless Steel Round Bars, All sorts of Fittings and Flanges.</p>
                        <Link to=''>INQUIRE HERE</Link>
                    </div>
                </div>
                <div className='product container-lg '>
                    <div className="row">
                        <div className="col-3">
                            <ProductCategories />
                        </div>
                        <div className='col-md-9 col-12'>
                            <div className={`ind_valve_description ${scrolling && 'scroll'}`}>
                                <h6>ANSI B16.5 Flanges Manufacturer, Stainless Steel Flanges Manufacturer, ANSI B16.5 Pipe Flanges Supplier, ANSI B16.47 Flanges Supplier, Carbon Steel IS 2062 Flanges Manufacturer, ASTM A105 Carbon Steel Flanges, CS Flanges Supplier in Ahmedabad</h6>
                                <p>Ritex Metal Corporation is India’s best Flanges Manufacturer. We cater to the huge global demand of our clients who are spread across 5 continents and around 80 countries. Our Flanges are reputed and well known across the globe for their reliability and quality. We treat our clients as our partners by providing them with our products and services. Ritex Metal Corporation Manufactures Flanges of different shapes and sizes and with different specifications as per the customers' requirements. Flanges Manufacturer is used in various parts of India. Around worldwide Flanges Manufacturer is getting more Recognization.</p>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={ind_val2} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={ind_val3} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={ind_val4} alt="Image Not Found" />
                                        </div>
                                    </div>
                                </div>
                                <div className='technical_specification'>
                                    <h4 className='mt-4 text-danger'>TECHNICAL SPECIFICATIONS :</h4>
                                    <ul>
                                        <li>Flanges Types : Slip On, Weld Neck, Long Weld Neck, Threaded, Blind, Companion, Lap Joint</li>
                                        <li>Class : 150 LBS, 300 LBS, 600 LBS, 900 LBS, 1500 LBS, 2500 LBS ASA 150, ASA 300, PN 6,10,16,25, 40,64,100,160 ETC. available with NACE MR 01-75</li>
                                        <li>Size : 1/2″ (15 NB) to 48″ (1200NB) DN10~DN5000</li>
                                        <li>Type : Raised Face (RF), Flat Face (FF), Ring Type Joint (RTJ), Lap-Joint Face (LJF), Large Male-Female (LMF), Small Male-Female (SMF), Large Tongue & Groove, Small Tongue, Groove</li>
                                        <li>Stainless Steel : ASTM /ASME A/SA 213 / 249 / 269 / 312 / 358 CL. I to V - 304 , 304L , 304H, 309S ,309H , 310S, 310H , 316 , 316TI , 316H , 316 LN , 317 , 317L , 321 , 321H , 347 , 347 H , 904L .</li>
                                        <li>Duplex Steel : ASTM/ASME A/SA 789, 790 - UNS NO S 31803, S 32205, S 32550, S 32750, S 32760.</li>
                                        <li>Carbon Steel : ASTM A106 Gr. A, B & C API 5L Gr. A / B, X42 ,X52 ,X60 ASTM A 53 Gr. A/B</li>
                                        <li>Alloys Steel : ASTM /ASME A/SA 213 / 335 / 691 - P5,P9,P11,P12,P22,P91</li>
                                        <li>Nickel Alloys : Nickel Alloys 200, Nickel Alloys 201</li>
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

export default IndValves