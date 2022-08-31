import React, { useEffect, useState } from "react";

const Home = () => {
    const [displayNav, setDisplayNav] = useState(false);

    useEffect(() => {
        if (displayNav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [displayNav]);

    return (
        <>
            <main
                style={displayNav ? { overflow: "hidden" } : { opacity: "1" }}
            >
                <div className="home-screen">
                    <div className="title-div">
                        <div className="company-name">OMICRON</div>
                        <img
                            className="omicron-logo"
                            src={require("../images/omicron-logo.png")}
                        ></img>
                    </div>
                    <h1
                        className="home-header"
                        style={displayNav ? { opacity: "0" } : { opacity: "1" }}
                    >
                        A<br></br>BETTER<br></br>WAY
                    </h1>
                </div>
                <nav className="main-nav">
                    <div className="nav-bin">
                        <div className="menu-label">Menu</div>
                    </div>
                </nav>
                <div className="nav-icon">
                    <svg
                        onClick={() =>
                            setDisplayNav((prevDisplay) => !prevDisplay)
                        }
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
                <div className="arrow-left"></div>
                <section className="about-us">
                    <div className="block"></div>
                    <h4>WHO WE ARE</h4>
                    <br></br>
                    <div className="about-us-header">
                        Innovation through integration
                    </div>
                    <p className="company-bio">
                        Omicron offers full development, design and construction
                        services to maximize value for our clients. With all
                        professionals under one roof, we compete more
                        effectively in a market that expects immediate
                        turnaround and maximum efficiency. The benefits are
                        enhanced by how we leverage a host of technologies in
                        all our projects.
                    </p>
                    <aside className="approaches">
                        <ul>
                            <li>
                                <div className="approach-number">01.</div>
                                <p className="approach-description">
                                    Development
                                </p>
                            </li>
                            <li>
                                <div className="approach-number">02.</div>
                                <p className="approach-description">
                                    Architecture
                                </p>
                            </li>
                            <li>
                                <div className="approach-number">03.</div>
                                <p className="approach-description">
                                    Interior Design
                                </p>
                            </li>
                            <li>
                                <div className="approach-number">04.</div>
                                <p className="approach-description">
                                    Engineering
                                </p>
                            </li>
                            <li>
                                <div className="approach-number">05.</div>
                                <p className="approach-description">
                                    Maintenance
                                </p>
                            </li>
                            <li>
                                <div className="approach-number">06.</div>
                                <p className="approach-description">
                                    Construction
                                </p>
                            </li>
                        </ul>
                    </aside>
                </section>
                <div className="featured-project">
                    <div className="project-overlay"></div>
                </div>
            </main>
        </>
    );
};

export default Home;
