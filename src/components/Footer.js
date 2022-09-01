import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="company-logo">
                <div className="company-footer-name">OMICRON</div>
                <img
                    className="omicron-logo"
                    src={require("../images/omicron-logo.png")}
                ></img>
            </div>
            <div className="contact-info">
                <div>Vancouver</div>
                <div>Street Name</div>
                <div>contact@contact.com</div>
            </div>
            <div className="subscribe">
                <div>Subscribe to our mailing list</div>
                <button>Subscribe</button>
            </div>
        </footer>
    );
};

export default Footer;
