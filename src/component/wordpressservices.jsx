import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import user1 from "../assets/img/user1.png";
import user2 from "../assets/img/user2.png";
import user3 from "../assets/img/user3.png";
import '../assets/css/wordpressservice.css';

const WordPressService = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section className="py-4">
            <div className="container">
                <div className="row align-items-center col-lg-12">
                    {/* Left Section */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0" data-aos="fade-right">
                        <span
                            className="d-inline-flex align-items-center px-3 py-1 mb-2 rounded-pill"
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
                           Dominate Digital!
                        </span>

                        <h1 className="fw-bold mb-2 py-4 display-5 mx-4">WordPress Development Services</h1>
                        <p className="text-muted mb-4 mx-4">
                            Pavalsoft helps brands to unlock digital excellence with WordPress. We code every pixel intentionally for branding excellence, whether you're trace the brand among your existing sites, or are you starting something new!

                        </p>

                        {/* Rating & Stats */}
                        <div className="d-flex align-items-center gap-4 flex-wrap">
                            <div className="col-6">
                                <div className="d-flex align-items-center mx-4">
                                    <span className="fw-bold me-1">5.0</span>
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-warning me-1" />
                                    ))}
                                    <img src={user1} alt="user1" className="rounded-circle me-1" style={{ width: "65px", height: "65px" }} />
                                    <img src={user2} alt="user2" className="rounded-circle me-1" style={{ width: "65px", height: "65px" }} />
                                    <img src={user3} alt="user3" className="rounded-circle me-2" style={{ width: "65px", height: "65px" }} />
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-0 fw-bold mx-4 mx-lg-0">125K+</h6>
                                <small className="text-muted mx-1">Success Probability</small>
                            </div>
                            <div>
                                <h6 className="mb-0 fw-bold mx-4">9.99%</h6>
                                <small className="text-muted mx-4">Success Probability</small>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-6 col-md-12" data-aos="fade-left">
                        <div className="p-4 text-white rounded-4 shadow" style={{ backgroundColor: '#514E4E' }}>
                            <div className="mb-4" data-aos="fade-up" data-aos-delay="100">
                                <h6 className="fw-bold fs-5">Experience that Converts</h6>
                                <p className="text-light small mb-0">
                                    From default "landing pages" to advanced "portals" - we can design the flows that engage the interactive experience to convert users.
                                </p>
                            </div>

                            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
                                <h6 className="fw-bold fs-5">Speed with Security
</h6>
                                <p className="text-light small mb-0">
                                  Fast loaded, Modules fortified, WordPress builds that you will never ever sacrifice speed for security. 

                                </p>
                            </div>

                            <div data-aos="fade-up" data-aos-delay="300">
                                <h6 className="fw-bold fs-5">Future Ready Framework</h6>
                                <p className="text-light small mb-0">
                                    Future ready detailed developed scalable WordPress architectures that are practical for the problems of tomorrow.
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
