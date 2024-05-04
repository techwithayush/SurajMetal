import React, { Fragment, useEffect, useState } from 'react'
import '../../style/reusable_components_css/productCategories.css'

function ProductCategories() {

    
    return (
        <Fragment>
            <div className="reusable_product" data-aos='fade-right' data-aos-offset='200'  data-aos-duration="1000">
                <h4 className='h4'>Product Categories</h4>
                <div className='product_link'>
                    <NavLink className='link' exact="true" to="/sheets-plates-coils">SHEETS, PLATES & COILS</NavLink>
                    <NavLink className='link' exact="true" to="/pipes-tubes">PIPES AND TUBES</NavLink>
                    <NavLink className='link' exact="true" to="/industrial-valves">INDUSTRIAL VALVES</NavLink>
                    <NavLink className='link' exact="true" to='/industrial-flanges'>INDUSTRIAL FLANGES</NavLink>
                    {/* <NavLink className='link' to="">INDUSTRIAL FITTINGS</NavLink> */}
                    <NavLink className='link' exact="true" to="/ss-fasteners">SS FASTENERS</NavLink>
                    <NavLink className='link' exact="true" to="/dairy-valves">DAIRY VALVES</NavLink>
                    <NavLink className='link' exact="true" to="/angle-channel">ANGLE, CHANNEL & FLATS</NavLink>
                    <NavLink className='link' exact="true" to="/bars-wires-rods">BARS, WIRES & RODS</NavLink>
                    {/* <a className='link' href="#">SS CIRCLES, PATTI & PATTA</a>
                    <a className='link' href="#">PVD DECORATIVE SHEETS</a>
                    <a className='link' href="#">SS HANDRAIL PIPES</a> */}
                </div>
            </div>
        </Fragment>
    )
}
import { NavLink } from 'react-router-dom'

export default ProductCategories
