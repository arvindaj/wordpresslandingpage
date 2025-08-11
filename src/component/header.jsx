import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import defaultLogo from '../assets/img/pavallogo.png';
import '../assets/css/header.css';

const Headersection = () => {
    return (
        <header className="header py-3 border-mobile-hide mb-md-4 animated-border">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Left Section - Logo & Growth */}
                    <div className="col-6 col-lg-4">
                        <div className="d-flex align-items-center">
                            <img
                                src={defaultLogo}
                                alt="Paval Soft Logo"
                                className="logo-img"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/50";
                                }}
                            />
                            <div className="vr bg-dark mx-3 d-none d-lg-block" style={{ height: "40px", opacity: 1.5 }}></div>
                            <a href="#" className="growth-btn d-none d-xl-block">
                                <span className="dot"></span>
                                Growth
                            </a>
                        </div>
                    </div>

                    {/* Center Section - Contact Numbers */}
                    <div className="col-6 d-none d-lg-block col-lg-4">
                        <div className="contact-numbers">
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

                    {/* Right Section - Let's Talk Button */}
                    <div className="col-6 col-lg-4 text-end">
                        <div className="d-flex align-items-center justify-content-end gap-3">
                            <div className="vr bg-dark me-2 d-none d-lg-block" style={{ height: "40px", opacity: 0.8 }}></div>
                            <button className="btn btn-dark rounded-pill px-3 px-lg-4 py-2">
                                Let's Talk
                            </button>
                        </div>
                    </div>

                    {/* Mobile View - Auto Sliding Contact Numbers */}
                    <div className="col-12 d-block d-lg-none my-2">
                        <div className="mobile-slider-wrapper">
                            <div className="contact-slider animate-scroll">
                                <div className="contact-slide">
                                    <img src="https://flagcdn.com/in.svg" alt="India" className="flag-icon me-1" />
                                    +91 6307050902
                                </div>
                                <div className="contact-slide">
                                    <img src="https://flagcdn.com/au.svg" alt="Australia" className="flag-icon me-1" />
                                    +74 402720107
                                </div>
                                <div className="contact-slide">
                                    <img src="https://flagcdn.com/gb.svg" alt="UK" className="flag-icon me-1" />
                                    +61 449840901
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx>{`
            `}</style>
        </header>
    );
};

export default Headersection;
