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
                                className="px-4 py-1 rounded-pill fw-semibold"
                                style={{
                                    backgroundColor: "#f4f4f4",
                                    color: "#333",
                                    fontSize: "14px",
                                }}
                            >
                                What Makes
                            </span>
                        </div>

                        <h2 className="fw-bold mb-3">WordPress awesome?</h2>
                        <p className="text-muted mb-3">
                            An easy-to-use content management system that requires no prior
                            training or technical expertise.
                        </p>
                        <p className="text-muted mb-3">
                            WordPress has built-in SEO parameters that make websites SEO
                            friendly. Additional plugins can also be used to extend the
                            SEO-friendliness of the website.
                        </p>
                        <p className="text-muted mb-4">
                            Sturdy performance that is{" "}
                            <strong>unabated by the number of pages</strong>, application
                            or traffic. There is a reason why one-fourth of the internet
                            uses WordPress.
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