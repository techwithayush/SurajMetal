import React, { Fragment, useEffect, useState } from 'react'
import '../style/barsRods.css'
import { Link } from 'react-router-dom'
import ProductCategories from './reusable_components/ProductCategories'
import InquireForm from './reusable_components/InquireForm'
import bar1 from '/images/images/bars1.png'
import bar2 from '/images/images/bars2.png'
import bar3 from '/images/images/bars3.png'
import bar4 from '/images/images/bars4.png'

function BarsRods() {

    useEffect(() => {
        document.title = 'Bars and Rods'
      },[])

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
            <div className="bars_rods">
                <div className="banner container-lg">
                    <div className="row">
                        <div className="col-md-6 col-12" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                            <div className="img">
                                <img src={bar1} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12" data-aos='fade-left' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='banner_text'>
                                <h6 className='text-danger mb-4'>OUR PRODUCTS</h6>
                                <h2 className='text-primary mb-4'>Suraj Metal Corporation is well-known Round Bars, Rods, Wire Supplier in India.</h2>
                                <p>Suraj Metal Corporation a leading valve manWe manufacture Round Bars, Rods, Wire for end-user and stockist all over the world. we can also offer Round Bars in Stainless Steel 310/310S and Incoloy 800. On basis of skilled manpower and vast years of experience, Korus Steel has become a well-recognized name among customers worldwide. Product high strength and durability have created Suraj Metal Corporation leading businessperson, manufacturers, and suppliers of Rods & Wire in India. As a leading 310 Stainless Steel Wire supplier, we produce the Wire as per client requirements in different standards and dimensions.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tagline">
                    <div className='tagline_text'>
                        <h1 className='mb-4' data-aos='fade-down' data-aos-offset='200'  data-aos-duration="1000">Every Customer are Precious for Us.</h1>
                        <p className='mb-4' data-aos='fade-up' data-aos-offset='200'  data-aos-duration="1000">Prompt Response, Excellent Quality, Quick Delivery and Customer Satisfaction really characterize Suraj Metal Corporation. We likewise, produce and represented considerable authority in Stainless Steel Round Bars, All sorts of Fittings and Flanges.</p>
                        <Link to=''>INQUIRE HERE</Link>
                    </div>
                </div>
                <div className='product container-lg '>
                    <div className="row">
                        <div className="col-3">
                            <ProductCategories />
                        </div>
                        <div className='col-md-9 col-12'>
                            <div className={`bars_rods_description ${scrolling && 'scroll'}`}>
                                <h6>Stainless Steel 310 Round Bars Manufacturer, AMS 5766 Incoloy Wire, Stainless Steel 310 Rods / Bars Exporter, Stainless Steel 310 Wire, Incoloy 800 UNS N08800 Bar, Incoloy DIN 1.4876 Hex Bars Supplier, Stainless Steel UNS S31000 Wire Dealer, Incoloy 800 Hot Rolled Round Bar, Stainless Steel 310 Rods / Bars Exporter in Ahmedabad, India.</h6>
                                <p>Suraj Metal Corporation is one of the biggest stockholders of Round Bars, Rods, Wire in Ahmedabad, India. ASTM A276 Stainless Steel Round Bar is one of the most versatile and commonly used stainless steel grades today. Most elevated temperature materials are optimized by means of regard to corrosion resistance and strength at high, the resistance to low-temperature wet corrosion of these Incoloy 800 Round Bars. We also customize these industrial 310 Stainless Steel Round Bars, Rods, Wire as per the requirements of the clients or as per the drawings. Korus Steel is renowned for providing the best Round Bars, Rods, Wire using high material.</p>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={bar2} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={bar3} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={bar4} alt="Image Not Found" />
                                        </div>
                                    </div>
                                </div>
                                <div className='technical_specification'>
                                    <h4 className='mt-4 text-danger'>TECHNICAL SPECIFICATIONS :</h4>
                                    <ul>
                                        <li>Size : 1 MM To 500MM</li>
                                        <li>Rod Size : 3 mm to 500 mm</li>
                                        <li>Wire Size : 0.1 mm to 10 mm</li>
                                        <li>Length : 100MM To 6000 MM Length</li>
                                        <li>Type : Black, Polish, Export</li>
                                        <li>Form : Round Bar, Square Bar, Rectangular Bar, Triangular, Oval Bar, Wire, Filler Rod.</li>
                                        <li>Inspection, Test Reports : Mill Test Certificates, EN 10204 3.1/3.2, Chemical Reports, Mechanical Reports, PMI Test Reports, Visual Inspection Reports, Third Party Inspection Reports, NABL Approved Lab Reports, Non-Destructive Test Reports</li>
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

export default BarsRods