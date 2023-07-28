import React from "react";
import BrandName from "./BrandName.jsx";

const Header = () => {
    return (
        <header className="header">
            <ion-icon name="search"></ion-icon>
            <BrandName />
            <div></div>
        </header>
    );
};

export default Header;
