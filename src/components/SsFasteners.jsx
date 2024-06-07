import React, { Fragment, useEffect, useState } from 'react'
import '../style/ssFasteners.css'
import { Link } from 'react-router-dom'
import ProductCategories from './reusable_components/ProductCategories'
import InquireForm from './reusable_components/InquireForm'
import ssfas1 from '/images/images/ssfas1.png'
import ssfas2 from '/images/images/ssfas2.png'
import ssfas3 from '/images/images/ssfas3.png'
import ssfas4 from '/images/images/ssfas4.png'

function SsFasteners() {

  useEffect(() => {
    document.title = 'SS-Fasteners';
  },[])

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const sheetsDescription = document.querySelector('.ss_fasteners_description')
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
      <div className="ss_fasteners">
        <div className="banner container-lg">
          <div className="row">
            <div className="col-md-6 col-12" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
              <div className="img">
                <img src={ssfas1} alt="Image Not Found" />
              </div>
            </div>
            <div className="col-md-6 col-12" data-aos='fade-left' data-aos-offset='200'  data-aos-duration="1000">
              <div className='banner_text'>
                <h6 className='text-danger mb-4'>OUR PRODUCTS</h6>
                <h2 className='text-primary mb-4'>Stainless Steel Fasteners Manufacturers in India</h2>
                <p>Suraj Metal  is a leading Stainless Steel Fasteners Manufacturer in India, producing a wide range of stainless steel fasteners in various sizes, grades, and scales. We have all sizes and grades in stock. <br />
                  We are able to deliver a wide range of Stainless Steel Fasteners that are used in heat exchangers, instrumentation, and other applications due to our extensive industry expertise in manufacturing, sourcing, and exporting. These are also used in aggressive environments for sensitive applications.</p>
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
              <div className={`ss_fasteners_description ${scrolling && 'scroll'}`}>
                <h6>We are manufacturer, suppliers and have a ready stock of a large range of stainless steel fasteners Grades AISI 304, AISI 316, AISI 202, AISI 310, DUPLEX, SUPER DUPLEX on request. We can offer special parts made to drawing in a wide range of materials and finishes.</h6>
                <p>We are able to deliver a wide range of Stainless Steel Fasteners that are used in heat exchangers, instrumentation, and other applications due to our extensive industry expertise in manufacturing, sourcing, and exporting. These are also used in aggressive environments for sensitive applications. We are able to deliver a wide range of Stainless Steel Fasteners that are used in heat exchangers, instrumentation, and other applications due to our extensive industry expertise in manufacturing, sourcing, and exporting. These are also used in aggressive environments for sensitive applications.</p>
                <div className="row">
                  <div className="col-4">
                    <div className="img">
                      <img src={ssfas2} alt="Image Not Found" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="img">
                      <img src={ssfas3} alt="Image Not Found" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="img">
                      <img src={ssfas4} alt="Image Not Found" />
                    </div>
                  </div>
                </div>
                <div className='technical_specification'>
                  <h4 className='mt-4 text-danger'>TECHNICAL SPECIFICATIONS :</h4>
                  <ul>
                    <li>Fasteners Specifications : ASTM A193 & ASME SA193 for bolts and ASTM A194 and ASME SA194</li>
                    <li>Standard of Stainless Steel Fasteners : IS, ANSI, ASTM DIN, ISO, JIS, GB, ASME, BS, UNI and all International Standards</li>
                    <li>Stainless Steel Fasteners/ Bolts Size : M10, M4, M16, M36 M2.5, M6, M30, M12, M8, M14, M2, M3, M20, M24, M5 to M160</li>
                    <li>Length of Stainless Steel Fasteners : 3 mm to 200 mm</li>
                    <li>Stainless Steel Studs, Bolts Threads : BSF, UNF METRIC, UNC, BSW or as required</li>
                    <li>Form of Stainless Steel Fasteners : Square, Hex, Threading as per Gauge, Round Etc.</li>
                    <li>Head drive : Phillips, Slotted, Phillips/Slot, Six-Lobe etc</li>
                    <li>Test Certificate of Stainless Steel bolting : as per EN 10204 / 3.1 Manufacturer Test Certificate</li>
                    <li>Finishing of Stainless Steel Fasteners : Zinc white, (yellow, black, blue), black oxide, Dacroment, Geometry, plated zinc-nickel, anodizing, nickel plated, Stainless steel Passivated Self-Colour, Bright Zinc Plated (BZP), Hot Dip Galvanised (HDG), Sherardized, Stainless Steel, some special one like DACROMET and Mechanically Applied coating</li>
                    <li>Process of Production : M2-M24: Cold Froging, hot forging M24-M100, machining and CNC for Customized connecting element</li>
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

export default SsFasteners