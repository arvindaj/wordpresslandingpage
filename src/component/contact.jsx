import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactCard = () => {
    return (
        <div className="container my-5">
            <div
                className="rounded-4 p-0 overflow-hidden"
                style={{
                    display: 'flex',
                    background: 'linear-gradient(102.81deg, #1E1E1E 50.12%, rgba(142, 196, 64, 0.9) 161.15%)',
                }}
            >
                {/* Left Section */}
                <div className="text-white p-5 flex-grow-1" style={{ maxWidth: '60%' }}>
                    <button className="bg-while bn rounded-pill mb-4 px-4 py-2 d-flex align-items-center gap-2">
                        <span
                            style={{
                                display: "inline-block",
                                width: "10px",
                                height: "10px",
                                backgroundColor: "#B6ED55",
                                borderRadius: "50%",
                            }}
                        ></span>
                        <span className="fw-bold text-dark">Reach Us</span>
                    </button>

                    <h1 className="fw-bold display-3">
                        Listen To What They Say.
                    </h1>
                    <p className="text-white-50 mt-3" style={{ maxWidth: '85%' }}>
                        Lorem ipsum dolor sit amet consectetur. Viverra et tempor faucibus
                        nibh porta auctor. Est duis bibendum elementum neque cursus risus
                        ornare turpis viverra. Sed pulvinar interdum maecenas enim non
                        tempor a.
                    </p>
                </div>

                {/* Right Section - Form */}
                <div
                    className="bg-white p-4"
                    style={{ width: '100%', maxWidth: '400px', borderRadius: '20px', margin: '20px' }}
                >
                    <h5 className="fw-semibold mb-4 text-center">Quick Proposal</h5>
                    <form>
                        <input type="text" placeholder="Name" className="form-control mb-3" />
                        <input type="email" placeholder="Email" className="form-control mb-3" />

                        <div className="input-group mb-3">
                            <select className="form-select" style={{ maxWidth: '100px' }}>
                                <option value="+91">IN (+91)</option>
                                <option value="+1">US (+1)</option>
                                <option value="+44">UK (+44)</option>
                            </select>
                            <input type="tel" placeholder="Phone Number" className="form-control" />
                        </div>

                        <textarea
                            rows="4"
                            placeholder="Your message..."
                            className="form-control mb-4"
                        ></textarea>

                        <div className="d-grid">
                            <button className="btn btn-dark rounded-pill" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
