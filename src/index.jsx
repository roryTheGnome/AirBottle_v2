import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import './App.css'
import {router} from './router.jsx'
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {store} from "./store";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </StrictMode>,
)