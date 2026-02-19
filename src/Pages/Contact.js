import React from "react";
import "./Contact.css";

function Contact(){
    return(
        <section className="contact">
            <div className="title-area">
                <h1 className="contact-title">Contact AirWrapper</h1>
                <p className="contact-subtitle">Decided to put an order? Let us know</p>
            </div>
            <div className="contact-wrapper">

                <div className="info">
                    <div className="contact-item">
                        <h4>Email</h4>
                        <p>Send us an email</p>
                        <a href="mailto:example@somemail.com">example@somemail.com</a>
                    </div>

                    <div className="contact-item">
                        <h4>Phone</h4>
                        <p>Give us a call</p>
                        <a href="tel:+0000000000">+0 (000) 000 000</a>
                    </div>

                    <div className="contact-item">
                        <h4>Office</h4>
                        <div className="office">
                            <p>123 Al. Main, Warsaw, Poland</p>
                            <a href="#">Get Directions →</a>
                        </div>
                        <div className="office">
                            <p>45 Al. Main, Krakow, Poland</p>
                            <a href="#">Get Directions →</a>
                        </div>

                    </div>
                    {/*MAYBE ADD A MAP HERE LATER??*/}
                </div>

                <div className="contact-foto">
                    <img src="https://picsum.photos/id/377/400/450"></img>
                </div>

            </div>
        </section>
    )
}

export default Contact