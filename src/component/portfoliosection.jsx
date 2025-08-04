import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioSection = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Portfolio Tag */}
        <span className="badge rounded-pill bg-light text-dark mb-3 px-3 py-2">
          <i className="bi bi-dot"></i> Portfolios
        </span>

        {/* Heading */}
        <h2 className="fw-bold mb-5">The Masterpieces We Have <br /> Crafted So Far</h2>

        {/* Grid */}
        <div className="row g-4">
          {/* First Project Card */}
          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="MLON Project" />
              <div className="card-body">
                <h6 className="text-muted">86M+ Growth Business</h6>
                <span className="badge bg-dark text-white mb-2">Focused on Growth</span>
                <button className="btn btn-success btn-sm d-block mt-2">Join now</button>
              </div>
            </div>
          </div>

          {/* Custom Project */}
          <div className="col-md-4">
            <div className="card bg-dark text-white shadow-sm border-0 h-100">
              <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Custom Project" />
              <div className="card-body">
                <span className="badge bg-success mb-2">Custom Project</span>
                <h5 className="card-title">Creative Your custom Project</h5>
                <a href="#" className="btn btn-light btn-sm mt-2">Learn more ↓</a>
              </div>
            </div>
          </div>

          {/* Blog Series Card */}
          <div className="col-md-4">
            <div className="card bg-light shadow-sm border-0 h-100 p-3">
              <div className="card-body">
                <h5 className="card-title fw-bold">Building Authority Through Storytelling</h5>
                <p className="card-text">Create a blog series and video content to position the brand as an industry leader.</p>
                <a href="#" className="btn btn-dark btn-sm">Learn more ↓</a>
              </div>
            </div>
          </div>

          {/* WordPress Web Service */}
          <div className="col-md-6">
            <div className="card bg-dark text-white shadow-sm border-0 h-100">
              <img src="https://via.placeholder.com/500x300" className="card-img-top" alt="WordPress" />
              <div className="card-body">
                <span className="badge bg-success mb-2">WordPress Web Service</span>
                <h5 className="card-title">Engaging Your Audience, One Post at a Time</h5>
                <a href="#" className="btn btn-light btn-sm mt-2">Learn more ↓</a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <img src="https://via.placeholder.com/150x150" alt="Start Website" className="mb-3" />
              <a href="#" className="btn btn-dark">Start Your Website Today</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
