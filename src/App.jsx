import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Downloads from "./pages/Downloads.jsx";
// import Landing from "";
import Login from "./pages/Login.jsx";
import Show from "./pages/Show.jsx";
import Favorites from "./pages/Favorites.jsx";
import NoPage from "./pages/NoPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="show" element={<Show />} />
                    <Route path="login" element={<Login />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="downloads" element={<Downloads />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
