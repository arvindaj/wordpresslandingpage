import 'bootstrap/dist/css/bootstrap.min.css';
import defaultLogo from '../assets/img/pavallogo.png'; 
import '../assets/css/header.css';

const Headersection = () => {
    return (
        <header className="header py-3 border-bottom border-dark">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-3 gap-md-0">

                {/* Logo & Growth */}
                <div className="d-flex flex-column flex-sm-row align-items-center position-relative">
                    <img
                        src={defaultLogo}
                        alt="Paval Soft Logo"
                        className="me-0 me-sm-3 mb-2 mb-sm-0"
                        style={{ maxHeight: "55px" }}
                        onError={(e) => { e.target.src = "https://via.placeholder.com/50"; }}
                    />

                    {/* Vertical Line - Hide on XS */}
                    <div className="vr bg-dark d-none d-md-block mx-3"
                        style={{ height: "40px", opacity: 0.8 }}
                    ></div>

                    {/* Growth Button */}
                    <a
                        href="#"
                        className=" p-2 mt-2 mt-sm-0 ms-sm-3 rounded-pill shadow-sm text-decoration-none d-flex align-items-center justify-content-center gap-2"
                        style={{
                            backgroundColor: "#f8f9fa",
                            border: "1px solid #ddd",
                            fontSize: "15px",
                            letterSpacing: "0.1em",
                            color: "#000",
                            fontFamily: "Libre Franklin",
                             position:'relative',
                                left:'-80px',
                                bottom:'-40px'
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                width: "10px",
                                height: "10px",
                                backgroundColor: "#B6ED55",
                                borderRadius: "50%",
                               
                            }}
                        ></span>
                        Growth
                    </a>
                </div>

                {/* Contact Numbers */}
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 gap-md-3 fs-6">
                    <span>
                        <img src="https://flagcdn.com/in.svg" alt="India" width="18" className="me-1" />
                        +91 6307050902
                    </span>
                    <span>
                        <img src="https://flagcdn.com/au.svg" alt="Australia" width="18" className="me-1" />
                        +74 402720107
                    </span>
                    <span>
                        <img src="https://flagcdn.com/gb.svg" alt="UK" width="18" className="me-1" />
                        +61 449840901
                    </span>
                </div>

                {/* Right Side - Let's Talk */}
                <div className="d-flex flex-column flex-sm-row align-items-center position-relative">
                    {/* Vertical Line - Hide on XS */}
                    <div className="vr bg-dark d-none d-md-block me-sm-3 mb-2 mb-sm-0"
                        style={{ height: "40px", opacity: 0.8 }}
                    ></div>

                    {/* Let's Talk Button */}
                    <button className="btn btn-dark rounded-pill px-3 px-lg-4 py-2 mt-2 mt-sm-0">
                        Let's Talk
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Headersection;
