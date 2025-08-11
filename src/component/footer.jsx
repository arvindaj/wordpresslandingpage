import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/css/footer.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        {/* Contact Info */}
        <div className="row text-center text-md-start mb-4">
          

          <div className="row address-section">
            {/* India */}
            <div className="col-12 col-sm-6 col-md-3 mb-3">
            <p className="mb-1">📧 Mail</p>
            <a
              href="mailto:info@pavalsoftware.com"
              className="text-decoration-none"
              style={{ color: "#8EC440", wordBreak: "break-word" }}
            >
              info@pavalsoftware.com
            </a>
          </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex align-items-start">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India Flag"
                className="flag-icon"
              />
              <div>
                <p className="mb-1">
                  53-2, Second Floor, 3rd Cross, MKP Colony Main St, Ganapathy, Coimbatore-641012
                </p>
                <span className="phone-number">+91 6380750902</span>
              </div>
            </div>

            {/* UK */}
            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex align-items-start">
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="UK Flag"
                className="flag-icon"
              />
              <div>
                <p className="mb-1">
                  47, Shaughnessy Way, Houlton, Rugby, CV23 1AU, United Kingdom
                </p>
                <span className="phone-number">+44 7402702107</span>
              </div>
            </div>

            {/* Australia */}
            <div className="col-12 col-sm-6 col-md-3 mb-3 d-flex align-items-start">
              <img
                src="https://flagcdn.com/w20/au.png"
                alt="Australia Flag"
                className="flag-icon"
              />
              <div>
                <p className="mb-1">
                  5/23, Langhorne St, Dandenong, VIC - 3175, Australia
                </p>
                <span className="phone-number">+61 449840901</span>
              </div>
            </div>
          </div>


        </div>

        {/* Heading with flex-grow-1 line */}
        <div className="d-flex align-items-center mb-3 flex-wrap">
          <h5
            className="fw-bold mb-2 mb-md-0 me-3 fs-6 fs-lg-0"
            style={{ color: "#8EC440", whiteSpace: "nowrap" }}
          >
            Our Word Press Service <br className="d-none d-md-block" />
            Industries
          </h5>

          <div
            className="flex-grow-1"
            style={{
              height: "8px",
              borderRadius: "4px",
              background:
                "linear-gradient(90deg, #A7E252 0%, rgba(92, 124, 45, 0.29) 100%)",
            }}
          ></div>
        </div>

        {/* Industry Columns */}
        <div className="row">
          {[
            [
              "Custom Website",
              "Custom Landing Page",
              "IT / Non IT Sectors",
              "Educational Institution",
              "Manufacturer Industries",
              "E-Commerce Website",
            ],
            [
              "Banking Sector",
              "Gaming & App",
              "Public Sector",
              "Corporate Sector",
              "Wellness/ Fitness",
              "Training Sector",
            ],
            [
              "Leather & Wood",
              "Animal Care Taker",
              "Bird Care Taker",
              "Textile Industries",
            ],
            [
              "Cooking Industries",
              "Travel Industries",
              "Tourist Sector",
              "Agriculture",
              "Beauty & Saloon",
              "Forex & Trading",
            ],
          ].map((col, i) => (
            <div className="col-12 col-sm-6 col-md-3 mb-3" key={i}>
              <ul className="list-unstyled mb-0 small">
                {col.map((item, j) => (
                  <li key={j} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-top border-secondary pt-3 text-muted mt-3">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
              <a href="#" className="text-decoration-none text-light">
                Terms of Use
              </a>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end text-light">
              © 2025, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
