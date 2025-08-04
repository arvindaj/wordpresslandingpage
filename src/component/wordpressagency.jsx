import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import teamImg from "../assets/img/team-working.png"; // replace with your image path

const WordPressAgency = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        {/* Tag */}
                        <div className="d-inline-flex align-items-center mb-3 px-3 py-1 rounded-pill bg-light border">
                            <span className="me-2">
                                <span
                                    className="d-inline-block rounded-circle"
                                    style={{ width: "10px", height: "10px", backgroundColor: "#8BC34A" }}
                                ></span>
                            </span>
                            <span className="fw-bold small">Web Performance</span>
                        </div>

                        {/* Heading */}
                        <h1 className="fw-bold display-5">WordPress Development Agency</h1>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>

                        {/* Description */}
                        <p className="text-muted">
                            Our team of talented WordPress developers is not just skilled professionals; they
                            are dedicated experts who go beyond coding. They take the time to understand your
                            business, ensuring that the websites they create are not just functional but also
                            aligned with your brand and objectives.
                        </p>

                        <p className="text-muted">
                            With a deep knowledge of WordPress, our developers deliver customized solutions
                            that cater to your specific needs. From design to functionality, they ensure that
                            your website not only looks great but also performs exceptionally, helping you
                            achieve your online goals with ease.
                        </p>

                        <p className="text-muted">
                            Don’t be worried of the time taken. Our exclusive team of WordPress web designers
                            and developers will see to it that your project gets completed in the shortest time
                            span possible with utmost perfection.
                        </p>

                        {/* Features */}
                        <div className="d-flex align-items-start mb-3">
                            <div className="me-2 btn border-black">
                                <FaArrowRight className="fs-4 " style={{ transform: 'rotate(-25deg)' }} />
                            </div>
                            <p className="mb-0 fw-semibold ">
                                Share your idea, and we'll bring it to life with WordPress.
                            </p>
                        </div>

                        <div className="d-flex align-items-start mb-4">
                            <div className="me-2 btn border-black">
                                <FaArrowRight className="fs-4 " style={{ transform: 'rotate(-25deg)' }} />
                            </div>
                            <p className="mb-0 fw-semibold">
                                Our expertise ensures a rapid, well‑designed, and fully functional website for a
                                swift market entry.
                            </p>
                        </div>

                        {/* Button */}
                        <button className="btn btn-dark rounded-pill px-4">Get Started</button>
                    </div>

                    {/* Right Image */}
                    <div className="col-lg-6">
                        <div
                            className="position-relative overflow-hidden rounded-3 shadow"
                            style={{ height: "100%", minHeight: "400px", scale: "calc(0.7)" }}
                        >
                            <img
                                src={teamImg}
                                alt="Team Working"
                                className="img-fluid w-100 h-100"
                                style={{ objectFit: "cover", }}
                            />
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-start p-4 text-white"
                            >
                                <h1 className="fw-bold top-1">Engaging Your Audience, In Fast Performance</h1>

                            </div>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 text-white"
                            >

                                <a
                                    href="#"
                                    className="text-white fw-semibold mt-2 d-flex align-items-center fs-4"
                                >
                                    Learn more
                                    <FaCheckCircle className="ms-2" style={{ color: '#8EC440' }} />
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
