import React, { useEffect, useState } from 'react'
import '../../style/reusable_components_css/scroll.css'
import { FaArrowUp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom'

function Scroll() {

    const [scrollClass, setScrollClass] = useState(false);

    function scrollFunction() {
        if (window.scrollY > 40) {
            setScrollClass(true);
        }
        else {
            setScrollClass(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => {
            window.removeEventListener('scroll', scrollFunction)
        }
    }, [])

    const handleScrollClick = () => {
        return window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <div className={`scroll_top ${scrollClass && 'scrollvisible'}`} id='scroll_top' onClick={handleScrollClick}>
                <FaArrowUp className='scroll_icon' />
            </div>
            <div className='whatapp_btn'>
                <Link to='https://api.whatsapp.com/send/?phone=9574445869&text&type=phone_number&app_absent=0'><IoLogoWhatsapp className='whp_icon' /></Link>
            </div>
        </div>
    )
}

export default Scroll