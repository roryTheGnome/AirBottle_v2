import React,{useEffect} from "react";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux" ;
import i18n from "./Language/i18n"
import './App.css'
import Nav from "./Components/Nav/Nav"
import Footer from "./Components/Footer/Footer";

function App(){

    const lang=useSelector((state)=> state.lang.value);

    useEffect(() => {
        i18n.changeLanguage(lang)
    }, [lang]);

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