import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultLogo from '../assets/img/pavallogo.png';
import '../assets/css/header.css';

const Headersection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header py-3 border-bottom border-dark">
            <div className="container-fluid">
                {/* Main Header Row */}
                <div className="row align-items-center">
                    {/* Left Section - Logo */}
                    <div className="col-6 col-lg-4">
                        <div className="d-flex align-items-center">
                            <img
                                src={defaultLogo}
                                alt="Paval Soft Logo"
                                className="logo-img"
                                onError={(e) => { e.target.src = "https://via.placeholder.com/50"; }}
                            />
                            {/* Growth button - hidden on mobile */}
                            <div className="vr bg-dark mx-3 d-none d-lg-block" style={{ height: "40px", opacity: 0.8 }}></div>
                            <a href="#" className="growth-btn d-none d-xl-block">
                                <span className="dot"></span>
                                Growth
                            </a>
                        </div>
                    </div>

                    {/* Center Section - Contact Numbers (Desktop Only) */}
                    <div className="col-4 d-none d-lg-block">
                        <div className="contact-numbers d-flex align-items-center justify-content-center gap-3 fs-6">
                            <div className="contact-item">
                                <img src="https://flagcdn.com/in.svg" alt="India" className="flag-icon me-1" />
                                +91 6307050902
                            </div>
                            <div className="contact-item">
                                <img src="https://flagcdn.com/au.svg" alt="Australia" className="flag-icon me-1" />
                                +74 402720107
                            </div>
                            <div className="contact-item">
                                <img src="https://flagcdn.com/gb.svg" alt="UK" className="flag-icon me-1" />
                                +61 449840901
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Let's Talk Button & Hamburger */}
                    <div className="col-6 col-lg-4">
                        <div className="d-flex align-items-center justify-content-end gap-3">
                            {/* Let's Talk Button - Desktop */}
                            <div className="d-none d-lg-block">
                                <div className="vr bg-dark me-3" style={{ height: "40px", opacity: 0.8 }}></div>
                            </div>
                            <button className="btn btn-dark rounded-pill px-3 px-lg-4 py-2 d-none d-lg-block">
                                Let's Talk
                            </button>

                            {/* Hamburger Menu Button - Mobile Only */}
                            <button 
                                className="btn btn-outline-dark d-lg-none p-2"
                                type="button"
                                onClick={toggleMenu}
                                aria-expanded={isMenuOpen}
                                aria-label="Toggle navigation"
                            >
                                <div className="hamburger-menu">
                                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                                    <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu - Top Dropdown */}
                {isMenuOpen && (
                    <div className="mobile-menu d-lg-none">
                        <div className="mobile-menu-content">
                            {/* Contact Numbers */}
                            <div className="contact-numbers mb-3">
                                <div className="contact-item mb-2">
                                    <img src="https://flagcdn.com/in.svg" alt="India" className="flag-icon me-2" />
                                    +91 6307050902
                                </div>
                                <div className="contact-item mb-2">
                                    <img src="https://flagcdn.com/au.svg" alt="Australia" className="flag-icon me-2" />
                                    +74 402720107
                                </div>
                                <div className="contact-item mb-2">
                                    <img src="https://flagcdn.com/gb.svg" alt="UK" className="flag-icon me-2" />
                                    +61 449840901
                                </div>
                            </div>

                            {/* Growth Link & Let's Talk Button */}
                            <div className="d-flex justify-content-between align-items-center">
                                
                                <button className="btn btn-dark rounded-pill px-3 py-2">
                                    Let's Talk
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom Styles */}
            <style jsx>{`
                .hamburger-menu {
                    width: 24px;
                    height: 18px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .hamburger-line {
                    width: 100%;
                    height: 2px;
                    background-color: #000;
                    transition: all 0.3s ease;
                    transform-origin: center;
                }

                .hamburger-line.active:nth-child(1) {
                    transform: rotate(45deg) translate(6px, 6px);
                }

                .hamburger-line.active:nth-child(2) {
                    opacity: 0;
                }

                .hamburger-line.active:nth-child(3) {
                    transform: rotate(-45deg) translate(6px, -6px);
                }

                .mobile-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background-color: white;
                    border: 1px solid #dee2e6;
                    border-top: none;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    animation: slideDown 0.3s ease;
                    z-index: 1000;
                }

                .mobile-menu-content {
                    padding: 1rem;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    font-weight: 500;
                }

                .flag-icon {
                    width: 20px;
                    height: auto;
                    border-radius: 2px;
                }

                .growth-btn {
                    text-decoration: none;
                    color: #000;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .dot {
                    width: 8px;
                    height: 8px;
                    background-color: #28a745;
                    border-radius: 50%;
                }

                .logo-img {
                    height: 40px;
                    width: auto;
                }

                @media (max-width: 991.98px) {
                    .header {
                        position: relative;
                        z-index: 1020;
                        background-color: white;
                    }
                }
            `}</style>
        </header>
    );
};

export default Headersection;