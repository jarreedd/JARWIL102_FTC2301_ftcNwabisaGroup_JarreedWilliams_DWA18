import React from "react";

const Menu = () => {
    const [showMore, setShowMore] = React.useState(false);

    function toggleMenu() {
        setShowMore((showMore) => !showMore);
    }

    return (
        <>
            <div
                onClick={toggleMenu}
                className={showMore ? "menu-btn close" : "menu-btn"}
            >
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>
            <nav className={showMore ? "menu show" : "menu"}>
                <div className={showMore ? "menu-nav show" : "menu-nav"}></div>
            </nav>
        </>
    );
};

export default Menu;
