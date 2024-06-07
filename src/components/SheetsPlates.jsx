import React, { Fragment, useEffect, useState } from 'react'
import '../style/sheetsplates.css'
import { Link } from 'react-router-dom'
import sheet1 from '/images/images/sheet1.png'
import sheet2 from '/images/images/sheet2.png'
import sheet3 from '/images/images/sheet3.png'
import ProductCategories from './reusable_components/ProductCategories'
import InquireForm from './reusable_components/InquireForm'

function SheetsPlates() {


    useEffect(()=>{
        document.title = 'Sheets-Plates';
    },[])

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const sheetsDescription = document.querySelector('.sheets_description')
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
            <div className="sheets_plates">
                <div className="banner container-lg">
                    <div className="row">
                        <div className="col-md-6 col-12" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="2000">
                            <div className="img">
                                <img src={sheet1} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12" data-aos='fade-left' data-aos-offset='200'  data-aos-duration="2000">
                            <div className='banner_text'>
                                <h6 className='text-danger mb-4'>OUR PRODUCTS</h6>
                                <h2 className='text-primary mb-4'>SS Sheets, Plates & Coils Manufacturer</h2>
                                <p>Suraj Metal  is driving Sheets Plates Coils makers in Ahmedabad India. Leading Provider of Polished Sheets & Plates, Chequered Plates, Perforated Sheets Supplier, Hot Rolled Sheet & Plates, Galvanized Sheets & Plates in India. We give a wide range of Sheets, Plates, Coils accessible in various evaluations. <br />
                                    Our top-notch scope of Sheets, Plates, Coils are only intended for steel processing plants, petrochemical industry, fire insurance frameworks, substance ventures, transporting/shipment businesses, and so forth.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tagline">
                    <div className='tagline_text'>
                        <h1 className='mb-4 ' data-aos='fade-down' data-aos-offset='200'  data-aos-duration="1000">Every Customer are Precious for Us.</h1>
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
                            <div className={`sheets_description ${scrolling && 'scroll'}`}>
                                <h6>STAINLESS STEEL SHEETS, SS PLATE, STAINLESS STEEL 304L COLD ROLLED PLATE, STAINLESS STEEL COILS, 304 SS HR PLATES, SS 304 SHEETS, STAINLESS STEEL 316 PLATE MANUFACTURER & STOCKIST</h6>
                                <p>Suraj Metal  is a leading Stainless Steel Sheet, Plates, and Coil Manufacturer in India. Sheets, Plates, and Coil is a tough austenitic stainless steel grade that's used in a wide range of applications. Sheets, Plates, and Coils are available in a variety of sizes to meet EN, DIN, JIS, ASTM, BS, ASME, and AISI requirements. We are a well-known Sheets, Plates, Coil Manufacturer, Supplier, Dealer, Stockholder, Importer, and Exporter in India. Sheets, Plates, and Coils are one of our most famous products. At our manufacturing facilities, we fabricate all ASME SA240 Stainless Steel Coils using the latest technology.</p>
                                <div className="row">
                                    <div className="col-4" >
                                        <div className="img">
                                            <img src={sheet1} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4" >
                                        <div className="img">
                                            <img src={sheet2} alt="Image Not Found" />
                                        </div>
                                    </div>
                                    <div className="col-4" >
                                        <div className="img">
                                            <img src={sheet3} alt="Image Not Found" />
                                        </div>
                                    </div>
                                </div>
                                <div className='technical_specification' data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                                    <h4 className='mt-4 text-danger'>TECHNICAL SPECIFICATIONS :</h4>
                                    <ul>
                                        <li>Dimensions : ASTM, ASME and API</li>
                                        <li>Specifications : ASTM A240 / ASME SA240</li>
                                        <li>Size : 1000 mm x 2000mm, 1220mm x 2440mm, 4' x 8', 1250mm x 2500mm, 1500mm x 3000mm to 6000mm, 2000mm x 4000mm to 6000mm</li>
                                        <li>Range : 5mm To 150mm</li>
                                        <li>Thickness : 4.0mm - 100mm</li>
                                        <li>Specialize : Shim Sheet, Perforated Sheet, B. Q. Profile.</li>
                                        <li>Condition : Cold Drawn & Polished Cold Drawn, Centreless Ground & Polished</li>
                                        <li>Hardness : Soft, Hard, Half Hard, Quarter Hard, Spring Hard etc.</li>
                                        <li>Form : Coils, Foils, Rolls, Plain Sheet, Shim Sheet, Perforated Sheet, Chequered Plate, Strip, Flats, Blank (Circle), Ring (Flange)</li>
                                        <li>Finish : Hot rolled plate (HR), Cold rolled sheet (CR), 2B, 2D, BA NO(8), SATIN (Met with Plastic Coated)</li>
                                        <li>Grades : TP 304, 304L, 304H, 309S, 309H, 310S, 310H, 316, 316TI, 316H, 316L, 316LN, 317, 317L, 321, 321H, 347, 347H, 904L</li>
                                    </ul>
                                </div>
                                <div className='uses_application' >
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

export default SheetsPlates