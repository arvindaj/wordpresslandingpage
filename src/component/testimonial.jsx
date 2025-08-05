import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import test1 from '../assets/img/testimonials1.png';
import test2 from '../assets/img/testmonial2.jpg';
import test3 from '../assets/img/testmonial3.jpg';
import '../assets/css/testimonial.css'; // for responsive tweaks

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
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="container py-2 ">
      <div className="row align-items-center bg-white p-4 rounded shadow testimonial-card">
        
        {/* Left Section */}
        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
          <div className="row g-3">
            
            {/* Text & Buttons */}
            <div className="col-12 col-md-5 d-flex flex-column justify-content-between">
              <div>
                <p className="mb-2 fs-6 fs-md-5">
                  <span className="d-inline-block rounded-circle me-2"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: "#B6ED55"
                    }}
                  ></span>
                  <strong>Testimonials</strong>
                </p>
                <h2 className="fw-bold mb-4 mt-3 fs-3 fs-md-2">Listen To What They Say.</h2>
              </div>

              <div className="d-flex align-items-center flex-wrap gap-2 mt-3">
                <button className="btn btn-outline-dark" onClick={prevSlide}>❮</button>
                <button className="btn btn-outline-dark" onClick={nextSlide}>❯</button>
                {testimonials.map((t, i) => (
                  <img
                    key={i}
                    src={t.image}
                    alt={`thumb-${i}`}
                    onClick={() => setIndex(i)}
                    className={`rounded-circle border ${i === index ? "border-dark" : "border-secondary"}`}
                    style={{ width: "45px", height: "45px", cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className="col-12 col-md-6 text-center">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="img-fluid rounded testimonial-img"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-5 col-md-12 text-center text-lg-start">
          <p className="mb-4 fs-6 fs-md-5">❝ {testimonials[index].text} ❞</p>
          <h6 className="fw-bold mb-0 fs-6 fs-md-5">{testimonials[index].name}</h6>
          <p className="text-muted fs-6 fs-md-5">{testimonials[index].role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
