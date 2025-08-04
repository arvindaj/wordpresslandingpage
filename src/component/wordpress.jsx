import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import overlayImg from "../assets/img/laptop-bg.png"; // Replace with your top image
import laptopBg from "../assets/img/overlay-img.png"; // Replace with your bottom image
// import "../assets/css/wordpressSection.css";

const WordPressSection = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Images */}
                    <div className="col-lg-6 col-md-6 col-12 position-relative mb-5 mb-md-0 d-flex justify-content-center">
                        {/* Bottom Image */}
                        <div className="position-relative">
                            <img
                                src={laptopBg}
                                alt="Laptop Background"
                                className="img-fluid rounded-4 shadow-lg"
                                style={{ maxWidth: "380px" }}
                            />

                            {/* Overlay small image */}
                            <div
                                className="position-absolute shadow-lg rounded-4 p-3 text-white"
                                style={{
                                    bottom: "-20%",
                                    left: "-15%",
                                    backgroundImage: `url(${overlayImg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    width: "280px",
                                    height: "200px",
                                    top: '250px'
                                }}
                            >
                                <div className="d-flex flex-column justify-content-end h-100">
                                    <h2 className="fw-bold">WordPress</h2>
                                    <h2 className="fw-bold">Website</h2>
                                    <h2 className="fw-bold">Development</h2>
                                </div>
                                <div className="d-flex flex-column h-100 mx-5 col-lg-12 mt-2 m">
                                    <div className="">
                                        <p className="mt-1 mb-0 mx-5" style={{ fontSize: "14px" }}>One Platform</p>
                                        <p className="mb-0 mx-5 col-12" style={{ fontSize: "14px" }}>
                                            Various versions have evolved over the years,
                                            sometimes by accident, sometimes on purpose
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-6 col-md-6 col-12 text-center text-md-start px-lg-5">
                        {/* Badge */}
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
                            <strong>
                                unabated by the number of pages
                            </strong>
                            , application or traffic. There is a reason why one-fourth of the
                            internet uses WordPress.
                        </p>

                        {/* Button */}
                        <button
                            className="btn fw-semibold px-4 py-2 rounded-pill shadow-sm"
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
