import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div>
                    <h3>AirBottle</h3>
                    <p>...where purity meets responsibility</p>
                </div>

                <div>
                    <h3>Contact</h3>

                    <h4>Mail</h4>
                    <p>mail@mail.com</p>
                    <h4>Phone</h4>
                    <p>+0 000 00 00</p>
                </div>

                <div>
                    <h4>Links</h4>
                    <a href="/">Home</a>
                    <a href="/">Products</a>
                    <a href="/">Contact</a>
                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} AirBottle -- All rights reserved
            </div>
        </footer>
    );
}
