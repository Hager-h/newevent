import React from 'react'
import "./Footer.css"
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaBehance } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

export default function Footer() {
  return (
    <div className='footer'>
    <div className='container'>
<h6>Copyright © 2023 <span>New</span> Company

</h6>
<ul>
    <li><FaFacebookF/></li>
    <li><AiOutlineTwitter/></li>
    <li><FaBehance/></li>
    <li><AiOutlineGooglePlus/></li>
    <li> <BiLogoLinkedin/>   </li>

</ul>


    </div>
    </div>
  )
}
