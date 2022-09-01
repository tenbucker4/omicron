import React from "react";

const FeaturedArticles = () => {
    return (
        <>
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
        </>
    );
};

export default FeaturedArticles;
