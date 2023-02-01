import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import App from "./App"
import "./index.css"
import DetectMobileBrowser from "./pages/DetectMobileBrowsers"
import QR from "./pages/QR"
import RedirectTo from "./pages/RedirectTo"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/qr" element={<QR />} />
                <Route path="/br" element={<DetectMobileBrowser />} />
                <Route path=":prID" element={<RedirectTo toPreview />} />
                <Route path="/pr/:prID" element={<RedirectTo />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
