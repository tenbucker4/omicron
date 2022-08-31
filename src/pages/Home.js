import React, { useEffect, useState } from "react";

const Home = () => {
    const [displayNav, setDisplayNav] = useState(false);

    // useEffect(() => {
    //     if (displayNav) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "visible";
    //     }
    // }, [displayNav]);

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
                                <div className="approach">
                                    <div className="approach-number">01.</div>
                                    <p className="approach-description">
                                        Development{" "}
                                    </p>
                                </div>
                                <div className="more-info">
                                    Our integrated approach provides a
                                    competitive advantage to quickly analyze,
                                    assess and gain early control of
                                    opportunities.
                                    <br></br>
                                    <br></br>
                                    <a className="learn-more">Learn More</a>
                                </div>
                            </li>
                            <li>
                                <div className="approach">
                                    <div className="approach-number">02.</div>
                                    <p className="approach-description">
                                        Architecture{" "}
                                    </p>
                                </div>
                                <div className="more-info">
                                    Our design-led process balances aesthetics
                                    and functionality through the lens of
                                    constructability.
                                    <br></br>
                                    <br></br>
                                    <a className="learn-more">Learn More</a>
                                </div>
                            </li>
                            <li>
                                <div className="approach">
                                    <div className="approach-number">03.</div>
                                    <p className="approach-description">
                                        Interior Design{" "}
                                    </p>
                                </div>
                                <div className="more-info">
                                    We create environments that inspire and
                                    excite while responding to business needs.
                                    <br></br>
                                    <br></br>
                                    <a className="learn-more">Learn More</a>
                                </div>
                            </li>
                            <li>
                                <div className="approach">
                                    <div className="approach-number">04.</div>
                                    <p className="approach-description">
                                        Engineering{" "}
                                    </p>
                                </div>
                                <div className="more-info">
                                    Our structural, mechanical and electrical
                                    engineers ensure safety, functionality and
                                    smart design.
                                    <br></br>
                                    <br></br>
                                    <a className="learn-more">Learn More</a>
                                </div>
                            </li>
                            <li>
                                <div className="approach">
                                    <div className="approach-number">05.</div>
                                    <p className="approach-description">
                                        Construction{" "}
                                    </p>
                                </div>
                                <div className="more-info">
                                    Our team provides expertise early in the
                                    design process resulting in faster, more
                                    efficient, and higher quality projects.
                                    <br></br>
                                    <br></br>
                                    <a className="learn-more">Learn More</a>
                                </div>
                            </li>
                            <li>
                                <div className="approach">
                                    <div className="approach-number">06.</div>
                                    <p className="approach-description">
                                        Maintenance{" "}
                                    </p>
                                </div>
                                <div className="more-info">
                                    We maximize the profitability of your
                                    investment by resolving minor concerns
                                    before they become major issues.
                                    <br></br>
                                    <br></br>
                                    <a className="learn-more">Learn More</a>
                                </div>
                            </li>
                        </ul>
                    </aside>
                </section>
                <div className="featured-project">
                    <div className="project-overlay">
                        <div className="featured-project-heading">
                            Featured Project
                        </div>
                        <a className="learn-more">View Project</a>
                        <div className="project-block"></div>
                    </div>
                </div>
                <section className="featured-material">
                    <div className="featured-leadership">
                        <img
                            className="avatar"
                            src={require("../images/avatar.png")}
                        ></img>
                        <div className="leadership-heading">Leadership</div>
                        <a className="learn-more leadership">Learn More</a>
                        <div className="leadership-block"></div>
                    </div>
                    <div className="featured-article">
                        <div className="leadership-heading">News</div>
                        <a className="learn-more leadership">Learn More</a>
                        <div className="leadership-block"></div>
                    </div>
                </section>
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
            </main>
        </>
    );
};

export default Home;
