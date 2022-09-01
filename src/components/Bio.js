import React from "react";
import { approaches } from "../data/approaches";

const Bio = () => {
    return (
        <>
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
                        {approaches.map((approach) => {
                            return (
                                <li key={approach.number}>
                                    <div className="approach">
                                        <div className="approach-number">{`0${approach.number}.`}</div>
                                        <p className="approach-description">
                                            {approach.title}
                                        </p>
                                    </div>
                                    <div className="more-info">
                                        {approach.description}
                                        <br></br>
                                        <br></br>
                                        <a className="learn-more">Learn More</a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </aside>
            </section>
        </>
    );
};

export default Bio;
