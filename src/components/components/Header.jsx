import React from "react";
import BrandName from "./BrandName.jsx";
import Menu from "./Menu.jsx";

const Header = () => {
    return (
        <header className="header">
            <ion-icon name="search"></ion-icon>
            <BrandName />
            <Menu />
        </header>
    );
};

export default Header;
