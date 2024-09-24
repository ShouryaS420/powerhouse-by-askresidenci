import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";
import qrCodeImage from '../../assets/images/qr-code.png';

export default function Footer() {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 60000); // Update every minute
    
        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer class="footer-section">
            <div class="container">
                <div className="footer-content-container">
                    <h2 class="footer-heading">AskResidenci powerhouse, Never Stop Building</h2>
                    <div class="footer-content">
                        <div class="qr-code">
                            <img src={qrCodeImage} alt="Scan this QR code with your phone to download the app" class="qr-image" />
                            <p>Scan QR code from your phone to download the app</p>
                        </div>
                        <div class="app-links">
                            <h2>Download PowerHouse App Now!</h2>
                            <p>Get access to new features & much more in the app!</p>
                            <Link to="https://play.google.com/store/apps/details?id=zoomcarhostapp" target="_blank" class="download-button google-play">
                                <img src="https://www.zoomcar.com/zap/subscribe/build/07018682025c76b812f5938dd246dcb0.png" alt="Download on the Google Play" />
                            </Link>
                            <Link to="https://apps.apple.com/app/zoomcarhostapp" target="_blank" class="download-button app-store">
                                <img src="https://www.zoomcar.com/zap/subscribe/build/96be483c040ed13df0882463a660047a.png" alt="Download on the App Store" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-links-group">
                <div className="footer-links-group-container">
                    <div className="footer-links">
                        <Link to="/legal/terms-of-service">Terms of services</Link>
                        <Link to="/legal/privacy-policy">Privacy policy</Link>
                        <Link to="/legal/code-of-conduct">Code of conduct</Link>
                    </div>
                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61565846626849">Facebook</a>
                        <a href="https://twitter.com">Twitter</a>
                        <a href="https://instagram.com">Instagram</a>
                    </div>
                </div>
            </div>
            <p className="disclaimer" >
                Disclaimer: AskResidenci PowerHouse is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by Read more
            </p>
            <p className="copyright">
                © {currentYear} AskResidenci PowerHouse managed by magnetic byte internet technologies (OPC) PVT. LTD. All Rights Reserved.
            </p>
        </footer>
    )
}
