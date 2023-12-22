import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="newsletter">
         <h3>SIGN UP FOR OUR NEWSLETTER</h3>
            <form className='newsletter-form'>
                <input type="email" />
                <button className='btn'> SUBSCRIBE</button>
            </form>
      </div>
     <div className="footer-bottom">
        <div className="footer-links">
                <div className="footer-link-group">
                    <div className="link-items-title"><h4>CUSTOMER SERVICE</h4></div>
                    <div className="link-items">
                        <ul>
                            <li>Instructions</li>
                            <li>FAQ</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-link-group">
                    <div className="link-items-title"><h4>COMPANY</h4></div>
                    <div className="link-items">
                        <ul>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Accessibility Statement</li>
                        </ul>
                    </div>
                </div>
        
        </div>

        <div className="rights"><h5>CERAMIX 2023. All Rights Reserved.</h5></div>
     </div>
     

    </div>
  )
}

export default Footer