import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import womanLaptop from "../assets/img/woman-laptop.png";
import "../assets/css/wordpresstechsection.css";

const WordPressTechSection = () => {
    const [activeTech, setActiveTech] = useState("AI/ML");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const techContent = {
        "AI/ML": {
            para1: "AI and ML help automate complex processes and create intelligent user experiences.",
            para2: "We integrate ML models with WordPress to personalize content, optimize performance, and improve decision-making.",
        },
        "Computer Vision": {
            para1: "Computer vision enables systems to extract meaningful information from images or videos.",
            para2: "We use CV techniques in WordPress for image recognition, moderation, and AR-based content.",
        },
        "Cloud Computing": {
            para1: "Cloud computing enhances scalability, availability, and performance.",
            para2: "We deploy WordPress on cloud platforms like AWS and GCP to ensure speed and reliability.",
        },
    };

    return (
        <section className="py-2" style={{ backgroundColor: "#1b1b1b", color: "#fff" }}>
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Image */}
                    <div
                        className="col-12 col-lg-4 text-center mb-0 mb-lg-0"
                        data-aos="fade-right"
                    >
                        <img
                            src={womanLaptop}
                            alt="Woman with Laptop"
                            className="img-fluid womanLaptopAnim mt-3"
                            style={{ maxHeight: "520px" }}
                        />
                    </div>

                    {/* Center Content */}
                    <div className="col-12 col-lg-8" data-aos="fade-left">
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

                        <h1 className="fw-bold mb-4 mx-3">
                            Technologies we use for WordPress web development
                        </h1>

                        <div className="row g-4">
                            {/* Center Card with Dynamic Content */}
                            <div
                                className="col-11 col-md-5 p-4 mx-3"
                                data-aos="fade-up"
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
                                    {techContent[activeTech].para1}
                                </p>
                                <p className="text-white-50 mt-3 mb-0">
                                    {techContent[activeTech].para2}
                                </p>
                            </div>

                            {/* Clickable Right Text List */}
                            <div className="col-12 col-md-6 mx-0" data-aos="fade-up" data-aos-delay="200">
                                {Object.keys(techContent).map((tech, index) => (
                                    <div
                                        key={index}
                                        className="mb-4"
                                        style={{
                                            cursor: "pointer",
                                            backgroundColor: activeTech === tech ? "#4b4949ff" : "transparent",
                                            padding: "10px",
                                            borderRadius: "10px",
                                            transition: "all 0.3s ease",
                                        }}
                                        onClick={() => setActiveTech(tech)}
                                    >
                                        <h6 className="fw-bold">{tech}</h6>
                                        <p className="text-white-50 mb-0">Click to see details</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WordPressTechSection;
