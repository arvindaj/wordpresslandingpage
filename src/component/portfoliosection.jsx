import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import user4 from "../assets/img/portfolio4.png";
import user3 from "../assets/img/portfolio3.png";
import user2 from "../assets/img/portfolio2.png";
import user1 from "../assets/img/portfolio1.png";
import { FaCheckCircle } from "react-icons/fa";
import '../assets/css/portfoliosection.css'




const PortfolioSection = () => {
  return (
    <section className="py-5 bg-white">
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
          <div className="col-12 col-sm-6 col-md-3">
            <div className="card border-0 h-100">
              <img src={user1} className="card-img-top img-fluid" alt="MLON Project" />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h1 className="text-center">86M+</h1>
                  <h6 className='fs-5 mt-0 text-center'>Growth Business</h6>
                </div>
                <div className="bg-dark text-white text-center p-3 rounded-3 mt-3">
                  <span className="mb-2 fs-5 d-block">Focused on Growth</span>
                  <button className="badge btn mt-2 text-center text-black bg-light">Join now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Project */}
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card bg-dark text-white border-0 h-100">
              <img src={user2} className="card-img-top img-fluid" alt="Custom Project" />
              <div className="card-body position-relative" style={{ top: "-50px" }}>
                 <span className="btn mb-3 mt-2" style={{
                          backgroundColor:'#8EC440'
                        }}>Custom Project</span>
                <h5 className="card-title mx-1">Create Your Custom Project</h5>
                <a
                  href="#"
                  className="text-white fw-semibold mt-2 d-flex align-items-center fs-6 mx-2"
                >
                  Learn more
                  <FaCheckCircle className="ms-2" style={{ color: '#8EC440' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Blog Series Card */}
          <div className="col-12 col-md-5">
            <div className="card border-0 h-100">
              <div className="card-body bg-light mb-4">
                <h1 className="card-title fw-bold fs-4">
                  Building Authority Through Storytelling
                </h1>
                <p className="card-text fs-6 mt-3">
                  Create a blog series and video content to position the brand as an industry leader.
                </p>
                <a href="#" className="btn btn-dark mt-2">Learn more ↓</a>
              </div>

              <div className='row g-3'>
                <div className='col-12 col-sm-6'>
                  <div className="card bg-dark text-white shadow-sm border-0 h-100">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <span className="btn mb-3 mt-2" style={{
                          backgroundColor:'#8EC440'
                        }}>WordPress Web Service</span>
                        <h5 className="card-title fs-6">
                          Engaging Your Audience, One Post at a Time
                        </h5>
                      </div>
                      <a
                        href="#"
                        className="text-white fw-semibold mt-2 d-flex align-items-center"
                      >
                        Learn more
                        <FaCheckCircle className="ms-2" style={{ color: '#8EC440' }} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* WordPress Web Service */}
                <div className='col-12 col-sm-6'>
                  <div className="text-center">
                    <img src={user4} alt="Start Website" className="img-fluid mb-2" />
                    <a href="#" className="btn btn-dark w-100">Start Your Website Today</a>
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
