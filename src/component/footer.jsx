import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        {/* Contact Info */}
        <div className="row text-center text-md-start mb-4">
          <div className="col-md-3 mb-3">
            <p>📧 Mail<br />
              <a href="mailto:info@pavalsoftware.com" className=" text-decoration-none" style={{ color: '#8EC440' }}>info@pavalsoftware.com</a>
            </p>

          </div>
          <div className="col-md-3 mb-3">
            <p>
              🇮🇳 53-2, Second Floor, 3rd Cross, MKP Colony Main St, Ganapathy, Coimbatore-641012<br />
              <span style={{ color: "#8EC440" }}>+91 6380750902
              </span>

            </p>
          </div>
          <div className="col-md-3 mb-3">
            <p>
              🇬🇧 47, Shaughnessy Way, Houlton, Rugby, CV23 1AU, United Kingdom<br />
              <span style={{ color: "#8EC440" }}>+44 7402702107
              </span>

            </p>
          </div>
          <div className="col-md-3 mb-3">
            <p>
              🇦🇺 5/23, Langhorne St, Dandenong, VIC - 3175, Australia <br />
              <span style={{ color: "#8EC440" }}>
                +61 449840901
              </span>
            </p>

          </div>
        </div>


        <div className="d-flex align-items-center mb-3">
          <h5
            className="fw-bold mb-0 me-3"
            style={{ color: "#8EC440", whiteSpace: "nowrap" }}
          >
            Our Word Press Service Industries
          </h5>

          <div
            className="flex-grow-1"
            style={{
              height: "8px",
              borderRadius: "4px",
              background: "linear-gradient(90deg, #A7E252 0%, rgba(92, 124, 45, 0.29) 100%)",
            }}
          ></div>
        </div>





        {/* Industry Columns */}
        <div className="row">
          {[
            ["Custom Website", "Custom Landing Page", "IT / Non IT Sectors", "Educational Institution", "Manufacturer Industries", "E-Commerce Website"],
            ["Banking Sector", "Gaming & App", "Public Sector", "Corporate Sector", "Wellness/ Fitness", "Training Sector"],
            ["Leather & Wood", "Animal Care Taker", "Bird Care Taker", "Textile Industries"],
            ["Cooking Industries", "Travel Industries", "Tourist Sector", "Agriculture", "Beauty & Saloon", "Forex & Trading"]
          ].map((col, i) => (
            <div className="col-md-3 col-sm-6 mb-3" key={i}>
              <ul className="list-unstyled">
                {col.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-top border-secondary pt-3 text-muted">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Side */}
              <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
                <a href="#" className="text-decoration-none text-light">
                  Terms of Use
                </a>
              </div>

              {/* Right Side */}
              <div className="col-12 col-md-6 text-center text-md-end text-light">
                © 2025, All Rights Reserved
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
