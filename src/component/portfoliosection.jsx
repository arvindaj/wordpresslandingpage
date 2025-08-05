import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import user4 from "../assets/img/portfolio4.png";
import user3 from "../assets/img/portfolio3.png";
import user2 from "../assets/img/portfolio2.png";
import user1 from "../assets/img/portfolio1.png";
import { FaCheckCircle } from "react-icons/fa";


const PortfolioSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Portfolio Tag */}
        <span className="rounded-pill bg-light text-dark mb-3 px-3 py-2">
          <i className="bi bi-dot fs-3"></i> Portfolios
        </span>

        {/* Heading */}
        <h2 className="fw-bold mb-5 fs-1">The Masterpieces We Have <br /> Crafted So Far</h2>

        {/* Grid */}
        <div className="row g-4">
          {/* First Project Card */}
          <div className="col-md-3">
            <div className="card border-0 ">
              <img src={user1} className="card-img-top" alt="MLON Project" style={{ height: "360px" }} />
              <div className="card-body" style={{ height: "280px" }}>
                <h1 className="text-center">86M+</h1>
                <h6 className='fs-5 mt-0 text-center'> Growth Business
                </h6>

                <div className=" bg-dark text-white text-center p-lg-4" style={{ height: "175px", borderRadius: "15px" }}>

                  <span className="mb-3 fs-3">Focused on Growth</span>
                  <br></br>
                  <button className=" badge btn mt-2 text-center text-black">Join now</button>
                </div>

              </div>
            </div>
          </div>

          {/* Custom Project */}
          <div className="col-md-4">
            <div className=" bg-dark text-white  border-0 card" style={{ height: "500px" }}>
              <img src={user2} className="card-img-top" alt="Custom Project" />
              <div className="position-relative card-body" style={{
                top: "-150px",
              }}>
                <span className="badge bg-success mb-2 fs-5">Custom Project</span>
                <h5 className="card-title mx-1">Creative Your custom Project</h5>
                <a
                  href="#"
                  className="text-white fw-semibold mt-2 d-flex align-items-center fs-5 mx-2"
                >
                  Learn more
                  <FaCheckCircle className="ms-2 " style={{ color: '#8EC440' }} />
                </a>
              </div>
            </div>
          </div>

          {/* Blog Series Card */}
          <div className="col-md-5">
            <div className="card   border-0  p-3">
              <div className="card-body bg-light mb-5" style={{ height: "320px" }}>
                <h1 className="card-title fw-bold">Building Authority Through Storytelling</h1>
                <p className="card-text fs-5 mt-4">Create a blog series and video content to position the brand as an industry leader.</p>
                <a href="#" className="text-black btn-dark ">Learn more  ↓</a>
              </div>

              <div className='row'>
                <div className='col-6'>
                  <div className="card bg-dark text-white shadow-sm border-0 ">
                    {/* <img src={user3} className="" alt="WordPress"/> */}
                    <div className="card-body" style={{ height: "250px" }}>
                      <span className="badge bg-success mb-4 mt-3">WordPress Web Service</span>
                      <h5 className="card-title">Engaging Your Audience, One Post at a Time</h5>
                     <a
                  href="#"
                  className="text-white fw-semibold mt-2 d-flex align-items-center "
                >
                  Learn more
                  <FaCheckCircle className="ms-2" style={{ color: '#8EC440' }} />
                </a>
                    </div>
                  </div>
                </div>

                {/* WordPress Web Service */}
                <div className='col-6 mt-0' >
                  <div className="text-center">
                    <img src={user4} alt="Start Website" className="mb-2" style={{ height: "200px" }} />
                    <a href="#" className="btn btn-dark">Start Your Website Today</a>
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
