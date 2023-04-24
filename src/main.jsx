import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { ProSidebarProvider  } from 'react-pro-sidebar';
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ProSidebarProvider>
                <App />
            </ProSidebarProvider>
        </BrowserRouter>
        
    </React.StrictMode>
    )
    ;