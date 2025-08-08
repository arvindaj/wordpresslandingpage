import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import womanLaptop from "../assets/img/woman-laptop.png";
import "../assets/css/wordpresstechsection.css";

const WordPressTechSection = () => {
    const [activeTech, setActiveTech] = useState("Gutenberg Blokes");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const techContent = {
        "Gutenberg Blokes": {
            para1: "We develop customized Gutenberg blocks to ensure easy flexible and super intuitive editing of websites. Using drag-and-drop interface using simple to code interfaces, have interesting layouts with no coding involved.",
            para2: "These responsive blocks are also SEO friendly and customizable to be similar to your brand style, so that you have full power over the design and functionality of your site.",
        },
        "WooCommerce Integration": {
            para1: "We provide conversion-friendly, secure, scalable and seamless WooCommerce integrations. Whether it is a product listing or checking out, all the effects are made to boost the user experience and convert the sale.",
            para2: "From a small shop to thousands of SK us, we have our setups in place with WooCommerce that are stable, performative and flexible to cater your growing shop.",
        },
        "API-First Approach": {
            para1: "We develop systems that are graceful and effective to work with any platform using API-first approach. This is to guarantee rapid integration, a smoother data flow and scale-up of your business.",
            para2: "Our API solutions enable you to integrate with third-party tools, CRMs, and custom apps so you can continue to grow your capabilities and increase your performance not reducing the safety.",
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
                           WordPress Tools
                        </div>

                        <h1 className="fw-bold mb-4 mx-3">
                            Technologies to drive up-to-date WordPress solutions
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
