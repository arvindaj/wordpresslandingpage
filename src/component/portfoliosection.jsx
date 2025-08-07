import React from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import user4 from "../assets/img/portfolio4.png";
import user2 from "../assets/img/portfolio2.1.png";
import user1 from "../assets/img/portfolio1.png";
import { FaCheckCircle } from "react-icons/fa";
import { BsArrowUpCircle } from "react-icons/bs";
import '../assets/css/portfoliosection.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


const PortfolioSection = () => {




  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust duration
  }, []);


  return (
    <section className="py-3 bg-white">
      <div className="container">
        {/* Portfolio Tag */}
        <span className="rounded-pill bg-light text-dark mb-3 px-3 py-2 d-inline-block">
          <i className="bi bi-dot fs-3"></i> Portfolios
        </span>

        {/* Heading */}
        <h2 className="fw-bold mb-5 fs-1 text-wrap">
          The Masterpieces We Have <br /> Crafted So Far
        </h2>

        {/* Grid */}
        <div className="row g-4">
          {/* First Project Card */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0 h-100">
              <img
                src={user1}
                className="card-img-top img-fluid"
                alt="MLON Project"
                data-aos="fade-up"
              />

              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h1 className="text-center">86M+</h1>
                  <h6 className='fs-5 mt-0 text-center'>Growth Business</h6>
                </div>
                <div className="bg-dark text-white text-center p-3 rounded-3 mt-3">
                  <span className="mb-2 fs-2 d-block">Focused on Growth</span>
                  <button className="badge btn mt-2 fs-6 text-center join-now-btn">
                    Join now
                  </button>

                </div>
              </div>
            </div>
          </div>

          {/* Custom Project */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card bg-dark text-white border-0 h-100">
              <img
                src={user2}
                className="card-img-top img-fluid"
                alt="Custom Project"
                data-aos="zoom-in"
              />
              <div className="card-body position-relative" style={{ top: "10px" }}>
                <span className="btn mb-lg-3 mt-lg-2" style={{ backgroundColor: '#8EC440' }}>Custom Project</span>
                <h1 className="card-title mx-1 fs-1 mt-2">Create Your Custom Project</h1>
                <a href="#" className="text-white fw-semibold mt-lg-4 d-flex align-items-center fs-4 mx-2 learn-more-link">
                  Learn more
                  <FaCheckCircle className="ms-2" style={{ color: '#8EC440' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Blog Series Card */}
          <div className="col-12 col-md-12 col-lg-5">
            <div className="card border-0 h-100">
              <div className="card-body bg-light mb-4">
                <h1 className="card-title fw-bold fs-1">
                  Building Authority Through Storytelling
                </h1>
                <p className="card-text fs-4 mt-5">
                  Create a blog series and video content to position the brand as an industry leader.
                </p>
                <a href="#" className=" text-black fs-5 learn-more-link">
                  Learn more <BsArrowUpCircle className="ms-2" />
                </a>
              </div>

              <div className='row g-3'>
                {/* WordPress Web Service */}
                <div className='col-12 col-md-6'>
                  <div className="card bg-dark text-white shadow-sm border-0 h-100">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <span className="btn mb-2 mt-2 fs-6" style={{ backgroundColor: '#8EC440' }}>WordPress Web Service</span>
                        <h5 className=" fs-3 mt-4">
                          Engaging Your Audience, One Post at a Time
                        </h5>
                      </div>
                      <a href="#" className="text-white fw-semibold mb-4 d-flex align-items-center fs-4 mx-2 learn-more-link">
                        Learn more
                        <FaCheckCircle className="ms-2" style={{ color: '#8EC440' }} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className='col-12 col-md-6'>
                  <div className="text-center">
                    <img
                      src={user4}
                      alt="Start Website"
                      className="img-fluid mb-2"
                      data-aos="fade-left"
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
