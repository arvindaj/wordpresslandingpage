import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../assets/img/wordpressbg.png'
import r1 from '../assets/img/r1.png'
import r2 from '../assets/img/r2.png'
import r3 from '../assets/img/r3.png'
import womanhero from '../assets/img/girltoplook 1.png'
import '../assets/css/herosection.css'
import sendgreen from '../assets/img/sendgreen.png'

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const HeroSection = () => {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);



    return (
        <section className="hero-section position-relative overflow-hidden mt-0 mb-5">
            {/* Background geometric shapes with floating animation */}
            <div className="position-absolute floating-bg-1" style={{
                top: '-15%',
                left: '-0%',
                width: '250px',
                height: '550px',
                backgroundImage: `url(${background})`,
                borderRadius: '20px',
                transform: 'rotate(15deg)',
                opacity: '0.7',
                animation: 'floatUpDown 6s ease-in-out infinite'
            }}></div>

            <div className="position-absolute floating-bg-2" style={{
                top: '5%',
                right: '-10%',
                width: '250px',
                height: '500px',
                backgroundImage: `url(${background})`,
                borderRadius: '20px',
                transform: 'rotate(15deg)',
                opacity: '0.7',
                animation: 'floatUpDown 8s ease-in-out infinite reverse'
            }}></div>

            <div className="container-fluid col-lg-10 mb-5">
                <div className="row align-items-center h-100">
                    {/* Left Side - Content with slide-in animation */}
                    <div className="col-lg-5 col-md-6 order-2 order-md-1 px-4 px-lg-5">
                        <div className="hero-content mx-5 px-0" style={{
                            animation: 'slideInLeft 1s ease-out'
                        }}>
                            {/* Green Badge with pulse animation */}
                            <div className="mb-4 text-center text-md-start mx-0 mt-lg-4">
                                <span className="green-badge animate-pulse-in">
                                    Make Your Business
                                </span>
                            </div>

                            {/* Main Heading with typewriter effect */}
                            <h1 className="display-1 fw-bold mb-4" style={{
                                lineHeight: '1.2',
                                animation: 'fadeInUp 1s ease-out 0.5s both'
                            }}>
                                <span style={{
                                    color: '#161718ff',
                                    animation: 'colorShift 3s ease-in-out infinite'
                                }}>Creative</span>
                            </h1>

                            <h2 style={{
                                animation: 'fadeInUp 1s ease-out 0.7s both'
                            }}>
                                <span style={{ color: '#666' }}>Never End In </span>
                                <span style={{
                                    color: '#8FDC24',
                                    animation: 'glow 2s ease-in-out infinite alternate'
                                }}>WordPress</span>
                                <br />
                                <span style={{ color: '#666' }}>Website Development</span>
                            </h2>

                            {/* Recognition Section with stagger animation */}
                            <div className="col-12 col-lg-12 mt-4" style={{
                                animation: 'fadeInUp 1s ease-out 0.9s both'
                            }}>
                                <h5 className="fw-bold text-center text-md-start mb-3">
                                    Recognized By
                                </h5>

                                <div className="col-lg-12 text-center">
                                    <img src={r1} alt="R1" className="img-fluid recognition-logo"
                                        style={{
                                            maxHeight: '35px',
                                            animation: 'bounceIn 1s ease-out 1.1s both'
                                        }} />
                                    <img src={r2} alt="R2" className="img-fluid recognition-logo"
                                        style={{
                                            maxHeight: '40px',
                                            animation: 'bounceIn 1s ease-out 1.3s both'
                                        }} />
                                    <img src={r3} alt="R3" className="img-fluid recognition-logo"
                                        style={{
                                            maxHeight: '40px',
                                            animation: 'bounceIn 1s ease-out 1.5s both'
                                        }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center - Woman with Laptop Image with rotation and hover effects */}
                    <div className="col-lg-3 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
                        <div className="">
                            <div className='womanpic' style={{
                                animation: 'zoomIn 1s ease-out 0.2s both'
                            }}>
                                <img
                                    src={womanhero}
                                    alt="womanhero"
                                    className="me-0 womanpic woman-hero-img"
                                    style={{
                                        // transform: 'rotate(15deg)',
                                        transition: 'all 0.3s ease',

                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Call to Action with slide-in animation */}
                    <div className="col-lg-4 col-md-12 order-3 px-4 px-lg-5 mt-3 postion-relative">
                        <div className="cta-section mt-lg-5" style={{
                            animation: 'slideInRight 1s ease-out 0.4s both'
                        }}>
                            {/* Green Badge */}
                            <div className="mb-4 mt-lg-5">
                                <span className="badge1 px-3 py-2 text-dark fw-semibold" style={{
                                    borderRadius: '20px',
                                    fontSize: '13px',
                                    animation: 'fadeInDown 1s ease-out 0.8s both'
                                }}>
                                    Find The Best Solution
                                </span>
                            </div>

                            {/* CTA Heading with bounce effect */}
                            <h2 className="display-1 fw-bold mb-4" style={{
                                color: '#0a0a0aff',
                                animation: 'bounceInUp 1s ease-out 1s both'
                            }}>
                                Go on !
                            </h2>

                            <h3 className="h4 mb-3" style={{
                                animation: 'fadeInUp 1s ease-out 1.2s both'
                            }}>
                                <span style={{ color: '#666' }}>WordPress </span>
                                <span style={{
                                    color: '#8FDC24',
                                    animation: 'textGlow 2s ease-in-out infinite alternate'
                                }}>Development</span>
                                <br />
                                <span style={{ color: '#666' }}>Service Company</span>
                            </h3>

                            {/* Description */}
                            <p className="text-muted mb-4" style={{
                                fontSize: '14px',
                                lineHeight: '1.6',
                                animation: 'fadeIn 1s ease-out 1.4s both'
                            }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>

                            {/* CTA Button with hover animations */}
                            <button className="btn px-4 py-1 rounded-pill fw-semibold d-flex align-items-center gap-2 ctabutton" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 'none',
                                fontSize: '16px',
                                letterSpacing: '3px',
                                animation: 'slideInUp 1s ease-out 1.6s both',
                                transition: 'all 0.3s ease'
                            }}>
                                Get Quote
                                <div className='mt-2'>
                                    <img src={sendgreen} alt="" className="send-icon" style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        transition: 'transform 0.3s ease',

                                    }} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default HeroSection;