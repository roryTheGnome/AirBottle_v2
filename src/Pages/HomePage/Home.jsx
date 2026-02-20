import React from "react";
import "./Home.css";
import About from "../../Components/About/About";
import Green from "../../Components/Green/Green";

function Home() {
    return (
        <>
            <section className="home">
                <div className="home-left">
                    <h1 className="title">AirWrapper</h1>
                    <h3 className="subtitle">...where purity meets quality</h3>
                </div>

                <div className="home-right">
                    <img src="https://picsum.photos/id/558/450/650"></img>
                </div>
            </section>
            {/*maybe i should carry these part to its own file?? or is this*/}

            <About/>

            <Green/>
        </>


    );
}

export default Home;
