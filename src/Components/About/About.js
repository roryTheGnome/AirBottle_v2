import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about">
            <div className="about-left">
                <img
                    src="https://picsum.photos/id/455/450/550"
                    alt="Misterious Human"
                />
            </div>

            <div className="about-right">
                <h2 className="about-title">About AirWrapper</h2>
                <h4 className="quote">"We take the fresh air, bottle it up and deliver to you"</h4>

                <p className="about-text">
                    AirWrapper is designed to deliver purity and comfort in every breath.
                    Our mission is to combine innovation and quality to bring fresh air
                    from all over the world to your doorstep.
                </p>

                <p className="about-text">
                    Crafted with care and precision, we focus on sustainable materials
                    to ensure outstanding performance and design.
                </p>
            </div>
        </section>
    );
}

export default About;