import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Testimonial.css"; // optional if you're writing custom styles
import test1 from '../assets/img/testimonials1.png'
import test2 from '../assets/img/testmonial2.jpg'
import test3 from '../assets/img/testmonial3.jpg'

const testimonials = [
    {
        name: "James R",
        role: "Owner, Bloom & Co.",
        text: "The team at [Your Agency Name] transformed our social media presence. In just three months, our engagement doubled, and sales from Instagram increased by 40%. They truly understand the art of digital marketing!",
        image: test1,
    },
    {
        name: "Anna L",
        role: "Marketing Lead, Nova",
        text: "Absolutely amazing results. We were struggling with growth and they helped us scale up quickly with a strong digital plan.",
        image: test2,
    },
    {
        name: "John M",
        role: "CEO, Startup Hub",
        text: "Professional and effective. They handled our campaigns and we saw real, measurable improvements.",
        image: test3,
    },
];

const Testimonial = () => {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // 3000ms = 3 seconds

        return () => clearInterval(interval);
    }, [index]); // re-run whenever index changes

    return (
        <div className="container py-5">
            <div className="row align-items-center bg-white p-4 rounded">
                <div className="col-md-7">
                    <div className="row gap-3">
                        <div className="col-5 ms-2">
                            <div className="row-6 mt-4">
                                <div>
                                    <p className=" mb-2 fs-5">
                                        <span
                                            style={{
                                                display: "inline-block",
                                                width: "10px",
                                                height: "10px",
                                                backgroundColor: "#B6ED55",
                                                borderRadius: "50%",
                                            }}
                                        ></span>
                                        <strong>  Testimonials</strong>
                                    </p>
                                    <h1 className="mb-4 mt-4">Listen To What They Say.</h1>
                                </div>

                                <div
                                    className="d-flex align-items-end gap-2"
                                    style={{ position: "relative", bottom: "-120px" }}
                                >
                                    <button className="btn btn-outline-dark me-2" onClick={prevSlide}>
                                        ❮
                                    </button>
                                    <button className="btn btn-outline-dark ms-2" onClick={nextSlide}>
                                        ❯
                                    </button>
                                    {testimonials.map((t, i) => (
                                        <img
                                            key={i}
                                            src={t.image}
                                            alt={`thumb-${i}`}
                                            onClick={() => setIndex(i)}
                                            className={`mx-2 ${i === index ? "border border-dark" : "border-secondary"}`}
                                            style={{ width: "50px", height: "50px", cursor: "pointer" }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-6 ms-2">
                            <img
                                src={testimonials[index].image}
                                alt={testimonials[index].name}
                                className="img-fluid rounded"
                                style={{ maxHeight: "400px", borderRadius: "20px" }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <p className="mb-4 fs-5">❝ {testimonials[index].text} ❞</p>
                    <h6 className="fw-bold mb-0 fs-5">{testimonials[index].name}</h6>
                    <p className="text-muted fs-5">{testimonials[index].role}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
