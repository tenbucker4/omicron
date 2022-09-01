import React, { useState } from "react";
import TitleScreen from "../components/TitleScreen";
import Nav from "../components/Nav";
import Bio from "../components/Bio";
import FeaturedArticles from "../components/FeaturedArticles";
import Footer from "../components/Footer";

const Home = () => {
    const [displayNav, setDisplayNav] = useState(false);

    return (
        <>
            <main
                style={displayNav ? { overflow: "hidden" } : { opacity: "1" }}
            >
                <TitleScreen
                    displayNav={displayNav}
                    setDisplayNav={setDisplayNav}
                />
                <Nav displayNav={displayNav} setDisplayNav={setDisplayNav} />
                <Bio />
                <FeaturedArticles />
                <Footer />
            </main>
        </>
    );
};

export default Home;
