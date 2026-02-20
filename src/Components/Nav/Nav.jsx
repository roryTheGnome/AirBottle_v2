import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {setLang} from "../../langSlice";
import "./Nav.css";

export default function Nav() {

    const {t}=useTranslation();
    const dispatch=useDispatch();
    const currentLang=useSelector((state)=>state.lang.value);

    const [open,setOpen]=useState(false);
    const langs = [
        { code: "en", label: "English" },
        { code: "de", label: "Deutsch" },
        { code: "pl", label: "Polski" },
        { code: "be", label: "Беларуская" },
        { code: "uk", label: "Українська" },
        { code: "ru", label: "Русский" },
    ];
    const handleLang=(lang)=>{
        dispatch(setLang(lang));
        setOpen(false);
    }

    return (
        <nav className="nav">
            <div className="nav-logo">AirWrapper</div>

            <ul className="nav-links">
                <li><Link to="/">{t("home")}</Link></li>
                <li><Link to="/products">{t("products")}</Link></li>
                <li><Link to="/contact">{t("contact")}</Link></li>
            </ul>

            <div className="lang">
                <button className="lang-button" onClick={()=>setOpen(!open)}>
                    {currentLang.toUpperCase()}
                </button>
                {open &&(
                    <ul className="lang-menu">
                        {langs.map((lang)=>
                        <li key={lang.code} className={`lang-item ${currentLang===lang.code? "a":"na"}`}
                        onClick={()=>handleLang(lang.code)}>
                            {lang.label}
                        </li>)}
                    </ul>
                )}
            </div>
        </nav>
    );
}
