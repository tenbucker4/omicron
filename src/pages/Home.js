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
                <div>Innovation through integration</div>
                <p>
                    Omicron offers full development, design and construction
                    services to maximize value for our clients. With all
                    professionals under one roof, we compete more effectively in
                    a market that expects immediate turnaround and maximum
                    efficiency. The benefits are enhanced by how we leverage a
                    host of technologies in all our projects.
                </p>
            </section>
        </>
    );
};

export default Home;
