import React from 'react';

import './Footer.css';

//NEED ADD handleSubmit function to post the email address to database subscribeEmail collection

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
                            <li>                            
                            <a href="/termsconditions"> Terms & Conditions</a>
                            </li>
                            <li>Privacy Policy</li>
                            <li>Accessibility Statement</li>
                        </ul>
                    </div>
                </div>
        
        </div>

        <div className="rights"><p>CERAMIX 2023. All Rights Reserved.</p></div>
     </div>
     

    </div>
  )
}

export default Footer