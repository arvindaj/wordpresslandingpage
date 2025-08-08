import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import overlayImg from "../assets/img/laptop-bg.png"; // small overlay image
import laptopBg from "../assets/img/overlay-img.png"; // background image
import '../assets/css/wordpresssection.css'

const WordPressSection = () => {
    return (
        <section className="py-2">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Images */}
                    <div className="col-lg-6 col-md-6 col-12 position-relative mb-5 mb-md-0 d-flex justify-content-center">
                        <div className="position-relative w-100 d-flex justify-content-center">
                            {/* Bottom Image with Animation */}
                            <img
                                src={laptopBg}
                                alt="Laptop Background"
                                className="img-fluid rounded-4 shadow-lg laptop-bg-animation"
                            />

                            {/* Overlay small image with Animation */}
                            <div
                                className="overlay-card position-absolute shadow-lg rounded-4 p-3 text-white overlay-animation"
                                style={{
                                    backgroundImage: `url(${overlayImg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="d-flex flex-column justify-content-end h-100 mx-2 text-start text-md-start text-center">
                                    <h2 className="fw-bold fs-4">WordPress</h2>
                                    <h2 className="fw-bold fs-4">Website</h2>
                                    <h2 className="fw-bold fs-4">Development</h2>
                                </div>

                                {/* Responsive Overlaypara */}
                                <div className="mt-2 Overlaypara">
                                    <p className="mb-2 fw-bold ">One Platform</p>
                                    <p className="mb-0 small">
                                        Various versions have evolved over the years,
                                        sometimes by accident, sometimes on purpose.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-6 col-md-6 col-12 text-center text-md-start px-lg-5">
                        <div className="mb-3">
                           <span
                            className="d-inline-flex align-items-center px-3 py-1 mb-3 rounded-pill"
                            style={{ backgroundColor: "#f2f2f2", fontSize: "14px" }}
                        >
                            <span
                                className="me-2 d-inline-block rounded-circle"
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: "#8BC34A",
                                }}
                            ></span>
                        Why Pavalsoft?
                        </span>
                            
                        </div>

                        <h2 className="fw-bold mb-3">Built for Change</h2>
                        <p className="text-muted mb-3">
                            We build aesthetically beautiful designs with hard hitting backend logic. Every WordPress site we build takes full advantage of best practices and is fully optimized, responsive, and SEO friendly.
                        </p>
                        <p className="text-muted mb-3">
                           With our agile development approach, you will have it more quickly, you can iterate continuously, and you can work in an iterative, collaborative, and transparent way through every phase.
                        </p>
                        <p className="text-muted mb-4">
                            Our professional WordPress development team in Coimbatore, India is the most reliable for delivering business-ready solutions, and not just another website.
                        </p>

                        <button
                            className="btn fw-semibold px-4 py-2 rounded-pill shadow-sm ctabutton"
                            style={{
                                background: "linear-gradient(to right, #333, #666)",
                                color: "#fff",
                                letterSpacing: "1px",
                            }}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default WordPressSection;