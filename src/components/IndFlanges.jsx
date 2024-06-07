import React, { Fragment, useEffect, useState } from 'react'
import '../style/indFlanges.css'
import InquireForm from './reusable_components/InquireForm'
import ProductCategories from './reusable_components/ProductCategories'
import ind_flange1 from '/images/images/ind_flange1.png'
import ind_flange2 from '/images/images/ind_flange2.png'
import ind_flange3 from '/images/images/ind_flange3.png'
import ind_flange4 from '/images/images/ind_flange4.png'
import { Link } from 'react-router-dom'

function IndFlanges() {


  useEffect(() => {
    document.title = 'Industrial-Flanges'
  },[])

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const sheetsDescription = document.querySelector('.ind_flange_description')
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
      <div className="ind_falnges">
        <div className="banner container-lg">
          <div className="row">
            <div className="col-md-6 col-12" data-aos='fade-right' data-aos-offset='200' data-aos-duration="1000">
              <div className="img">
                <img src={ind_flange1} alt="Image Not Found" />
              </div>
            </div>
            <div className="col-md-6 col-12" data-aos='fade-left' data-aos-offset='200' data-aos-duration="1000">
              <div className='banner_text'>
                <h6 className='text-danger mb-4'>OUR PRODUCTS</h6>
                <h2 className='text-primary mb-4'>Manufacturers Of All Kinds Of Industrial Valves</h2>
                <p>Suraj Metal  a leading valve manufacturing company established 10+ years back has carved a niche in the field of manufacture of Industrial Valves. Recently it has expanded its capacity and has entered into the bigger segment with Suraj brand Industrial Valves to cater in a big way to Oil & Natural Gas Industry, Petroleum & Petrochemical, Fertilizer, Chemical and Process Industry. The organization manufactures Gate, Globe, Check, Ball, Butterfly, Wafer Type Check Valve, Strainers etc. in all size and class with any material of construction as per customer requirement adhering to National and International Standards such as API 600, API 602, BS 1873, BS 1868, BS 5351, BS 5352 etc.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tagline">
          <div className='tagline_text'>
            <h1 className='mb-4' data-aos='fade-down' data-aos-offset='200' data-aos-duration="1000">Every Customer are Precious for Us.</h1>
            <p className='mb-4' data-aos='fade-up' data-aos-offset='200' data-aos-duration="1000">Prompt Response, Excellent Quality, Quick Delivery and Customer Satisfaction really characterize Suraj Metal . We likewise, produce and represented considerable authority in Stainless Steel Round Bars, All sorts of Fittings and Flanges.</p>
            <Link to=''>INQUIRE HERE</Link>
          </div>
        </div>
        <div className='product container-lg '>
          <div className="row">
            <div className="col-3">
              <ProductCategories />
            </div>
            <div className='col-md-9 col-12'>
              <div className={`ind_flange_description ${scrolling && 'scroll'}`}>
                <h6>We at Suraj Metal  are Manufacturer & Supplier of Industrial Valves, Precision Machine components, Butterfly Valves, Pulp Valves, Wafer Check Valves, Knife Gate Valves, Fabricated valves etc.</h6>
                <p>We are focused on accomplishing complete consumer loyalty through Design, Development, Manufacturing, and supply of reliable quality Industrial Valves with the point of zero rate dismissal while remaining financially savvy and serious. This will be accomplished by collaboration and ceaseless improvement in all the regions of activity. We also provide services like Valve Reconditioning, Valves Repairing Services, repair and servicing of all types of machinery and Agriculture goods</p>
                <div className="row">
                  <div className="col-4">
                    <div className="img">
                      <img src={ind_flange2} alt="Image Not Found" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="img">
                      <img src={ind_flange3} alt="Image Not Found" />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="img">
                      <img src={ind_flange4} alt="Image Not Found" />
                    </div>
                  </div>
                </div>
                <div className='technical_specification'>
                  <h4 className='mt-4 text-danger'>TECHNICAL SPECIFICATIONS :</h4>
                  <ul>
                    <li>Design : ASME B16.34 / BS 5351 / API 6D /BS 17292</li>
                    <li>Face to Face : ASME B16.10 /API 6D</li>
                    <li>End to End: BW / Flanged / RTJ</li>
                    <li>Pressure -Temperature Rating : ASTM B 16.34</li>
                    <li>Screwed End Dimension : ASTM B 1.20.1</li>
                    <li>BW End: ASME B16.25</li>
                    <li>Test: API 598 / API 6D / BS 6755 / 12266</li>
                    <li>Fire Safe: Design Fire Safe API 607 / 6FA</li>
                    <li>Special : NACE MR-01-75 / 0103</li>
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

export default IndFlanges