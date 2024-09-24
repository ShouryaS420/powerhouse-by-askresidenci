import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ hide }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    if (isSidebarOpen === true) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-left">
                    {/* Move the icon to the right side by using conditional rendering */}
                    <button className="menu-icon" onClick={toggleSidebar}>
                        &#9776; {/* Menu icon */}
                    </button>
                    <Link to="/" >
                        <img src={logo} alt="Logo" className="logo"/>
                    </Link>
                </div>
                <div className="header-right">
                    {/* <button className="header-button" style={{ marginBottom: '0px', }} >FAQ</button>
                    <button className="header-button" style={{ marginBottom: '0px', }} >Sign Up / Log In</button> */}
                    {!hide && <a href="#faqs" onClick={() => setIsSidebarOpen(false)} className={"header-button"} style={{ marginBottom: '0px', }}>FAQ</a> }
                    <Link to="/" className={"header-button"} style={{ marginBottom: '0px', }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="Layer_1"
                            data-name="Layer 1"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="#fff"
                        >
                            <path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z"/>
                        </svg>
                        +91 9529305663
                    </Link>
                </div>
                {isSidebarOpen && (
                    <>
                        <div className="overlay" onClick={toggleSidebar}></div>
                        <div className="sidebar">
                            <button className="close-button" onClick={toggleSidebar}>&times;</button>
                            {/* <button className="header-button" onClick={toggleSidebar}>Sign Up / Log In</button>
                            <button className="header-button" onClick={toggleSidebar}>FAQ</button>
                            <button className="header-button" onClick={toggleSidebar}>Terms of services</button>
                            <button className="header-button" onClick={toggleSidebar}>Privacy policy</button>
                            <button className="header-button" onClick={toggleSidebar}>Code of conduct</button> */}
                            <Link to="/" className={"header-button"} >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    viewBox="0 0 24 24"
                                    width="18"
                                    height="18"
                                    fill="#fff"
                                >
                                    <path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z"/>
                                </svg>
                                +91 9529305663
                            </Link>
                            {!hide && <a href="#faqs" onClick={() => setIsSidebarOpen(false)} className={"header-button"}>FAQ</a> }
                            <NavLink to="/legal/terms-of-service" onClick={toggleSidebar} className={({ isActive }) => isActive ? "header-button active" : "header-button"}>Terms of services</NavLink>
                            <NavLink to="/legal/privacy-policy" onClick={toggleSidebar} className={({ isActive }) => isActive ? "header-button active" : "header-button"}>Privacy policy</NavLink>
                            <NavLink to="/legal/code-of-conduct" onClick={toggleSidebar} className={({ isActive }) => isActive ? "header-button active" : "header-button"}>Code of conduct</NavLink>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
