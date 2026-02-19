import App from './App.jsx'
import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {index:true, element:<Home/>},
            {path:"contact", element:<Contact/>},
        ]
    }, //404 page here
]);
