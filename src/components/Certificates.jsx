import React, { Fragment, useEffect } from 'react'
import '../style/certificate.css'
import { Link } from 'react-router-dom'
import banner from '../../public/images/certificate/banner.png'
import image1 from '../../public/images/certificate/image1.png'
import image3 from '../../public/images/certificate/image3.png'

function Certificates() {

    useEffect(()=>{
        document.title = 'Certificates'
    },[])

    return (
        <Fragment>
            <div className='certificates'>
                <div className='banner' data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                    <div className='img'>
                        <img src={banner} alt="Image Not Found" />
                        <div className='text'>
                            <h2 data-aos='fade-down' data-aos-offset='200'  data-aos-duration="1000">Certificates</h2>
                            <nav aria-label="breadcrumb" data-aos='fade-up' data-aos-offset='200'  data-aos-duration="1000">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Certificates</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <h1 className='text-center text-primary container-lg' data-aos='fade-up' data-aos-offset='200'  data-aos-duration="1000">We Are Leading Company In This Field, We Have Achieve Award & Certificates Of Our Company & Products.</h1>
                <div className='certificate_img container-lg'>
                    <div className="row">
                        <div className="col-md-6 col-12" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                            <div className="img">
                                <img src={image1} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12" data-aos='fade-left' data-aos-offset='200'  data-aos-duration="1000">
                            <div className='certificates_text'>
                                <h6 className='text-danger'>CERTIFICATES</h6>
                                <h2 className='text-primary'>Awards & Achievements</h2>
                                <p>We have managed a long list of successful works during this time, despite our relatively short working history as a group, based on the rich functional, creative, and technological skills of our engineers, as well as our strong adherence and commitment to customer satisfaction.  We hold ourselves to tremendously high standards. All Ulbrich Divisions have a corporate mandate to meet international quality standards, as well as the specific quality standards of the regions and industries they serve. Additionally, divisions must meet key standards of key multinational manufacturers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cartificate_all'>
                    <div className="row container">
                        <div className="col-md-3 col-6" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                            <div className="img">
                                <img src={image3} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-md-3 col-6" data-aos='fade-down' data-aos-offset='200'  data-aos-duration="1000">
                            <div className="img">
                                <img src={image3} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-md-3 col-6" data-aos='fade-up' data-aos-offset='200'  data-aos-duration="1000">
                            <div className="img">
                                <img src={image3} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-md-3 col-6" data-aos='fade-left' data-aos-offset='200'  data-aos-duration="1000">
                            <div className="img">
                                <img src={image3} alt="Image Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Certificates