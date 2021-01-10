import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <footer className="footer page-footer font-small stylish-color-dark pt-4">
            <ul className="list-unstyled list-inline text-center py-2">
                <li className="list-inline-item">
                   <h5 className="mb-1"> Visit us for free </h5>
                </li>
                <li className="list-inline-item">
                   <a href="https://www.spacex.com" className="btn btn-light btn-rounded"> Join Now! </a>
                </li>
            </ul>
          
            <hr/>
  
            <div className="icons">
                <SocialIcon target="_blank" url="https://www.facebook.com/spacenewsx" className="icon"/>
                <SocialIcon target="_blank" url="https://www.linkedin.com/company/spacex" className="icon"/>
                <SocialIcon target="_blank" url="https://www.youtube.com/user/spacexchannel" className="icon"/>
                <SocialIcon target="_blank" url="https://twitter.com/SpaceX" className="icon"/>
            </div>
    
            <hr/>
  
            <div className="footer-copyright text-center py-3"> © 2020 Copyright:
                <a href="https://www.spacex.com/" target="_blank" rel="noreferrer"> spacex.com </a>
            </div>
        </footer>
    )
}

export default Footer;