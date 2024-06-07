import React, { Fragment, useEffect } from 'react'
import '../style/goals.css'
import { Link } from 'react-router-dom'
import banner from '../../public/images/goalsImages/banner.png'
import image1 from '../../public/images/goalsImages/image1.png'
import image2 from '../../public/images/goalsImages/image2.png'
import image3 from '../../public/images/goalsImages/image3.png'

function Goals() {

    useEffect(() => {
        document.title = 'Our-Goals'
    }, [])

    return (
        <Fragment>
            <div className='ourGoals'>
                <div className='banner' data-aos='fade-right' data-aos-offset='200' data-aos-duration="1000">
                    <div className='img'>
                        <img src={banner} alt="Image Not Found" />
                        <div className='text'>
                            <h2 data-aos='fade-down' data-aos-offset='200' data-aos-duration="1000">Our Aims & Goals</h2>
                            <nav aria-label="breadcrumb" data-aos='fade-up' data-aos-offset='200' data-aos-duration="1000">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Our Aims $ Goals</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='container-lg ourGoals_image'>
                    <div className="row gy-3">
                        <div className="col-md-6 col-12" data-aos='fade-right' data-aos-offset='200' data-aos-duration="1500">
                            <div className='img'>
                                <img src={image1} alt="Image Not Found." />
                            </div>
                        </div>
                        <div className="col-md-6 col-12" data-aos='fade-left' data-aos-offset='200' data-aos-duration="1500">
                            <div className='image_text'>
                                <h6 className='text-danger'>OUR MISSION</h6>
                                <h2 className='text-primary'>Suraj Metal Mission</h2>
                                <p>Our goal is to provide top-notch goods, positively impact every guest we have the pleasure of working with, and leave a long-lasting impression on their minds and creativity. The team, which is largely talented and active, works tirelessly to improve the quality of our products and consistently produces goods that are superior to the swish. We want to provide services that are completely exceptional.</p>
                            </div>
                        </div>

                    </div>
                    <div className="row gy-3">
                        <div className="col-md-6 col-12 order-md-1 order-2" data-aos='fade-left' data-aos-offset='200' data-aos-duration="1500">
                            <div className='image_text'>
                                <h6 className='text-danger'>OUR VISION</h6>
                                <h2 className='text-primary'>Suraj Metal Vision</h2>
                                <p>Our goal is to become the region's design and invention authority. By giving each of our experts responsibility for planning and decision-making, this goal will be carried out. Our goal is to continuously increase our production capabilities and generation limits with the goal of meeting the rapidly growing global demand and maintaining our leadership position in the brand industry.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 order-md-2 order-1" data-aos='fade-right' data-aos-offset='200' data-aos-duration="1500">
                            <div className='img'>
                                <img src={image2} alt="Image Not Found." />
                            </div>
                        </div>
                    </div>
                    <div className="row gy-3">
                        <div className="col-md-6 col-12 order-md-1 order-1" data-aos='fade-right' data-aos-offset='200' data-aos-duration="1500">
                            <div className='img'>
                                <img src={image3} alt="Image Not Found." />
                            </div>
                        </div>
                        <div className="col-md-6 col-12 order-md-2 order-2" data-aos='fade-left' data-aos-offset='200' data-aos-duration="1500">
                            <div className='image_text'>
                                <h6 className='text-danger'>OUR AIMS</h6>
                                <h2 className='text-primary'>Suraj Metal Mission</h2>
                                <p>We are firm believers that top-notch goods should be accompanied with top-notch customer relationships that foster trust. The team of qualified engineers at Torrid Metal & Engineering Co. is committed and experienced. Professionalism in how one approaches clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Goals