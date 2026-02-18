import App from './App.jsx'
import React from "react";
import {createBrowserRouter} from "react-router-dom";

export const router=createBrowserRouter([
    {path: "/", element:<App />},
    {path: "*", element:<App />}, //404 page here
]);
