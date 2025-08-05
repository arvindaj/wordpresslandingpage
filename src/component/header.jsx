import 'bootstrap/dist/css/bootstrap.min.css';
import defaultLogo from '../assets/img/pavallogo.png';
import '../assets/css/header.css';

const Headersection = () => {
    return (
        <header className="header py-3 border-bottom border-dark">
            <div className="container-fluid">
                <div className="row align-items-center">
                    {/* Left Section - Logo & Growth */}
                    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                        <div className="row align-items-center justify-content-center justify-content-lg-start">
                            <div className="col-auto">
                                <img
                                    src={defaultLogo}
                                    alt="Paval Soft Logo"
                                    className="logo-img"
                                    onError={(e) => { e.target.src = "https://via.placeholder.com/50"; }}
                                />
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <div className="vr bg-dark mx-3" style={{ height: "40px", opacity: 0.8 }}></div>
                            </div>
                            <div className="col-auto d-none d-xl-block ">
                                <a href="#" className="growth-btn">
                                    <span className="dot"></span>
                                    Growth
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Center Section - Contact Numbers */}
                    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="contact-numbers d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 gap-md-3 fs-6">
                                    <div className="contact-item">
                                        <img src="https://flagcdn.com/in.svg" alt="India" className="flag-icon me-1" />
                                        +91 6307050902
                                    </div>
                                    <div className="contact-item">
                                        <img src="https://flagcdn.com/au.svg" alt="Australia" className="flag-icon me-1" />
                                        +74 402720107
                                    </div>
                                    <div className="contact-item">
                                        <img src="https://flagcdn.com/gb.svg" alt="UK" className="flag-icon me-1" />
                                        +61 449840901
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Let's Talk Button */}
                    <div className="col-12 col-lg-4">
                        <div className="row align-items-center justify-content-center justify-content-lg-end">
                            <div className="col-auto d-none d-lg-block">
                                <div className="vr bg-dark me-3" style={{ height: "40px", opacity: 0.8 }}></div>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-dark rounded-pill px-3 px-lg-4 py-2">
                                    Let's Talk
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Headersection;