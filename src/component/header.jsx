import 'bootstrap/dist/css/bootstrap.min.css';
import defaultLogo from '../assets/img/pavallogo.png'; // Local import as fallback

import locateicon from '../assets/img/XMLID_5_.png';
import '../assets/css/header.css'
const Headersection = () => {
    return (
        <header className="header  py-2 ">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo d-flex align-items-first pb-5">
                    <img
                        src={defaultLogo}
                        alt="Paval Soft Logo"
                        className="me-0"
                        style={{ maxHeight: "60px" }}
                        onError={(e) => {
                            e.target.src = "https://via.placeholder.com/50";
                        }}
                    />

                    {/* Vertical Line */}
                    {/* <div
                        className="vr text-dark"
                        style={{
                            height: "50px",
                            opacity: 1,
                            transform: "rotate(0deg)",
                            position: "absolute",
                            top: "0",
                            left: "350px",
                        }}
                    ></div> */}

                    {/* Horizontal Line */}
                    {/* <div
                        className="vr text-dark"
                        style={{
                            height: "565px",
                            opacity: 1,
                            transform: "rotate(-90deg)",
                            position: "absolute",
                            top: "-210px",
                            left: "0px",
                        }}
                    ></div> */}
                    {/* <div
                        className="line3 text-dark"
                    ></div> */}


                    {/* Growth Button */}
                    <div>
                        <a
                            href="#"
                            style={{
                                left: "300px",
                                top: "80px",
                                position: "absolute",
                                backgroundColor: "#f8f9fa",
                                border: "1px solid #ddd",
                                padding: "5px 20px",
                                borderRadius: "50px",
                                fontFamily: "Libre Franklin",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "16px",
                                lineHeight: "100%",
                                letterSpacing: "0.15em",
                                color: "#000",
                                textDecoration: "none",
                                boxShadow: "0 0 4px rgba(0,0,0,0.2)",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            {/* Green Dot */}
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


                </div>

                <div className="flag d-flex align-items-center mb-4 gap-5">
                    <span className="me-3">
                        <img
                            src="https://flagcdn.com/in.svg"
                            alt="India Flag"
                            width="20"
                            className="me-1"
                        />
                        +91 6307050902
                    </span>
                    <span className="me-3">
                        <img
                            src="https://flagcdn.com/au.svg"
                            alt="Australia Flag"
                            width="20"
                            className="me-1"
                        />
                        +74 402720107
                    </span>
                    <span>
                        <img
                            src="https://flagcdn.com/gb.svg"
                            alt="UK Flag"
                            width="20"
                            className="me-1"
                        />
                        +61 449840901
                    </span>
                    {/* <div className='line4'>

                    </div> */}
                </div>
                <div className="lets-talk mb-3">
                    {/* <div
                        className="vr text-dark"
                        style={{
                            height: "60px",
                            opacity: 1,
                            transform: "rotate(0deg)",
                            position: "absolute",
                            top: "0",
                            right: '20%'
                        }}
                    ></div> */}
                    <button className="btn btn-dark btn-sm let-talk mb-2 border-3">Let's Talk</button>

                </div>
            </div>
        </header>
    );
};

export default Headersection;