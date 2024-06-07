import React, { Fragment, useEffect, useState } from 'react'
import '../style/dairyValves.css'
import InquireForm from './reusable_components/InquireForm';
import ProductCategories from './reusable_components/ProductCategories';
import { Link } from 'react-router-dom';
import dv1 from '/images/images/dv1.png'
import dv2 from '/images/images/dv2.png'
import dv3 from '/images/images/dv3.png'
import dv4 from '/images/images/dv4.png'


function DairyValves() {

    useEffect(() => {
        document.title = 'Dairy-Valves';
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
                                <img src={dv1} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12" data-aos='fade-left' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='banner_text'>
                                <h6 className='text-danger mb-4'>OUR PRODUCTS</h6>
                                <h2 className='text-primary mb-4'>We Are The Manufacturer And Distributor Of The SS Dairy Valve</h2>
                                <p>We are producing the entire range of dairy valve in different diameters, specifications, types, form, sizes, shape, wall thickness, standards, and length. We are a customer oriented supplier, so, Stainless steel dairy valve are provided to our valuable customers as per the specifications needed by them. We are manufacturing dairy valve using premium quality raw material.</p>
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
                            <div className={`bars_rods_description ${scrolling && 'scroll'}`}>
                                <h6>STAINLESS STEEL DAIRY VALVES SUPPLIER, UNS S30400 DAIRY VALVES, STAINLESS STEEL 1.4306 / 1.4307 DAIRY VALVES, SS 304 DAIRY VALVES SUPPLIERS, STAINLESS STEEL 304H DAIRY VALVES, SS 310 DAIRY VALVES, 316 DAIRY VALVES, 316L DAIRY VALVES, STAINLESS STEEL 317 INDUSTRIAL DAIRY VALVES, STAINLESS STEEL DAIRY VALVES LEADING MANUFACTURERS.</h6>
                                <p>We supply dairy valves with perfect dimensional accuracy, and very sturdy construction. Suraj Metal  manufactures premium quality Stainless steel dairy valve using the modernized types of equipment and latest tools. The dairy valve is a quarter turn manual valve that uses a tapered dairy to permit or prevent straight through flow through the body. The dairy has a straight through the opening that is the same as the area of the inlet and outlet ports of the valve. The alloy has excellent good resistance to oxidation and carburization corrosion at elevated temperatures. Stainless steel dairy valve is particularly used in the petrochemical industry, chemical industry, oil & gas industry, paper & pulp industry, power plant industry, food processing industry. The product contents of nickel in the alloy that helps in the resistance of the chloride stress corrosion. Some properties of this Stainless steel dairy valve are higher hardness, strength, ductility, good durability, good weldability, surface finish, long-lasting extended life, and so on.
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={dv2} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={dv3} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="img">
                                            <img src={dv4} alt="Image Not Found" />
                                        </div>
                                    </div>
                                </div>
                                <div className='technical_specification'>
                                    <h4 className='mt-4 text-danger'>TECHNICAL SPECIFICATIONS :</h4>
                                    <ul>
                                        <li>Temperature Rating : PTFE 450F,(232C)/ Grafoil 700 F(371C)</li>
                                        <li>sizes for Three Way Dairy Plug Valve : from 1″ to 4″ (25mm to 100 mm)</li>
                                        <li>sizes for Two Way Dairy Plug Valve Without Union: from 1″ to 4″ (25mm to 100 mm)</li>
                                        <li>sizes for Butterfly Valve : 1″ to 4' & DN 10 to DN 100</li>
                                        <li>size for Diaphragm Valve : 1/2″ to 4″.</li>
                                        <li>size for Micro Valve : from 1″ to 4″ (25mm to 100 mm)</li>
                                        <li>Working Pressure : Up to 6000 PSIG, valves are also available that can handle higher pressure</li>
                                        <li>Pressure rating : 150#, 300#, 600#, 800#, 1500#</li>
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

export default DairyValves