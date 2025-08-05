import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import womanLaptop from "../assets/img/woman-laptop.png"; // Replace with your image path

const WordPressTechSection = () => {
    return (
        <section className="py-5" style={{ backgroundColor: "#1b1b1b", color: "#fff" }}>
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Image */}
                    <div className="col-12 col-lg-4 text-center mb-4 mb-lg-0">
                        <img
                            src={womanLaptop}
                            alt="Woman with Laptop"
                            className="img-fluid"
                            style={{ maxHeight: "550px" }}
                        />
                    </div>

                    {/* Center Content */}
                    <div className="col-12 col-lg-8">
                        {/* Top Badge */}
                        <div
                            className="d-inline-block px-3 py-1 mb-3 rounded-pill"
                            style={{ backgroundColor: "#fff", color: "#000", fontWeight: "600" }}
                        >
                            <span
                                className="me-2 mx-3"
                                style={{
                                    display: "inline-block",
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: "#55d16d",
                                    borderRadius: "50%",
                                }}
                            ></span>
                            Optimizing User Experience Across Devices
                        </div>

                        {/* Heading */}
                        <h1 className="fw-bold mb-4 mx-3">
                            Technologies we use for WordPress web development
                        </h1>

                        <div className="row g-4">
                            {/* Center Card */}
                            <div
                                className="col-11 col-md-5 p-4 mx-3"
                                style={{
                                    backgroundColor: "#1b1b1b",
                                    border: "1px solid rgba(255,255,255,0.3)",
                                    borderRadius: "15px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "60px",
                                        height: "3px",
                                        backgroundColor: "#777",
                                        marginBottom: "15px",
                                    }}
                                ></div>
                                <p className="text-white-50 mb-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium.
                                </p>
                                <p className="text-white-50 mt-3 mb-0">
                                    Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                                    et quasi architecto beatae vitae dicta.
                                </p>
                            </div>

                            {/* Right Text List */}
                            <div className="col-12 col-md-6 mx-0">
                                <div className="mb-4">
                                    <h6 className="fw-bold">AI/ML</h6>
                                    <p className="text-white-50 mb-0">Lorem ipsum dolor sit amet</p>
                                </div>
                                <div className="mb-4">
                                    <h6 className="fw-bold">Computer Vision</h6>
                                    <p className="text-white-50 mb-0">Lorem ipsum dolor sit amet</p>
                                </div>
                                <div>
                                    <h6 className="fw-bold">Cloud Computing</h6>
                                    <p className="text-white-50 mb-0">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WordPressTechSection;
