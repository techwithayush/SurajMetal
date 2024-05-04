import React, { Fragment, useEffect } from 'react'
import '../style/application.css'
import appli_image from '../../public/images/application/appli_image.png'
import image1 from '../../public/images/application/image1.png'
import image2 from '../../public/images/application/image2.png'
import image3 from '../../public/images/application/image3.png'
import image4 from '../../public/images/application/image4.png'
import image5 from '../../public/images/application/image5.png'
import image6 from '../../public/images/application/image6.png'
import image7 from '../../public/images/application/image7.png'
import image8 from '../../public/images/application/image8.png'
import { Link } from 'react-router-dom'

function Application() {

    useEffect(() => {
        document.title = 'Application'
    }, [])

    const imagesText = [
        [image1, 'Industrial Automation'],
        [image2, 'Pharmaceutical Industry'],
        [image3, 'Sugar & Paper Mills'],
        [image4, 'Fertilizer Industries'],
        [image5, 'Cement Plants'],
        [image6, 'Oil & Gas Industries'],
        [image7, 'Water Filtration Plants'],
        [image8, 'Civil Construction']
    ]



    return (
        <Fragment>
            <div className='application'>
                <div className='banner'>
                    <div className='img'>
                        <img src={appli_image} alt="Image Not Found" />
                        <div className='text'>
                            <h2>Applications</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Application</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='application_image text-center container-lg'>
                    <h5 className='text-danger'>APPLICATION</h5>
                    <h1 className='mb-4'>Applications used in the next industry</h1>
                    <div className="row gy-3">
                        {
                            imagesText.map((val) => <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={val}>
                                <div className='img'>
                                    <img src={val[0]} alt="Image Not Found" />
                                    <h5>{val[1]}</h5>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Application