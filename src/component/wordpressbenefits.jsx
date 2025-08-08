import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import "bootstrap/dist/css/bootstrap.min.css";
import mainImg from "../assets/img/main-laptop.png";
import sideImg from "../assets/img/side-student.png";
import "../assets/css/wordpressbenefits.css"; // Your custom styles

const WordPressBenefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <section className="py-2 bg-white">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div
            className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start"
            data-aos="fade-right"
          >
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
              Get One Challenge
            </span>

            <h3 className="fw-bold mb-3">Performance in each Line</h3>
            <p className="text-muted">
              We do not sell one size fits all WordPress. All lines of codes are functional in such a way that each is optimized, modular and scalable. Custom themes, smartly powered plugins and high performing back-end systems - we deliver performance by default.
            </p>
            <p className="text-muted">
             We are full-stack all the way, i.e., we have eCommerce as well as enterprise CMS. Developing and growing your brand online, we ensure your site is at scale; secure, smooth and zippy fast as the best WordPress development company in Coimbatore.
            </p>

            <button
              className="btn btn-dark px-4 py-2 mt-3 rounded-pill shadow-sm ctabutton"
              style={{ fontWeight: "500" }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              Get Started
            </button>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6">
            <div className="d-flex justify-content-center gap-3 flex-nowrap overflow-hidden">
              <img
                src={mainImg}
                alt="Main WordPress"
                className="img-fluid rounded mainImgAnim"
                style={{ maxWidth: "50%", height: "auto" }}
                data-aos="fade-up"
              />
              <img
                src={sideImg}
                alt="Side Student"
                className="img-fluid rounded sideImgAnim"
                style={{
                  maxWidth: "50%",
                  height: "350px",
                  bottom: "-120px",
                  position: "relative",
                }}
                data-aos="fade-down"
                data-aos-delay="300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WordPressBenefits;
