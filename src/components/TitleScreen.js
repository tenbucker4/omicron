import React from "react";

const TitleScreen = ({ displayNav }) => {
    return (
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
    );
};

export default TitleScreen;
