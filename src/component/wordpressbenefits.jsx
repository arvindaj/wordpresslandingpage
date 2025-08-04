import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import mainImg from "../assets/img/main-laptop.png"; // Replace with your laptop+man image
import sideImg from "../assets/img/side-student.png"; // Replace with your right-side image

const WordPressBenfits = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            {/* Badge */}
            <span 
              className="d-inline-flex align-items-center px-3 py-1 mb-3 rounded-pill"
              style={{ backgroundColor: "#f2f2f2", fontSize: "14px" }}
            >
              <span 
                className="me-2 d-inline-block rounded-circle" 
                style={{ width: "10px", height: "10px", backgroundColor: "green" }}
              ></span>
              Get One Challenge
            </span>

            <h3 className="fw-bold mb-3">Benefits of WordPress Development</h3>
            <p className="text-muted">
              WordPress changed the digital landscape on its axis by empowering professionals 
              as well as amateurs to build blogs and websites on their own. There is more to it 
              than user-friendliness.
            </p>
            <p className="text-muted">
              WordPress changed the digital landscape on its axis by empowering professionals 
              as well as amateurs to build blogs and websites on their own. There is more to it 
              than user-friendliness.
            </p>

            <button 
              className="btn btn-dark px-4 py-2 mt-3 rounded-pill shadow-sm"
              style={{ fontWeight: "500" }}
            >
              Get Started
            </button>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 d-flex justify-content-center gap-3">
            <div className="position-relative">
              <img 
                src={mainImg} 
                alt="Main WordPress" 
                className="img-fluid rounded"
                style={{ maxHeight: "450px" }}
              />
            </div>
            <div className="d-none d-md-block">
              <img 
                src={sideImg} 
                alt="Side Student" 
                className="img-fluid rounded"
                style={{ maxHeight: "350px", top:'100px', position:'relative' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WordPressBenfits;
