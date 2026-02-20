import React from "react";
import {Outlet} from "react-router-dom";
import './App.css'
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";

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