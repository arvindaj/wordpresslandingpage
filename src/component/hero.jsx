import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../assets/img/wordpressbg.png'
import r1 from '../assets/img/r1.png'
import r2 from '../assets/img/r2.png'
import r3 from '../assets/img/r3.png'
import womanhero from '../assets/img/girltoplook 1.png'
import '../assets/css/herosection.css'
import sendgreen from '../assets/img/sendgreen.png'
const HeroSection = () => {
    return (
        <section className="hero-section position-relative overflow-hidden mt-5 mb-5">
            {/* Background geometric shapes */}
            <div className="position-absolute" style={{
                top: '-15%',
                left: '-0%',
                width: '250px',
                height: '550px',
                backgroundImage: `url(${background})`,
                borderRadius: '20px',
                transform: 'rotate(15deg)',
                opacity: '0.7'
            }}></div>


            <div className="container-fluid h-100 col-lg-10 mb-5">
                <div className="row align-items-center h-100 ">
                    {/* Left Side - Content */}
                    <div className="col-lg-5 col-md-6 order-2 order-md-1 px-4 px-lg-5">
                        <div className="hero-content mx-5 px-0">
                            {/* Green Badge */}
                            <div className="mb-4">
                                <span className="badge px-4 py-2 text-dark fw-semibold" style={{

                                    borderRadius: '25px',
                                    fontSize: '20px'
                                }}>
                                    Make Your Business Idea
                                </span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="display-1 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
                                <span style={{ color: '#161718ff' }}>Creative</span>
                            </h1>
                            <h2>
                                <span style={{ color: '#666' }}>Never End In </span>
                                <span style={{ color: '#9ccc65' }}>WordPress</span>
                                <br />
                                <span style={{ color: '#666' }}>Website Development</span>
                            </h2>
                            {/* Recognition Section */}
                            <div className="col-12 col-lg-6">
                                <h5 className="fw-bold text-center text-sm-start">
                                    Recognized By
                                </h5>
                                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3">

                                    <div className="line5 d-none d-sm-block"></div>
                                    <div className="d-flex gap-2">
                                        <img src={r1} alt="R1" height="50" />
                                        <img src={r2} alt="R2" height="50" />
                                        <img src={r3} alt="R3" height="50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center - Woman with Laptop Image */}
                    <div className="col-lg-3 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
                        <div className="">
                            {/* Background circle */}
                            <div className='womanpic'>
                                <img
                                    src={womanhero}
                                    alt="womanhero"
                                    className="me-0 womanpic"
                                    style={{transform: 'rotate(15deg)',}}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Call to Action */}
                    <div className="col-lg-4 col-md-12 order-3 px-4 px-lg-5 mt-5 postion-relative">
                        <div className="cta-section mt-5">
                            {/* Green Badge */}
                            <div className="mb-4 mt-5">
                                <span className="badge1 px-3 py-2 text-dark fw-semibold" style={{
                                    borderRadius: '20px',
                                    fontSize: '13px'
                                }}>
                                    Find The Best Solution
                                </span>
                            </div>

                            {/* CTA Heading */}
                            <h2 className="display-1 fw-bold mb-4" style={{ color: '#0a0a0aff' }}>
                                Go on !
                            </h2>

                            <h3 className="h4 mb-3">
                                <span style={{ color: '#666' }}>WordPress </span>
                                <span style={{ color: '#9ccc65' }}>Development</span>
                                <br />
                                <span style={{ color: '#666' }}>Service Company</span>
                            </h3>

                            {/* Description */}
                            <p className="text-muted mb-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>

                            {/* CTA Button */}
                            <button className="btn text-white px-4 py-1 rounded-pill fw-semibold d-flex align-items-center gap-2 ctabutton" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: 'none',
                                fontSize: '16px',
                                letterSpacing:'3px'
                            }}>
                                Get Quote
                                <div className='mt-2'>
                                    <img src={sendgreen} alt="" style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',

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