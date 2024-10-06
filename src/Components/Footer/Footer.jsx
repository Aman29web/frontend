import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pintrest_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
       <ul className='footer-link'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
       </ul>

       <div className="footer-social-icon">
        <div className="footer-icons-container">
            <a href="https://www.instagram.com/accounts/login/"> <img src={instagram_icon} alt="" /></a>
           
        </div>
        <div className="footer-icons-container">
            <a href="https://in.pinterest.com/login/"> <img src={pintrest_icon} alt="" /></a>
           
        </div>
        <div className="footer-icons-container">
            <a href="https://web.whatsapp.com/"> <img src={whatsapp_icon} alt="" /></a>
           
        </div>
       </div>

       <div className="footer-copyright">
        <hr />
        <p>Copyright #2024 -All Right Reserved</p>
       </div>

    </div>
  )
}

export default Footer
