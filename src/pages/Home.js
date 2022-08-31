import React from "react";

const Home = () => {
    return (
        <>
            <div className="home-screen">
                <img
                    className="home-image"
                    src={require("../images/modern-building.jpeg")}
                ></img>
                <div className="title-div">
                    <div className="company-name">OMICRON</div>
                    <img
                        className="omicron-logo"
                        src={require("../images/omicron-logo.png")}
                    ></img>
                </div>
                <h1 className="home-header">
                    A<br></br>BETTER<br></br>WAY
                </h1>
            </div>
            <nav className="main-nav">
                <div className="nav-bin"></div>
            </nav>
            <svg className="hamburger" viewBox="0 0 10 8" width="40">
                <path
                    d="M1 1h8M1 4h 8M1 7h8"
                    stroke="#53565a"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
            </svg>
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
                    professionals under one roof, we compete more effectively in
                    a market that expects immediate turnaround and maximum
                    efficiency. The benefits are enhanced by how we leverage a
                    host of technologies in all our projects.
                </p>
                <aside className="approaches">
                    <ul>
                        <li>
                            <div className="approach-number">01.</div>
                            <p className="approach-description">Development</p>
                        </li>
                        <li>
                            <div className="approach-number">02.</div>
                            <p className="approach-description">Architecture</p>
                        </li>
                        <li>
                            <div className="approach-number">03.</div>
                            <p className="approach-description">
                                Interior Design
                            </p>
                        </li>
                        <li>
                            <div className="approach-number">04.</div>
                            <p className="approach-description">Engineering</p>
                        </li>
                        <li>
                            <div className="approach-number">05.</div>
                            <p className="approach-description">Maintenance</p>
                        </li>
                        <li>
                            <div className="approach-number">06.</div>
                            <p className="approach-description">Construction</p>
                        </li>
                    </ul>
                </aside>
            </section>
            <div className="featured-project">
                <img
                    className="project-image"
                    src={require("../images/modern-office.jpeg")}
                ></img>
            </div>
        </>
    );
};

export default Home;
