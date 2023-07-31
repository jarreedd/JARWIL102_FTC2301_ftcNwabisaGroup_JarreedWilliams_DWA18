import React from "react";
import BrandName from "./BrandName.jsx";

const Header = () => {
    return (
        <header className="header">
            <BrandName />
            <ion-icon name="search"></ion-icon>
        </header>
    );
};

export default Header;
