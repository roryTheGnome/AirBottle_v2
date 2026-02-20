import React from "react";
import "./Green.css";

function Green() {
    return (
        <section className="green">
            <h2 className="green-title">Sustainability at Heart</h2>

            <p className="green-intro">
                We believe clean air and a clean planet go hand in hand.
                Our green thumb philosophy drives every decision we make.
            </p>

            <div className="green-cards">
                <div className="green-card">
                    <h3>Eco Materials</h3>
                    <p>Responsibly sourced and recyclable components.</p>
                </div>

                <div className="green-card">
                    <h3>Energy Efficient</h3>
                    <p>Designed to minimize energy consumption and waste.</p>
                </div>

                <div className="green-card">
                    <h3>Low Emissions</h3>
                    <p>Cleaner production for a healthier future.</p>
                </div>
            </div>
        </section>
    );
}

export default Green;