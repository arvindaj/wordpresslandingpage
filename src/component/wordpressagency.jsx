import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import teamImg from "../assets/img/team-working.png"; // replace with 
// your image path
import '../assets/css/wordpressagency.css'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WordPressAgency = () => {



      useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="py-2 pb-0 mx-3">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-lg-6 mb-4 mb-lg-0"  data-aos="fade-right">
                        {/* Tag */}
                        <div className="d-inline-flex align-items-center mb-5 px-3 py-1 rounded-pill bg-light border">
                            <span className="me-2">
                                <span
                                    className="d-inline-block rounded-circle"
                                    style={{
                                        width: "10px",
                                        height: "10px",
                                        backgroundColor: "#8BC34A",
                                    }}
                                ></span>
                            </span>
                            <span className="fw-bold">Web Performance</span>
                        </div>

                        {/* Heading */}
                        <h1 className="fw-bold display-6 display-md-5 mb-3">
                            Speed. Scale. Stability.
                        </h1>
                       <p className="text-muted mb-4" data-aos="fade-up" data-aos-delay="100">
                            We aren’t just a WordPress site builder; we are digital engine builders at Pavalsoft. Every page is developed with a strong emphasis on speed, scale, and cross-platform performance testing. Your users won’t just come and go, they will stick around
                        </p>

                        <p className="text-muted mb-4" data-aos="fade-up" data-aos-delay="100">
                            Our performance strategy and practices incorporate everything from server-side optimizations to frontend asset compression to ensure lightning fast loading times and low bounce rates. When we build, caching is improved, CDN is unified, lazy loading is implemented, and, globally by default we improve the Core Web Vitals.
.
                        </p>

                       <p className="text-muted mb-4" data-aos="fade-up" data-aos-delay="100">
                            As the leading WordPress development firm in Coimbatore, our engineered solutions are intentionally designed to scale with your traffic, feature set and business requirements. When we develop a fast WordPress site, it is fast whether you host huge users.
                        </p>

                     <p className="text-muted mb-4" data-aos="fade-up" data-aos-delay="100">
                            Don’t be worried of the time taken. Our exclusive team will see to it that your project
                            gets completed fast with utmost perfection.
                        </p>

                        {/* Features */}
                        <div className="d-flex align-items-start mb-3">
                            <div className="me-2 btn border-black p-2">
                                <FaArrowRight className="fs-5" style={{ transform: "rotate(-25deg)" }} />
                            </div>
                            <p className="mb-0 fw-semibold mt-0 mb-4" data-aos="fade-up" data-aos-delay="200">
                                All of our builds are highly performant according to Google's performance metrics.
                            </p>
                        </div>

                        <div className="d-flex align-items-start mb-4">
                            <div className="me-2 btn border-black p-2">
                                <FaArrowRight className="fs-5" style={{ transform: "rotate(-25deg)" }} />
                            </div>
                            <p className="mb-0 fw-semibold mt-0">
                                Technologies not just integrated, but enhanced and optimized, ensuring the best quality, speed and experience.
                            </p>
                        </div>

                        {/* Button */}
                        <button className="btn btn-dark rounded-pill px-4 w-100 w-sm-auto ctabutton">
                            Get Started
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="col-lg-6" style={{height:'auto'}} >
                        <div className="position-relative overflow-hidden rounded-3 shadow" style={{ height: "90%", minHeight: "400px", scale: "calc(0.7)" }}>
                            <img
                                src={teamImg}
                                alt="Team Working"
                                className="img-fluid w-100"
                                style={{ objectFit: "cover", minHeight: "250px" }}
                            />
                            {/* Top Text */}
                            <div className="position-absolute top-0 start-0 w-100 d-flex flex-column justify-content-start p-3 p-md-4 text-white">
                                <h2 className="fw-bold fs-5 fs-md-3">
                                    Engaging Your Audience, In Fast Performance
                                </h2>
                            </div>

                            {/* Bottom Link */}
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3 p-md-4 text-white ">
                                <a
                                    href="#"
                                    className="text-white fw-semibold mt-2 d-flex align-items-center fs-5 fs-md-4 learn-more-link" 
                                >
                                    Learn more
                                    <FaCheckCircle className="ms-2" style={{ color: "#8EC440" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WordPressAgency;
