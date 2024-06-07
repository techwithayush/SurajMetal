import React, { Fragment, useEffect, useState } from 'react'
import '../style/pipesTubes.css'
import pipe1 from '../../public/images/images/pipes_tubes1.png'
import pipe2 from '../../public/images/images/pipes_tubes2.png'
import pipe3 from '../../public/images/images/pipes_tubes3.png'
import pipe4 from '../../public/images/images/pipes_tubes4.png'
import { Link } from 'react-router-dom'
import ProductCategories from './reusable_components/ProductCategories'
import InquireForm from './reusable_components/InquireForm'


function PipesTubes() {


    useEffect(()=>{
        document.title = 'Pipes-Tubes'
    },[])

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const sheetsDescription = document.querySelector('.pipes_tubes_description')
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
            <div className="pipes_tubes">
                <div className="banner container-lg">
                    <div className="row">
                        <div className="col-md-6 col-12" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                            <div className="img">
                                <img src={pipe1} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12" data-aos='fade-left' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='banner_text'>
                                <h6 className='text-danger mb-4'>OUR PRODUCTS</h6>
                                <h2 className='text-primary mb-4'>SS Pipes & Tubes Manufacturer</h2>
                                <p>Stainless Steel Pipes and Tubes Manufacturers in India. Leading suppliers dealers in Mumbai Chennai Bangalore Ludhiana Delhi Coimbatore Pune Rajkot Ahmedabad Kolkata Hyderabad Gujarat and many more places. Suraj Metal  manufacturing and exporting high quality Stainless steel Pipes and Tubes worldwide. We are India's largest Stainless steel Pipes and Tubes Exporter, exporting to more than 85 countries. We are known as Stainless steel Pipes and Tubes Manufacturers and Exporters due to exporting and manufacturing on a large scale. <br />
                                We at Suraj Metal  manufacture a wide variety of Stainless steel Pipes and Tubes. There is a different types of Stainless steel Pipes and Tubes used for different needs. Our Stainless steel Pipes and Tubes are available in different sizes, grades and shapes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tagline">
                    <div className='tagline_text'>
                        <h1 className='mb-4' data-aos='fade-down' data-aos-offset='200'  data-aos-duration="1000">Every Customer are Precious for Us.</h1>
                        <p className='mb-4' data-aos='fade-up' data-aos-offset='200'  data-aos-duration="1000">Prompt Response, Excellent Quality, Quick Delivery and Customer Satisfaction really characterize Suraj Metal . We likewise, produce and represented considerable authority in Stainless Steel Round Bars, All sorts of Fittings and Flanges.</p>
                        <Link to=''>INQUIRE HERE</Link>
                    </div>
                </div>
                <div className='product container-lg '>
                    <div className="row">
                        <div className="col-3">
                            <ProductCategories />
                        </div>
                        <div className='col-md-9 col-12'>
                            <div className={`pipes_tubes_description ${scrolling && 'scroll'}`}>
                                <h6>Stainless Steel Seamless Pipes and Tubes is manufactured according to Indian as well as international standards such as ASME, AISI, ASTM, ANSI, DIN, BS, IS, JIS, etc.</h6>
                                <p>Suraj Metal  is one of the largest Stainless Steel Pipes and Tubes Manufacturers in India. The pipe is pressure tight circular hollow section that used in piping systems to transport gases or fluids. Tube is a circular structural member and the confusion start from here. In oil and gas industries, tubes are not just used as a structural part but also used in the heat exchanger and fired heater for a process application. We also known as Stainless Steel Pipes and Tubes Manufacturers in India.</p>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={pipe2} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={pipe3} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={pipe4} alt="Image Not Found" />
                                        </div>
                                    </div>
                                </div>
                                <div className='technical_specification'>
                                    <h4 className='mt-4 text-danger'>TECHNICAL SPECIFICATIONS :</h4>
                                    <ul>
                                        <li>Pipes & Tubes Types : Seamless Pipes and Tubes, Welded Pipes and Tubes, Box Pipes and Tubes, High Precision and Heat Exchanger Tubes, Hydraulic and Instrumentation Tubes</li>
                                        <li>Schedule : SCH5, SCH10, SCH20, SCH30, SCH40, STD, SCH80, XS, SCH60, SCH80, SCH120,SCH140, SCH160, XXS</li>
                                        <li>Standard : ASME/ANSI B16.11, MSS-SP-97, MSS-SP-79, JIS B2316, BS 3799</li>
                                        <li>Pipes Size : 1/8″NB to 24″NB & 1/4″OD TO 24″OD AND 6.35mm to 254mm OD Thickness: 0.6mm to 20mm</li>
                                        <li>Tubes Size : 1/2″OD TO 8″OD</li>
                                        <li>Type : Seamless/ erw/ welded/semi welded in round, square, rectangular, coil form, u shape and hydraulic.</li>
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

export default PipesTubes