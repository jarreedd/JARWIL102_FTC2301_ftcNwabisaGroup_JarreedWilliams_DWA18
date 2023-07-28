import React from "react";
import BrandName from "./BrandName.jsx";
import Menu from "./Menu.jsx";

const Header = () => {
    return (
        <>
            <header className="header">
                <ion-icon name="search"></ion-icon>
                <BrandName />
                <div></div>
            </header>
            <Menu />
        </>
    );
};

export default Header;
