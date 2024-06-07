import React, { Fragment, useEffect, useRef } from 'react'
import '../style/contact.css'
import { MdEmail, MdAddCall } from "react-icons/md";
import { FaMapMarked } from "react-icons/fa";
import emailjs from '@emailjs/browser'

function Contact() {

  const form = useRef();

  useEffect(() => {
    document.title = 'Contact-Us'
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_v11grzq', 'template_z7uamif', form.current, {
      publicKey: 'IYMs49anrOo3_wKcb'
    }).then(() => {
      console.log("Success");
    }, (error) => {
      console.log('Failed', error.text)
    });
  };

  return (
    <Fragment>
      <div className='contact'>
        <div className="row">
          <div className="col-lg-6 col-12">
            <h6>CONTACT US</h6>
            <h2>Get In Touch</h2>
            <div className='group'>
              <MdEmail className='con_icon' />
              <div>
                <h5>Email Address</h5>
                <h6>info@Surajmetal.com</h6>
                <h6>Surajmetal@gmail.com</h6>
              </div>
            </div>
            <div className='group'>
              <MdAddCall className='con_icon' />
              <div>
                <h5>Phone Number</h5>
                <h6>+91-95744 45869</h6>
              </div>
            </div>
            <div className='group'>
              <FaMapMarked className='con_icon' />
              <div className='h6'>
                <h5>Office address</h5>
                <p>7+8/3 Khambhatwala Estate,
                  Nr.Shraine Estate, Opp. Jalaram
                  Estate,Nr. Kewal Kanta Char Rasta,
                  Rakhiyal, Ahmedabad,Gujarat.</p>
              </div>
            </div>
          </div>
          <div className='contact_form col-lg-6 col-12'>
            <h2>INQUIRY</h2>
            <form action="" ref={form} onSubmit={handleSubmit}>
              <input type="text" name="name" id="name" placeholder='Name' />
              <input type="email" name="email" id="email" placeholder='Email' />
              <input type="text" name="company_name" id="company_name" placeholder='Company Name' />
              <input type="text" name="contact_details" id="contact_details" placeholder='Contact Details' />
              <textarea name="message" id="message" rows="5" placeholder='Message' />
              <button type='submit'>SUBMIT MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact