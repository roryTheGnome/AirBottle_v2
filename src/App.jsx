import React from "react";
import {Outlet} from "react-router-dom";
import './App.css'
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact";

function App(){
    return(
        <div className="app">
            <Nav />

            <main>
                <Outlet />
            </main>

            <Footer/>
        </div>
    )
}

export default App