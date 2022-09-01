import React from "react";

const Nav = ({ displayNav, setDisplayNav }) => {
    return (
        <>
            <nav className="main-nav">
                <div className="nav-bin">
                    <div className="menu-label">Menu</div>
                </div>
            </nav>
            <div
                className="extended-nav"
                style={
                    displayNav
                        ? {
                              display: "flex",
                              animation: "0.75s slideLeft forwards",
                          }
                        : {
                              display: "none",
                              animation: "0.75s slideRight forwards",
                          }
                }
            >
                <ul className="top-nav-list">
                    <li>APPROACH</li>
                    <li>SERVICES</li>
                    <li>PROJECT</li>
                    <li>LEADERSHIP</li>
                </ul>
                <div className="nav-block"></div>
                <ul className="bottom-nav-list">
                    <li>ABOUT OMICRON</li>
                    <li>CAREERS</li>
                    <li>NEWS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className="nav-icon">
                <svg
                    onClick={() => setDisplayNav((prevDisplay) => !prevDisplay)}
                    className="hamburger"
                    viewBox="0 0 10 8"
                    width="40"
                >
                    <path
                        d="M1 1h8M1 4h 8M1 7h8"
                        stroke="#53565a"
                        strokeWidth="1"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
            <div className="arrow-left"></div>
        </>
    );
};

export default Nav;
