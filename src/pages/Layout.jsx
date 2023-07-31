import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Menu from "../components/Menu.jsx";

const Layout = () => {
    return (
        <>
            <Header />
            <Menu />
            <Outlet />
        </>
    );
};

export default Layout;
