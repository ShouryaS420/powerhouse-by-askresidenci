import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer.js";

export default function Policies() {
    
    let location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <>
            <Header hide={true} />

            <div className="main" style={{ marginTop: '62px', }} >
                <div className="policy-tab-view">
                    <div
                        style={{
                            position: 'sticky',
                            top: "80px",
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <NavLink to="/legal/terms-of-service" className={({ isActive }) => isActive ? "active" : ""}>Terms of Service</NavLink>
                        <NavLink to="/legal/privacy-policy" className={({ isActive }) => isActive ? "active" : ""}>Privacy Policy</NavLink>
                        <NavLink to="/legal/code-of-conduct" className={({ isActive }) => isActive ? "active" : ""}>Code of Conduct</NavLink>
                    </div>
                </div>
                <div className="policy-tab-content">
                    <Outlet />
                </div>
                <div className="policy-tab-content-topic">
                    {location.pathname === "/legal/terms-of-service" && (
                        <div className="table-content" >
                            <h2>Table of contents</h2>
                            <ol>
                                <li>
                                    <a href="#services-provided">services-provided</a>
                                </li>
                                <li>
                                    <a href="#account-registration">account-registration</a>
                                </li>
                                <li>
                                    <a href="#user-conduct">user-conduct</a>
                                </li>
                                <li>
                                    <a href="#service-modification">service-modification</a>
                                </li>
                                <li>
                                    <a href="#payment">payment</a>
                                </li>
                                <li>
                                    <a href="#termination-of-account">termination-of-account</a>
                                </li>
                                <li>
                                    <a href="#limitation-of-liability">limitation-of-liability</a>
                                </li>
                                <li>
                                    <a href="#governing-law">governing-law</a>
                                </li>
                                <li>
                                    <a href="#contact">contact</a>
                                </li>
                            </ol>
                        </div>
                    )}
                    {location.pathname === "/legal/privacy-policy" && (
                        <div className="table-content" >
                            <h2>Table of contents</h2>
                            <ol>
                                <li>
                                    <a href="#information-we-collect">information-we-collect</a>
                                </li>
                                <li>
                                    <a href="#how-we-use-your-information">how-we-use-your-information</a>
                                </li>
                                <li>
                                    <a href="#data-sharing">data-sharing</a>
                                </li>
                                <li>
                                    <a href="#cookies-and-tracking-technologies">cookies-and-tracking-technologies</a>
                                </li>
                                <li>
                                    <a href="#data-retention">data-retention</a>
                                </li>
                                <li>
                                    <a href="#your-rights">your-rights</a>
                                </li>
                                <li>
                                    <a href="#changes-to-this-policy">changes-to-this-policy</a>
                                </li>
                                <li>
                                    <a href="#contact">contact</a>
                                </li>
                            </ol>
                        </div>
                    )}
                    {location.pathname === "/legal/code-of-conduct" && (
                        <div className="table-content" >
                            <h2>Table of contents</h2>
                            <ol>
                                <li>
                                    <a href="#professionalism">professionalism</a>
                                </li>
                                <li>
                                    <a href="#fair-use-of-data">fair-use-of-data</a>
                                </li>
                                <li>
                                    <a href="#compliance-with-local-laws">compliance-with-local-laws</a>
                                </li>
                                <li>
                                    <a href="#data-security">data-security</a>
                                </li>
                                <li>
                                    <a href="#disciplinary-actions">disciplinary-actions</a>
                                </li>
                                <li>
                                    <a href="#contact">contact</a>
                                </li>
                            </ol>
                        </div>
                    )}
                </div>

                {isSidebarOpen && (
                    <div className="policy-tab-view-modal">
                        <div
                            style={{
                                position: 'sticky',
                                top: "80px",
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                            }}
                        >
                            <NavLink to="/legal/terms-of-service" onClick={toggleSidebar} className={({ isActive }) => isActive ? "active" : ""}>Terms of Service</NavLink>
                            <NavLink to="/legal/privacy-policy" onClick={toggleSidebar} className={({ isActive }) => isActive ? "active" : ""}>Privacy Policy</NavLink>
                            <NavLink to="/legal/code-of-conduct" onClick={toggleSidebar} className={({ isActive }) => isActive ? "active" : ""}>Code of Conduct</NavLink>
                        </div>
                    </div>
                )}
                
                <div className="policyChange" onClick={toggleSidebar}>
                    {isSidebarOpen ? (
                        <>
                            &times;
                        </>
                    ) : (
                        <>
                            &#9776;
                        </>
                    )}
                </div>

            </div>

            <Footer/>

        </>
    )
}
