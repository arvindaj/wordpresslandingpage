
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

import user1 from "../assets/img/user1.png"; // Replace with your user images
import user2 from "../assets/img/user2.png";
import user3 from "../assets/img/user3.png";
import '../assets/css/WordPressService.css';

const WordPressService = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center col-lg-12">
                    {/* Left Section */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <span className="badgeservice bg-light text-dark px-3 py-2 mb-5 shadow-sm rounded-pill">
                            <span className="me-2 bg-light rounded-circle d-inline-block " style={{ width: "10px", height: "10px",}}></span>
                            Digital Landscape
                        </span>

                        <h1 className="fw-bold mb-3 py-4 display-5">WordPress Development Services</h1>
                        <p className="text-muted mb-4">
                            Discover our growing range of WordPress web development services that aim to empower businesses
                            with a custom-built and unique website.
                        </p>

                        {/* Rating & Stats */}
                        <div className="d-flex align-items-center gap-4 flex-wrap">
                            <div className="col-6">
                               

                                <div className="d-flex align-items-center">
                                      <span className="fw-bold me-1">5.0</span>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-warning me-1" />
                                    ))}
                                    <img src={user1} alt="user1" className="rounded-circle me-1" style={{ width: "65px", height: "65px" }} />
                                    <img src={user2} alt="user2" className="rounded-circle me-1" style={{ width: "65px", height: "65px" }} />
                                    <img src={user3} alt="user3" className="rounded-circle me-2" style={{ width: "65px", height: "65px" }} />

                                </div>

                            </div>
                            <div className="col">

                            </div>
                            <div>
                                <h6 className="mb-0 fw-bold">125K+</h6>
                                <small className="text-muted">Success Probability</small>
                            </div>
                            <div>
                                <h6 className="mb-0 fw-bold">9,99%</h6>
                                <small className="text-muted">Success Probability</small>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-6 col-md-12">
                        <div className="p-4 text-white rounded-4 shadow" style={{ backgroundColor: '#514E4E' }}>
                            <div className="mb-4">
                                <h6 className="fw-bold fs-5">WordPress Theme Development</h6>
                                <p className="text-light small mb-0 ">
                                    Build WordPress themes to amplify the look and feel of your website,
                                    standardize web pages or for marketplace selling.
                                </p>
                            </div>

                            <div className="mb-4">
                                <h6 className="fw-bold fs-5">WordPress Migration Services</h6>
                                <p className="text-light small mb-0">
                                    Migrate from other CMS platforms to the awesomeness of WordPress with our expertise.
                                </p>
                            </div>

                            <div>
                                <h6 className="fw-bold fs-5">WordPress API Integration</h6>
                                <p className="text-light small mb-0">
                                    Integrate your WordPress applications and web services with other applications
                                    with API integration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WordPressService;
