import React from 'react'
import '../styles/footer.css'

import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <div className='container footer'>
      <h1>Induwa Arts</h1>
      <div className="footer-social-links">
        <a href="#" target='_blank'><IoLogoFacebook/></a>
        <a href="#" target='_blank'><IoLogoInstagram/></a>
        <a href="#" target='_blank'><IoLogoWhatsapp/></a>
      </div>
    </div>
  )
}

export default Footer